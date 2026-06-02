// js/app.js
import { countryConfig, groups } from './data.js';
import { matches } from './matches.js';
import { i18n, t, formatDate } from './i18n.js';

// ═══════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════
let currentCountry  = 'DE';
let currentLang     = 'de';
let currentFilter   = 'all';
let currentTab      = 'spielplan';
let countdownTimer  = null;

// ═══════════════════════════════════════════════════════════════
// URL-PARAMETER (für Home Assistant iframe)
// ═══════════════════════════════════════════════════════════════
function readURLParams() {
  const params = new URLSearchParams(window.location.search);
  const rawCountry = (params.get('country') ?? '').toUpperCase();
  const rawLang    =  params.get('lang') ?? '';

  if (countryConfig[rawCountry]) currentCountry = rawCountry;
  if (i18n[rawLang])             currentLang    = rawLang;
  else currentLang = countryConfig[currentCountry]?.lang ?? 'de';
}

// ═══════════════════════════════════════════════════════════════
// HILFSFUNKTIONEN
// ═══════════════════════════════════════════════════════════════
function getMatchDateTime(m) {
  return new Date(`${m.date}T${m.time}:00`);
}

function isToday(dateStr) {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toDateString() === new Date().toDateString();
}

function isFavMatch(m) {
  const cc = countryConfig[currentCountry];
  if (!cc?.teamCode) return false;
  return Array.isArray(m.homeCode !== undefined
    ? [m.homeCode, m.awayCode]
    : m.teams)
    && (m.homeCode === cc.teamCode || m.awayCode === cc.teamCode
        || (m.teams && m.teams.includes(cc.teamCode)));
}

function getTVColor(tvName) {
  const colors = {
    'ARD':       '#0057a8',
    'ZDF':       '#f07d00',
    'MagentaTV': '#c0006e',
    'Magenta':   '#c0006e',
  };
  return colors[tvName] ?? '#444';
}

function renderTVBadge(m, mini = false) {
  const cls = mini ? 'tv-mini' : 'tv-badge';
  const cc  = countryConfig[currentCountry];

  // Für Deutschland: exakte Spieldaten nutzen
  if (currentCountry === 'DE') {
    const color = getTVColor(m.tv);
    return `<span class="${cls}" style="background:${color};color:#fff">${m.tv}</span>`;
  }

  // Für alle anderen Länder: ersten passenden Sender aus countryConfig nehmen
  // Free-TV bevorzugen wenn vorhanden
  const broadcasters = cc?.broadcasters ?? [];
  const preferred    = broadcasters.find(b => b.free === true) ?? broadcasters[0];

  if (!preferred) {
    return `<span class="${cls}" style="background:#444;color:#fff">TBD</span>`;
  }

  return `<span class="${cls}" style="background:${preferred.color};color:#fff">${preferred.name}</span>`;
}

// ═══════════════════════════════════════════════════════════════
// MATCH KARTE
// ═══════════════════════════════════════════════════════════════
function renderMatchCard(m, showDate = false) {
  const fav     = isFavMatch(m);
  const score   = m.score ?? '– : –';
  const dateStr = showDate
    ? `<span class="match-date-label">${formatDate(m.date, currentLang)}</span>`
    : '';
  const roundLabel = m.round && !m.group
    ? `<span class="match-round-label">${t(currentLang, m.round) || m.round}</span>`
    : '';

  return `
    <div class="match-card${fav ? ' fav' : ''}">
      <div class="match-team">
        <span class="flag">${m.homeflag}</span>
        <span class="team-name">${m.home}</span>
      </div>
      <div class="match-center">
        <div class="score">${score}</div>
        <div class="match-time">${dateStr}${m.time}</div>
        ${roundLabel}
      </div>
      <div class="match-team right">
        <span class="flag">${m.awayflag}</span>
        <span class="team-name">${m.away}</span>
      </div>
      <div class="match-tv-row">${renderTVBadge(m, true)}</div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════
// SPIELPLAN TAB
// ═══════════════════════════════════════════════════════════════
function filterMatchList(filter) {
  const cc = countryConfig[currentCountry];
  let list = matches.filter(m => m.group !== null); // nur Gruppenphase + K.o.
  switch (filter) {
    case 'heute':
      list = list.filter(m => isToday(m.date));
      break;
    case 'fav':
      list = list.filter(m => isFavMatch(m));
      break;
    case 'freietv':
      list = list.filter(m => m.freeTv === true);
      break;
    default:
      break;
  }
  return list.sort((a, b) => getMatchDateTime(a) - getMatchDateTime(b));
}

function renderSpielplan() {
  const list = filterMatchList(currentFilter);
  const container = document.getElementById('match-list-container');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state">${t(currentLang, 'no_matches')}</div>`;
    return;
  }

  // Nach Datum gruppieren
  const byDate = {};
  list.forEach(m => {
    if (!byDate[m.date]) byDate[m.date] = [];
    byDate[m.date].push(m);
  });

  let html = '';
  Object.entries(byDate).forEach(([date, dayMatches]) => {
    const todayMark = isToday(date)
      ? ` <span class="today-mark">● ${t(currentLang, 'filter_today').toUpperCase()}</span>`
      : '';
    html += `<div class="section-title">${formatDate(date, currentLang)}${todayMark}</div>
             <div class="match-list">`;
    dayMatches.forEach(m => { html += renderMatchCard(m, false); });
    html += `</div>`;
  });

  container.innerHTML = html;
}

