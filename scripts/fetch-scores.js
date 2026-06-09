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
    const res   = m.matchResults?.find(r => r.resultTypeID === 2)
               ?? m.matchResults?.find(r => r.resultTypeID === 1);
    scores[m.matchID] = {
      score:      res ? `${res.pointsTeam1}:${res.pointsTeam2}` : null,
      isLive:     live,
      isFinished: m.matchIsFinished,
      minute:     live ? (m.matchMinute ?? null) : null,
    };
  });

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
