// scripts/fetch-scores.js
// 1. Scores von OpenLigaDB
// 2. TV-Sender via MediathekViewWeb API (öffentlich, kein Login)
//    https://mediathekviewweb.de/api/query
//    Sucht täglich nach WM-Sendungen bei ARD/ZDF und matched sie gegen Spielzeiten

import { writeFileSync, readFileSync, existsSync } from 'fs';

const LEAGUE   = 'wm26';
const SEASON   = '2026';
const API_BASE = 'https://api.openligadb.de';
const MVWEB    = 'https://mediathekviewweb.de/api/query';

// ── 1. Scores ────────────────────────────────────────────────
async function fetchScores() {
  console.log('Lade Scores von OpenLigaDB...');
  const res = await fetch(`${API_BASE}/getmatchdata/${LEAGUE}/${SEASON}`);
  if (!res.ok) throw new Error(`OpenLigaDB HTTP ${res.status}`);
  return res.json();
}

// ── 2. TV via MediathekViewWeb ────────────────────────────────
async function fetchTVFromMediathek() {
  console.log('Suche WM-Sendungen in ARD/ZDF Mediathek...');

  const query = {
    queries: [
      { fields: ['title', 'topic'], query: 'WM 2026' },
      { fields: ['channel'],        query: 'Das Erste' }
    ],
    sortBy:    'timestamp',
    sortOrder: 'desc',
    future:    true,   // nur zukünftige Sendungen
    offset:    0,
    size:      200,
    duration_min: 60,  // mind. 60 Min — echte Spiele
  };

  try {
    const res = await fetch(MVWEB, {
      method:  'POST',
      headers: { 'Content-Type': 'text/plain' },
      body:    JSON.stringify(query),
    });
    if (!res.ok) {
      console.warn('MediathekViewWeb nicht erreichbar:', res.status);
      return [];
    }
    const data = await res.json();
    return data?.result?.results ?? [];
  } catch (err) {
    console.warn('MediathekViewWeb Fehler:', err.message);
    return [];
  }
}

async function fetchTVFromMediathekZDF() {
  const query = {
    queries: [
      { fields: ['title', 'topic'], query: 'WM 2026' },
      { fields: ['channel'],        query: 'ZDF' }
    ],
    sortBy: 'timestamp', sortOrder: 'desc',
    future: true, offset: 0, size: 200, duration_min: 60,
  };
  try {
    const res = await fetch(MVWEB, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(query),
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.result?.results ?? [];
  } catch { return []; }
}

// Matched eine Mediathek-Sendung gegen ein Match-Zeitfenster
function matchTV(matchDateUTC, mediathekEntries) {
  const matchTime  = new Date(matchDateUTC);
  const windowStart = new Date(matchTime.getTime() - 45 * 60000);
  const windowEnd   = new Date(matchTime.getTime() + 45 * 60000);

  // Sortiere: Free-TV Sender zuerst
  const freePriority = ['Das Erste', 'ARD', 'ZDF', 'One', 'ARD alpha'];

  for (const sender of freePriority) {
    const match = mediathekEntries.find(e => {
      if (!e.timestamp) return false;
      const t = new Date(e.timestamp * 1000);
      return e.channel?.includes(sender.split(' ')[0])
          && t >= windowStart
          && t <= windowEnd;
    });
    if (match) {
      const channel = match.channel?.includes('ZDF') ? 'ZDF' : 'ARD';
      return { tv: channel, freeTv: true };
    }
  }
  return null;
}

// Normalisiert Teamnamen für robustes Matching (Umlaute, Sonderzeichen, Großschreibung)
function normalizeTeam(name) {
  return (name || '')
    .toLowerCase()
    .replace(/[äáàâ]/g, 'a').replace(/[öóò]/g, 'o').replace(/[üúù]/g, 'u')
    .replace(/[éèê]/g, 'e').replace(/ß/g, 'ss').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]/g, '');
}