function setFilter(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSpielplan();
}

// Filter-Buttons aktualisieren (Favorit-Label)
function updateFilterBar() {
  const cc  = countryConfig[currentCountry];
  const favBtn = document.getElementById('filter-fav-btn');
  const ftvBtn = document.getElementById('filter-freetv-btn');
  if (favBtn) favBtn.textContent = `${cc.flag} ${cc.name}`;
  if (ftvBtn) ftvBtn.textContent = t(currentLang, 'filter_freetv');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(currentLang, el.dataset.i18n);
  });
}

// ═══════════════════════════════════════════════════════════════
// FAVORITEN TAB
// ═══════════════════════════════════════════════════════════════
function renderFavTab() {
  const cc = countryConfig[currentCountry];

  // Alle Spiele des Favoriten sortiert
  const favMatches = matches
    .filter(m => isFavMatch(m))
    .sort((a, b) => getMatchDateTime(a) - getMatchDateTime(b));

  const now       = new Date();
  const nextMatch = favMatches.find(m => getMatchDateTime(m) > now);

  // ── Next Match Hero ──
  const heroTeams = document.getElementById('hero-teams');
  const heroMeta  = document.getElementById('hero-meta');
  const nextLabel = document.querySelector('.next-label');

  if (nextLabel) nextLabel.textContent = t(currentLang, 'next_match');

  if (nextMatch && heroTeams && heroMeta) {
    heroTeams.innerHTML = `
      <div class="hero-team">
        <span class="hero-flag">${nextMatch.homeflag}</span>
        <span class="hero-name">${nextMatch.home}</span>
      </div>
      <div class="hero-vs">VS</div>
      <div class="hero-team">
        <span class="hero-flag">${nextMatch.awayflag}</span>
        <span class="hero-name">${nextMatch.away}</span>
      </div>`;
    heroMeta.innerHTML = `
      <div>
        <div class="hero-datetime">
          <strong>${formatDate(nextMatch.date, currentLang)}</strong> · ${nextMatch.time}
        </div>
        <div class="hero-venue">
          ${nextMatch.group ? t(currentLang, 'group') + ' ' + nextMatch.group : t(currentLang, nextMatch.round ?? '')}
        </div>
      </div>
      ${renderTVBadge(nextMatch)}`;

    // Countdown starten
    if (countdownTimer) clearInterval(countdownTimer);
    startCountdown(getMatchDateTime(nextMatch));

  } else if (heroTeams) {
    heroTeams.innerHTML = `
      <div class="empty-state">${t(currentLang, 'no_next_match')}</div>`;
    if (countdownTimer) clearInterval(countdownTimer);
  }

  // ── Alle Fav-Spiele ──
  const favList = document.getElementById('fav-match-list');
  if (favList) {
    if (favMatches.length === 0) {
      favList.innerHTML = `<div class="empty-state">${t(currentLang, 'no_matches')}</div>`;
    } else {
      favList.innerHTML = favMatches.map(m => renderMatchCard(m, true)).join('');
    }
  }

  // ── TV-Rechte Box ──
  const tvBox = document.getElementById('tv-rights-box');
  if (tvBox) {
    tvBox.innerHTML = cc.broadcasters.map(b => `
      <div class="tv-rights-row">
        <span class="tv-mini" style="background:${b.color};color:#fff">${b.name}</span>
        <span class="tv-rights-note">
          ${b.free === true  ? t(currentLang, 'free_tv')    : ''}
          ${b.free === false ? t(currentLang, 'pay_tv')     : ''}
          ${b.free === null  ? t(currentLang, 'tv_unknown') : ''}
          — <strong>${b.note}</strong>
        </span>
      </div>`).join('');
  }

  // Labels aktualisieren
  const kickoffLabel      = document.querySelector('[data-i18n="kickoff_in"]');
  const allMatchesLabel   = document.querySelector('[data-i18n="all_group_matches"]');
  const tvRightsLabel     = document.querySelector('[data-i18n="tv_rights"]');
  if (kickoffLabel)    kickoffLabel.textContent    = t(currentLang, 'kickoff_in');
  if (allMatchesLabel) allMatchesLabel.textContent = t(currentLang, 'all_group_matches');
  if (tvRightsLabel)   tvRightsLabel.textContent   = t(currentLang, 'tv_rights');
}

