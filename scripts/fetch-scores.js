// scripts/fetch-scores.js
import { readFileSync, writeFileSync } from 'fs';

const LEAGUE   = 'wm26';
const SEASON   = '2026';
const API_BASE = 'https://api.openligadb.de';

async function fetchMatches() {
  console.log('Lade Spielergebnisse von OpenLigaDB...');

  let apiData;
  try {
    const res = await fetch(`${API_BASE}/getmatchdata/${LEAGUE}/${SEASON}`);
    apiData   = await res.json();
    console.log(`${apiData.length} Spiele geladen`);
  } catch (err) {
    console.error('API-Fehler:', err.message);
    process.exit(1);
  }

  // ── scores.json bauen ─────────────────────────────────────────
  // Enthält alle Spiele mit aktuellem Stand
  // laufende Spiele haben isLive: true
  const now    = new Date();
  const scores = {};

  apiData.forEach(apiMatch => {
    const matchStart = new Date(apiMatch.matchDateTime);
    const matchEnd   = new Date(matchStart.getTime() + 120 * 60 * 1000); // +120min

    const isLive     = now >= matchStart && now <= matchEnd && !apiMatch.matchIsFinished;
    const isFinished = apiMatch.matchIsFinished;

    const homeGoals  = apiMatch.matchResults?.find(r => r.resultTypeID === 2)?.pointsTeam1
                    ?? apiMatch.matchResults?.find(r => r.resultTypeID === 1)?.pointsTeam1;
    const awayGoals  = apiMatch.matchResults?.find(r => r.resultTypeID === 2)?.pointsTeam2
                    ?? apiMatch.matchResults?.find(r => r.resultTypeID === 1)?.pointsTeam2;

    const score = (homeGoals !== undefined && awayGoals !== undefined)
      ? `${homeGoals}:${awayGoals}`
      : null;

    // Key: Datum + Heimteam-Name (normalisiert)
    const dateStr  = apiMatch.matchDateTime?.split('T')[0] ?? '';
    const homeNorm = (apiMatch.team1?.teamName ?? '').toLowerCase().replace(/\s/g, '_');
    const key      = `${dateStr}_${homeNorm}`;

    scores[key] = {
      score,
      isLive,
      isFinished,
      minute: isLive ? apiMatch.matchMinute ?? null : null,
    };
  });

  // scores.json schreiben
  const scoresPath = './scores.json';
  const scoresOut  = {
    updatedAt: now.toISOString(),
    scores,
  };
  writeFileSync(scoresPath, JSON.stringify(scoresOut, null, 2), 'utf8');
  console.log(`scores.json geschrieben (${Object.keys(scores).length} Spiele)`);

  // ── matches.js aktualisieren (Endergebnisse) ──────────────────
  const filePath   = './js/matches.js';
  let fileContent  = readFileSync(filePath, 'utf8');
  let updatedCount = 0;

  apiData.forEach(apiMatch => {
    if (!apiMatch.matchIsFinished) return;

    const homeGoals = apiMatch.matchResults?.find(r => r.resultTypeID === 2)?.pointsTeam1;
    const awayGoals = apiMatch.matchResults?.find(r => r.resultTypeID === 2)?.pointsTeam2;
    if (homeGoals === undefined || awayGoals === undefined) return;

    const score    = `${homeGoals}:${awayGoals}`;
    const apiDate  = apiMatch.matchDateTime?.split('T')[0];
    if (!apiDate) return;

    const homeName    = apiMatch.team1?.teamName ?? '';
    const awayName    = apiMatch.team2?.teamName ?? '';
    const escapedHome = homeName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex       = new RegExp(
      `(date:\\s*'${apiDate}'[^}]*?home:\\s*'[^']*${escapedHome}[^']*'[^}]*?score:\\s*)null`,
      's'
    );

    if (regex.test(fileContent)) {
      fileContent  = fileContent.replace(regex, `$1'${score}'`);
      updatedCount++;
      console.log(`✓ ${homeName} vs ${awayName}: ${score}`);
    }
  });

  if (updatedCount > 0) {
    writeFileSync(filePath, fileContent, 'utf8');
    console.log(`\n${updatedCount} Endergebnis(se) in matches.js gespeichert`);
  } else {
    console.log('Keine neuen Endergebnisse');
  }
}

fetchMatches();