// ── Main ─────────────────────────────────────────────────────
async function main() {
  const now = new Date();

  // Scores
  let apiData = [];
  try {
    apiData = await fetchScores();
    console.log(`${apiData.length} Spiele geladen`);
  } catch (err) {
    console.error('Score-Fehler:', err.message);
  }

  const scores = {};
  apiData.forEach(m => {
    const start = new Date(m.matchDateTimeUTC);
    const end   = new Date(start.getTime() + 120 * 60000);
    const live  = now >= start && now <= end && !m.matchIsFinished;
    // Höchsten verfügbaren resultTypeID nehmen — bei K.o.-Spielen mit
    // Verlängerung/Elfmeterschießen liefert OpenLigaDB zusätzliche Einträge
    // mit höherer resultTypeID (z.B. 3 = n.V., 4 = n.E.), die den finalen
    // Sieger zeigen. resultTypeID 2 = reguläres 90-Minuten-Ergebnis.
    const results = m.matchResults ?? [];
    const res = results.length > 0
      ? results.reduce((a, b) => (b.resultTypeID > a.resultTypeID ? b : a))
      : null;

    // Reguläres 90-Minuten-Ergebnis separat merken (für die Anzeige "1:1")
    const regularRes = results.find(r => r.resultTypeID === 2);
    // Falls das finale Ergebnis (höchste resultTypeID) vom regulären abweicht
    // UND beide Teams im regulären Ergebnis gleichauf waren -> Elfmeterschießen
    let penaltyWinner = null;
    let penaltyScore  = null;
    // Nur resultTypeID === 5 ist echtes Elfmeterschießen (n.E.)
    // resultTypeID 3 = nach Verlängerung (n.V.), 4 = Sonderfall — kein Elfmeterschießen!
    const psoRes = results.find(r => r.resultTypeID === 5);
    if (regularRes && psoRes && regularRes.pointsTeam1 === regularRes.pointsTeam2) {
      penaltyWinner = psoRes.pointsTeam1 > psoRes.pointsTeam2 ? 1 : (psoRes.pointsTeam2 > psoRes.pointsTeam1 ? 2 : null);
      // Reiner Elfmeter-Score = Gesamtscore minus reguläres Ergebnis
      penaltyScore  = `${psoRes.pointsTeam1 - regularRes.pointsTeam1}:${psoRes.pointsTeam2 - regularRes.pointsTeam2}`;
    }
    // Für die Anzeige immer das reguläre 90-Min-Ergebnis nutzen (z.B. "1:1"),
    // nicht das Elfmeter-Resultat — der Sieger und der genaue Elfmeter-Endstand
    // werden separat über penaltyWinner/penaltyScore mitgeteilt.
    const displayRes = regularRes ?? res;
    const entry = {
      score:         displayRes ? `${displayRes.pointsTeam1}:${displayRes.pointsTeam2}` : null,
      isLive:        live,
      isFinished:    m.matchIsFinished,
      minute:        live ? (m.matchMinute ?? null) : null,
      penaltyWinner: penaltyWinner, // 1=home, 2=away, null=kein Elfmeterschießen nötig
      penaltyScore:  penaltyScore,  // z.B. "4:5", null wenn kein Elfmeterschießen
    };
    // Primärschlüssel: echte OpenLigaDB matchID
    scores[m.matchID] = entry;
    // Zusätzlicher Fallback-Schlüssel: Teamnamen-Kombination (beide Richtungen)
    // Damit Matches in matches.js OHNE openligaId (z.B. K.o.-Runde mit
    // manuell eingetragenen Paarungen) trotzdem automatisch gematched werden.
    if (m.team1?.teamName && m.team2?.teamName) {
      const t1 = normalizeTeam(m.team1.teamName);
      const t2 = normalizeTeam(m.team2.teamName);
      scores[`team_${t1}_${t2}`] = entry;
      scores[`team_${t2}_${t1}`] = entry;
    }
  });

  // ── Bedingte Score-Korrekturen ───────────────────────────────
  // Korrigiert bekannte OpenLigaDB-Fehler NUR wenn der falsche Wert
  // geliefert wird — greift automatisch nicht mehr sobald OpenLigaDB
  // den korrekten Wert einträgt.
  const SCORE_CORRECTIONS = [
    // Belgien-Senegal: OpenLigaDB zeigt fälschlich 2:2, korrekt ist 3:2 n.V.
    { key: 'team_belgien_senegal', wrongScore: '2:2', correctScore: '3:2' },
    { key: 'team_senegal_belgien', wrongScore: '2:2', correctScore: '2:3' },
    // Argentinien-Kap Verde: OpenLigaDB zeigt fälschlich 1:1, korrekt ist 3:2 n.V.
    { key: 'team_argentinien_kapverde', wrongScore: '1:1', correctScore: '3:2' },
    { key: 'team_kapverde_argentinien', wrongScore: '1:1', correctScore: '2:3' },
  ];
  for (const { key, wrongScore, correctScore } of SCORE_CORRECTIONS) {
    if (scores[key]?.score === wrongScore && scores[key]?.isFinished) {
      scores[key].score = correctScore;
      console.log(`Score-Korrektur: ${key} ${wrongScore} -> ${correctScore}`);
    }
  }

  // TV aus Mediathek
  const [ardEntries, zdfEntries] = await Promise.all([
    fetchTVFromMediathek(),
    fetchTVFromMediathekZDF(),
  ]);
  const allEntries = [...ardEntries, ...zdfEntries];
  console.log(`${allEntries.length} Mediathek-Einträge gefunden`);

  // Bestehende TV-Daten laden
  let existingTv = {};
  if (existsSync('./scores.json')) {
    try {
      const ex = JSON.parse(readFileSync('./scores.json', 'utf8'));
      existingTv = ex.tvData ?? {};
    } catch {}
  }

  // Neue TV-Daten ermitteln
  const newTv = {};
  apiData.forEach(m => {
    if (!m.matchDateTimeUTC) return;
    const tv = matchTV(m.matchDateTimeUTC, allEntries);
    if (tv) {
      newTv[m.matchID] = tv;
      console.log(`  TV gefunden: Match ${m.matchID} → ${tv.tv}`);
    }
  });

  // Merge: Free-TV überschreibt Magenta, sonst bestehende behalten
  const mergedTv = { ...existingTv };
  for (const [id, entry] of Object.entries(newTv)) {
    const existing = mergedTv[id];
    // Nur überschreiben wenn neu Free-TV ist oder noch nichts bekannt
    if (!existing || (entry.freeTv && !existing.freeTv)) {
      mergedTv[id] = entry;
    }
  }

  writeFileSync('./scores.json', JSON.stringify({
    updatedAt: now.toISOString(),
    scores,
    tvData: mergedTv,
  }, null, 2), 'utf8');

  console.log(`scores.json: ${Object.keys(scores).length} Scores, ${Object.keys(mergedTv).length} TV-Einträge`);
}

main().catch(err => { console.error(err); process.exit(1); });