// ═══════════════════════════════════════════════════════════════
// COUNTDOWN
// ═══════════════════════════════════════════════════════════════
function startCountdown(target) {
  const display = document.getElementById('countdown-display');
  if (!display) return;

  function update() {
    const diff = target - new Date();
    if (diff <= 0) {
      display.textContent = t(currentLang, 'running');
      clearInterval(countdownTimer);
      return;
    }
    const days    = Math.floor(diff / 86_400_000);
    const hours   = Math.floor((diff % 86_400_000) / 3_600_000);
    const minutes = Math.floor((diff % 3_600_000)  / 60_000);
    const seconds = Math.floor((diff % 60_000)     / 1_000);
    const pad     = n => String(n).padStart(2, '0');
    display.textContent =
      `${days}${t(currentLang, 'days')} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  update();
  countdownTimer = setInterval(update, 1000);
}

// ═══════════════════════════════════════════════════════════════
// GRUPPEN TAB
// ═══════════════════════════════════════════════════════════════
function renderGroups() {
  const cc        = countryConfig[currentCountry];
  const container = document.getElementById('groups-container');
  if (!container) return;

  // Favoriten-Gruppe zuerst, Rest alphabetisch
  const sorted = Object.entries(groups).sort(([a], [b]) => {
    if (a === cc.group) return -1;
    if (b === cc.group) return  1;
    return a.localeCompare(b);
  });

  container.innerHTML = sorted.map(([letter, grp]) => `
    <div class="group-block">
      <div class="group-header">
        ${t(currentLang, 'group')} ${letter}
      </div>
      <table class="standings-table">
        <thead><tr>
          <th>Team</th>
          <th>${t(currentLang, 'played')}</th>
          <th>${t(currentLang, 'won')}</th>
          <th>${t(currentLang, 'drawn')}</th>
          <th>${t(currentLang, 'lost')}</th>
          <th>${t(currentLang, 'goals')}</th>
          <th>${t(currentLang, 'points')}</th>
        </tr></thead>
        <tbody>
          ${grp.teams.map((team, i) => {
            const isFav = team.code === cc.teamCode;
            return `
              <tr class="${isFav ? 'fav-row' : ''}">
                <td>
                  <div class="team-cell">
                    <span class="pos">${i + 1}</span>
                    <span class="flag">${team.flag}</span>
                    <span>${team.name}</span>
                  </div>
                </td>
                <td>0</td><td>0</td><td>0</td><td>0</td>
                <td>0:0</td><td><strong>0</strong></td>
              </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`).join('');
}

// ═══════════════════════════════════════════════════════════════
// BRACKET TAB
// ═══════════════════════════════════════════════════════════════
const bracketRounds = [
  { key: 'R32', ids: [73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88] },
  { key: 'R16', ids: [89,90,91,92,93,94,95,96] },  // Platzhalter — werden befüllt
  { key: 'QF',  ids: [89,90,91,92] },
  { key: 'SF',  ids: [93,94] },
];

function renderBracketTeam(code, flag, name) {
  const cc    = countryConfig[currentCountry];
  const isFav = code && code === cc.teamCode;
  const isEmpty = !name || name === 'TBD';
  if (isEmpty) return `<div class="bracket-team empty">&nbsp;</div>`;
  return `
    <div class="bracket-team${isFav ? ' fav' : ''}">
      <span>${flag}</span>
      <span class="bracket-team-name">${name}</span>
    </div>`;
}

function renderBracket() {
  const container = document.getElementById('bracket-container');
  if (!container) return;

  const roundDefs = [
    { key: 'R32', label: t(currentLang, 'round_of_32'),   matchIds: [73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88] },
    { key: 'R16', label: t(currentLang, 'round_of_16'),   matchIds: [] }, // nach Gruppenphase
    { key: 'QF',  label: t(currentLang, 'quarter_final'), matchIds: [] },
    { key: 'SF',  label: t(currentLang, 'semi_final'),    matchIds: [] },
  ];

  const roundsHtml = roundDefs.map(round => {
    const roundMatches = round.matchIds.length > 0
      ? round.matchIds.map(id => matches.find(m => m.id === id)).filter(Boolean)
      : Array(round.key === 'R16' ? 8 : round.key === 'QF' ? 4 : 2)
          .fill(null)
          .map((_, i) => ({
            id: null,
            home: 'TBD', homeflag: '🏳️', homeCode: null,
            away: 'TBD', awayflag: '🏳️', awayCode: null,
            date: '–', score: null,
          }));

    const matchesHtml = roundMatches.map(m => `
      <div class="bracket-match">
        ${renderBracketTeam(m.homeCode, m.homeflag, m.home)}
        ${renderBracketTeam(m.awayCode, m.awayflag, m.away)}
        <div class="bracket-date">${m.date ?? '–'}</div>
      </div>`).join('');

    return `
      <div class="bracket-round">
        <div class="round-label">${round.label}</div>
        <div class="bracket-slots">${matchesHtml}</div>
      </div>`;
  }).join('');

  // Finale separat
  const finalMatch = matches.find(m => m.id === 96);
  const finaleHtml = `
    <div class="bracket-round" style="min-width:150px;">
      <div class="round-label">${t(currentLang, 'final')} · 19.07</div>
      <div class="bracket-slots" style="justify-content:center;">
        <div class="bracket-match">
          ${renderBracketTeam(finalMatch?.homeCode, finalMatch?.homeflag, finalMatch?.home)}
          ${renderBracketTeam(finalMatch?.awayCode, finalMatch?.awayflag, finalMatch?.away)}
          <div class="bracket-date">19.07 · New York</div>
        </div>
        <div class="finale-trophy">🏆</div>
      </div>
    </div>`;

  container.innerHTML = `
    <div class="bracket-wrap">
      <div class="bracket">
        ${roundsHtml}
        ${finaleHtml}
      </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════
// TABS
// ═══════════════════════════════════════════════════════════════
function switchTab(name, btn) {
  currentTab = name;
  document.querySelectorAll('.tab')
    .forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.view')
    .forEach(v => v.classList.remove('active'));
  const activeBtn  = btn ?? document.getElementById(`tab-btn-${name}`);
  const activeView = document.getElementById(`tab-${name}`);
  if (activeBtn)  activeBtn.classList.add('active');
  if (activeView) activeView.classList.add('active');

  // Tab-Inhalt beim ersten Öffnen rendern
  if (name === 'favorit')   renderFavTab();
  if (name === 'gruppen')   renderGroups();
  if (name === 'bracket')   renderBracket();
}

// ═══════════════════════════════════════════════════════════════
// EINSTELLUNGEN
// ═══════════════════════════════════════════════════════════════
function toggleSettings() {
  document.getElementById('settings-panel')
    ?.classList.toggle('open');
}

function applySettings() {
  const selCountry = document.getElementById('sel-country')?.value;
  const selLang    = document.getElementById('sel-lang')?.value;
  if (selCountry && countryConfig[selCountry]) currentCountry = selCountry;
  if (selLang    && i18n[selLang])             currentLang    = selLang;
  document.getElementById('settings-panel')?.classList.remove('open');
  renderAll();
}

function syncSettingsDropdowns() {
  const selCountry = document.getElementById('sel-country');
  const selLang    = document.getElementById('sel-lang');
  if (selCountry) selCountry.value = currentCountry;
  if (selLang)    selLang.value    = currentLang;
}

// ═══════════════════════════════════════════════════════════════
// FAVORITEN-TAB LABEL aktualisieren
// ═══════════════════════════════════════════════════════════════
function updateFavTabLabel() {
  const cc       = countryConfig[currentCountry];
  const tabBtn   = document.getElementById('tab-btn-favorit');
  const tabLabel = document.getElementById('fav-tab-label');
  if (tabBtn)   tabBtn.firstChild.textContent = cc.flag + ' ';
  if (tabLabel) tabLabel.textContent          = cc.name;
}

// ═══════════════════════════════════════════════════════════════
// UHR
// ═══════════════════════════════════════════════════════════════
function updateClock() {
  const clock = document.getElementById('clock');
  if (!clock) return;
  clock.textContent = new Date().toLocaleTimeString(
    i18n[currentLang]?.clock_locale ?? 'de-DE',
    { hour: '2-digit', minute: '2-digit', second: '2-digit' }
  );
}

// ═══════════════════════════════════════════════════════════════
// ALLES RENDERN
// ═══════════════════════════════════════════════════════════════
function renderAll() {
  syncSettingsDropdowns();
  updateFavTabLabel();
  updateFilterBar();
  renderSpielplan();

  // Nur aktiven Tab neu rendern
  if (currentTab === 'favorit') renderFavTab();
  if (currentTab === 'gruppen') renderGroups();
  if (currentTab === 'bracket') renderBracket();
}

// ═══════════════════════════════════════════════════════════════
// GLOBALE FUNKTIONEN (für onclick im HTML)
// ═══════════════════════════════════════════════════════════════
window.switchTab      = switchTab;
window.toggleSettings = toggleSettings;
window.applySettings  = applySettings;
window.setFilter      = setFilter;

// ═══════════════════════════════════════════════════════════════
// LIVE REFRESH
// Lädt scores.json alle 60 Sekunden neu wenn ein Spiel läuft
// ═══════════════════════════════════════════════════════════════
let liveRefreshTimer = null;

async function fetchScores() {
  try {
    // Cache umgehen mit Timestamp
    const res  = await fetch(`./scores.json?t=${Date.now()}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function applyScores(data) {
  if (!data?.scores) return;

  let hasLive    = false;
  let hasChanges = false;

  matches.forEach(m => {
    // Key bauen — gleiche Logik wie im fetch-Skript
    const homeNorm = m.home.toLowerCase().replace(/\s/g, '_');
    const key      = `${m.date}_${homeNorm}`;
    const entry    = data.scores[key];
    if (!entry) return;

    // Score aktualisieren
    if (entry.score && entry.score !== m.score) {
      m.score    = entry.score;
      hasChanges = true;
    }

    // Live-Status merken
    if (entry.isLive) hasLive = true;

    // Laufende Minute auf Spielkarte zeigen
    m.isLive  = entry.isLive  ?? false;
    m.minute  = entry.minute  ?? null;
  });

  // Wenn sich etwas geändert hat → neu rendern
  if (hasChanges) {
    console.log('Neue Ergebnisse — Dashboard wird aktualisiert');
    renderAll();
  }

  // Live-Badge blinken lassen wenn Spiel läuft
  const badge = document.querySelector('.live-badge');
  if (badge) {
    badge.style.display = hasLive ? 'inline-block' : 'none';
  }

  return hasLive;
}

async function checkForUpdates() {
  const data   = await fetchScores();
  const isLive = applyScores(data);

  // Wenn Spiel läuft: alle 30 Sek prüfen
  // Sonst: alle 60 Sek
  const interval = isLive ? 30_000 : 60_000;

  if (liveRefreshTimer) clearTimeout(liveRefreshTimer);
  liveRefreshTimer = setTimeout(checkForUpdates, interval);
}

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  readURLParams();
  renderAll();
  setInterval(updateClock, 1000);
  updateClock();
  checkForUpdates();
});