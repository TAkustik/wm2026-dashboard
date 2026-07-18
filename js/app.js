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
let currentTab      = 'bracket';
let countdownTimer  = null;

// ═══════════════════════════════════════════════════════════════
// URL-PARAMETER (für Home Assistant iframe)
// ═══════════════════════════════════════════════════════════════
function readURLParams() {
  const params = new URLSearchParams(window.location.search);
  const rawCountry = (params.get('country') ?? '').toUpperCase();
  const rawLang    =  params.get('lang') ?? '';

  if (countryConfig[rawCountry]) {
    currentCountry = rawCountry;
  } else {
    const saved = localStorage.getItem('wm_country');
    if (saved && countryConfig[saved]) currentCountry = saved;
  }

  if (i18n[rawLang]) {
    currentLang = rawLang;
  } else {
    const savedLang = localStorage.getItem('wm_lang');
    if (savedLang && i18n[savedLang]) currentLang = savedLang;
    else currentLang = countryConfig[currentCountry]?.lang ?? 'de';
  }
}

// ═══════════════════════════════════════════════════════════════
// HILFSFUNKTIONEN
// ═══════════════════════════════════════════════════════════════
function getMatchDateTime(m) {
  return new Date(`${m.date}T${m.time}:00`);
}

function localMatchDateTime(m) {
  // Alle Spiele gespeichert in MESZ (UTC+2)
  const fromOffset = 2;
  const toOffset   = countryConfig[currentCountry]?.tzOffset ?? 2;
  const diffHours  = toOffset - fromOffset;

  const [hours, minutes] = m.time.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes + diffHours * 60;

  // Datumswechsel: totalMinutes kann negativ oder ≥ 1440 sein
  const dayDelta     = Math.floor(totalMinutes / (24 * 60));
  const localMinutes = ((totalMinutes % (24 * 60)) + 24 * 60) % (24 * 60);
  const localHours   = Math.floor(localMinutes / 60);
  const localMins    = localMinutes % 60;

  const timeStr = `${String(localHours).padStart(2, '0')}:${String(localMins).padStart(2, '0')}`;

  // Datum nur anpassen wenn dayDelta != 0
  let dateStr = m.date;
  if (dayDelta !== 0) {
    const d = new Date(`${m.date}T00:00:00`);
    d.setDate(d.getDate() + dayDelta);
    dateStr = d.toISOString().slice(0, 10);
  }

  return { date: dateStr, time: timeStr };
}

function teamName(code, fallback) {
  return i18n[currentLang]?.teams?.[code] ?? fallback;
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
    // Kein Badge wenn Sender noch unbekannt
    if (!m.tv) return '<span class="'+cls+'" style="background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.2);font-size:0.65rem">?</span>';
    const color = getTVColor(m.tv);
    return `<span class="${cls}" style="background:${color};color:#fff">${m.tv}</span>`;
  }

  // Für alle anderen Länder: ersten passenden Sender aus countryConfig nehmen
  // Free-TV bevorzugen wenn vorhanden
  const broadcasters = cc?.broadcasters ?? [];
  const preferred    = broadcasters.find(b => b.free === true) ?? broadcasters[0];

  if (!preferred) return '';

  return `<span class="${cls}" style="background:${preferred.color};color:#fff">${preferred.name}</span>`;
}

// ═══════════════════════════════════════════════════════════════
// MATCH KARTE
// ═══════════════════════════════════════════════════════════════
function renderMatchCard(m, showDate = false) {
  const fav      = isFavMatch(m);
  const score    = m.score ?? '– : –';
  const local    = localMatchDateTime(m);
  const dateStr  = showDate
    ? `<span class="match-date-label">${formatDate(local.date, currentLang)}</span>`
    : '';
  const roundLabel = m.round && !m.group
    ? `<span class="match-round-label">${t(currentLang, m.round) || m.round}</span>`
    : '';
  // Bei Elfmeterschießen: genauen Elfmeter-Endstand zusätzlich anzeigen
  const [hs, as] = m.score ? m.score.split(':').map(Number) : [null, null];
  const psoLabel = (hs !== null && hs === as && m.penaltyWinner && m.penaltyScore)
    ? `<span class="score-pso">(${m.penaltyScore})</span>` : '';

  return `
    <div class="match-card${fav ? ' fav' : ''}">
      <div class="match-team">
        <span class="flag">${m.homeflag}</span>
        <span class="team-name">${teamName(m.homeCode, m.home)}</span>
      </div>
      <div class="match-center">
        <div class="score">${score}${psoLabel}</div>
        <div class="match-time">${dateStr}${local.time}</div>
        ${roundLabel}
      </div>
      <div class="match-team right">
        <span class="flag">${m.awayflag}</span>
        <span class="team-name">${teamName(m.awayCode, m.away)}</span>
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
      list = list.filter(m => isToday(localMatchDateTime(m).date));
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

  // Nach lokalem Datum gruppieren
  const byDate = {};
  list.forEach(m => {
    const localDate = localMatchDateTime(m).date;
    if (!byDate[localDate]) byDate[localDate] = [];
    byDate[localDate].push(m);
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
        <span class="hero-name">${teamName(nextMatch.homeCode, nextMatch.home)}</span>
      </div>
      <div class="hero-vs">VS</div>
      <div class="hero-team">
        <span class="hero-flag">${nextMatch.awayflag}</span>
        <span class="hero-name">${teamName(nextMatch.awayCode, nextMatch.away)}</span>
      </div>`;
    heroMeta.innerHTML = `
      <div>
        <div class="hero-datetime">
          <strong>${formatDate(localMatchDateTime(nextMatch).date, currentLang)}</strong> · ${localMatchDateTime(nextMatch).time}
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
// GRUPPENTABELLE BERECHNEN
// ═══════════════════════════════════════════════════════════════
function calcGroupStandings(groupLetter) {
  const grp       = groups[groupLetter];
  if (!grp) return [];

  // Basis-Eintrag für jedes Team
  const table = {};
  grp.teams.forEach(team => {
    table[team.code] = {
      code:   team.code,
      name:   team.name,
      flag:   team.flag,
      played: 0,
      won:    0,
      drawn:  0,
      lost:   0,
      gf:     0,  // goals for
      ga:     0,  // goals against
      gd:     0,  // goal difference
      pts:    0,
    };
  });

  // Alle abgeschlossenen Gruppenspiele dieser Gruppe auswerten
  matches
    .filter(m => m.group === groupLetter && m.score !== null)
    .forEach(m => {
      const [hg, ag] = m.score.split(':').map(Number);
      if (isNaN(hg) || isNaN(ag)) return;

      const home = table[m.homeCode];
      const away = table[m.awayCode];
      if (!home || !away) return;

      // Gespielte Spiele
      home.played++;
      away.played++;

      // Tore
      home.gf += hg; home.ga += ag;
      away.gf += ag; away.ga += hg;

      // Punkte
      if (hg > ag) {
        home.won++;  home.pts += 3;
        away.lost++;
      } else if (hg < ag) {
        away.won++;  away.pts += 3;
        home.lost++;
      } else {
        home.drawn++; home.pts += 1;
        away.drawn++; away.pts += 1;
      }
    });

  // Tordifferenz berechnen
  Object.values(table).forEach(t => { t.gd = t.gf - t.ga; });

  // Sortierung: Punkte → Tordifferenz → Tore → alphabetisch
  return Object.values(table).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd  !== a.gd)  return b.gd  - a.gd;
    if (b.gf  !== a.gf)  return b.gf  - a.gf;
    return a.name.localeCompare(b.name);
  });
}

// ═══════════════════════════════════════════════════════════════
// GRUPPEN TAB
// ═══════════════════════════════════════════════════════════════
function renderGroups() {
  const cc        = countryConfig[currentCountry];
  const container = document.getElementById('groups-container');
  if (!container) return;

  // Favoriten-Gruppe zuerst (wenn qualifiziert), Rest alphabetisch
  const sorted = Object.entries(groups).sort(([a], [b]) => {
    if (cc.group && a === cc.group) return -1;
    if (cc.group && b === cc.group) return  1;
    return a.localeCompare(b);
  });

  const cards = sorted.map(([letter]) => {
    const standings = calcGroupStandings(letter);
    const isFavGroup = letter === cc.group;

    const rows = standings.map((team, i) => {
      const isFav = team.code === cc.teamCode;
      const name  = teamName(team.code, team.name);
      return `
        <tr class="${isFav ? 'fav-row' : ''}">
          <td>
            <div class="team-cell">
              <span class="pos">${i + 1}</span>
              <span class="flag">${team.flag}</span>
              <span class="team-cell-name">${name}</span>
            </div>
          </td>
          <td>${team.played}</td>
          <td>${team.won}</td>
          <td>${team.drawn}</td>
          <td>${team.lost}</td>
          <td>${team.gf}:${team.ga}</td>
          <td><strong>${team.pts}</strong></td>
        </tr>`;
    }).join('');

    return `
      <div class="group-block${isFavGroup ? ' fav-group' : ''}">
        <div class="group-header">
          ${t(currentLang, 'group')} ${letter}
        </div>
        <table class="standings-table">
          <colgroup>
            <col class="col-team">
            <col class="col-stat">
            <col class="col-stat">
            <col class="col-stat">
            <col class="col-stat">
            <col class="col-goals">
            <col class="col-pts">
          </colgroup>
          <thead><tr>
            <th>Team</th>
            <th>${t(currentLang, 'played')}</th>
            <th>${t(currentLang, 'won')}</th>
            <th>${t(currentLang, 'drawn')}</th>
            <th>${t(currentLang, 'lost')}</th>
            <th>${t(currentLang, 'goals')}</th>
            <th>${t(currentLang, 'points')}</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }).join('');

  container.innerHTML = `<div class="groups-grid">${cards}</div>`;
}

// ═══════════════════════════════════════════════════════════════
// BRACKET TAB — gespiegelt (links ↔ rechts, Finale in der Mitte)
// ═══════════════════════════════════════════════════════════════
// BRACKET — gespiegelt, logisch korrekt nach FIFA-Schema
// ═══════════════════════════════════════════════════════════════

// Layout-Konstanten
const BOX_W    = 130;
const BOX_H    = 92;
const COL_GAP  = 28;
const COL_W    = BOX_W + COL_GAP;
const HEADER_H = 34;
const FIN_W    = 140;

// ids: [] = TBD-Platzhalter mit korrektem count
// ids: [...] = echte Match-IDs aus matches.js
// WICHTIG: Die Reihenfolge der SZF/AF-IDs muss der ECHTEN FIFA-Paarung folgen,
// damit benachbarte Boxen (Position 0+1, 2+3, ...) auch wirklich im nächsten
// Spiel gegeneinander antreten — sonst stimmen Linien und Inhalt nicht zusammen!
// af1=szf2+szf5, af2=szf1+szf3, af3=szf4+szf6, af4=szf7+szf8
const LEFT_ROUNDS = [
    { key: 'r32', count: 8, ids: [74,77,73,75,83,84,81,82] },
    { key: 'r16', count: 4, ids: [89,90,93,94] },
  { key: 'qf',  count: 2, ids: [97,98] },
  { key: 'sf',  count: 1, ids: [101] },
];
const RIGHT_ROUNDS = [
  { key: 'sf',  count: 1, ids: [102] },
  { key: 'qf',  count: 2, ids: [100,99] },
    { key: 'r16', count: 4, ids: [96,95,91,92] },
    { key: 'r32', count: 8, ids: [85,87,86,88,76,78,79,80] },
];

// Korrekte Daten für TBD-Platzhalter je Runde (laut Poster)
const ROUND_DATES = {
  // Linke Seite
  left: {
    r16: ['07.07','07.07','08.07','08.07'],
    qf:  ['11.07','12.07'],
    sf:  ['14.07'],
  },
  // Rechte Seite
  right: {
    sf:  ['15.07'],
    qf:  ['12.07','13.07'],
    r16: ['09.07','09.07','10.07','10.07'],
  },
};

function bracketRoundLabel(key) {
  const labels = {
    r32: '1/16', r16: '1/8',
    qf:  t(currentLang, 'quarter_final'),
    sf:  t(currentLang, 'semi_final'),
  };
  return labels[key] || key;
}

function bracketMatchY(count, index) {
  const BASE   = 8;
  const totalH = BASE * (BOX_H + 14);
  const slotH  = totalH / count;
  return index * slotH + (slotH - BOX_H) / 2;
}

function bracketTotalH() {
  return 8 * (BOX_H + 14) + HEADER_H + 40;
}

function renderBracketTeamRow(m, isHome, cc) {
  const code  = isHome ? m.homeCode : m.awayCode;
  const flag  = isHome ? m.homeflag : m.awayflag;
  const name  = isHome ? m.home     : m.away;
  const score = m.score ? m.score.split(':')[isHome ? 0 : 1] : null;
  const isEmpty = !name || name === 'TBD';

  if (isEmpty) {
    return `<div class="b-team-row empty-team">
      <span class="b-team-name" style="color:var(--border)">─</span>
    </div>`;
  }

  const isFav    = code && code === cc.teamCode;
  const [h, a]   = m.score ? m.score.split(':').map(Number) : [null, null];
  let isWinner = h !== null && (isHome ? h > a : a > h);
  // Bei Unentschieden nach 90 Min: Elfmeterschießen-Sieger berücksichtigen
  if (h !== null && h === a && m.penaltyWinner) {
    isWinner = isHome ? m.penaltyWinner === 1 : m.penaltyWinner === 2;
  }
  const penaltyOwnScore = (h !== null && h === a && m.penaltyWinner && m.penaltyScore)
    ? m.penaltyScore.split(':')[isHome ? 0 : 1]
    : null;
  const penaltyNote = penaltyOwnScore !== null
    ? `<span class="b-pso-note">(${penaltyOwnScore})</span>` : '';

  return `<div class="b-team-row${isFav ? ' fav-team' : ''}">
    <span style="font-size:0.95rem;flex-shrink:0">${flag}</span>
    <span class="b-team-name">${name}</span>
    ${penaltyOwnScore !== null ? '' : (score !== null ? `<span class="b-team-score">${score}</span>` : '')}${penaltyNote}
  </div>`;
}

function renderBracketHalf(rounds, startX, goRight, cc, totalH) {
  let boxesHtml = '';
  let svgLines  = '';
  const side    = goRight ? 'left' : 'right';

  rounds.forEach((round, rIdx) => {
    const x = startX + rIdx * COL_W;

    // Echte Matches oder TBD-Platzhalter mit korrekten Datum
    const roundMatches = round.ids.length > 0
      ? round.ids.map(id => matches.find(m => m.id === id)).filter(Boolean)
      : Array(round.count).fill(null).map((_, i) => ({
          homeCode: null, homeflag: '🏳️', home: 'TBD',
          awayCode: null, awayflag: '🏳️', away: 'TBD',
          date: ROUND_DATES[side]?.[round.key]?.[i] ?? '–',
          score: null,
        }));

    boxesHtml += `<div class="b-round-title" style="position:absolute;left:${x}px;top:0;width:${BOX_W}px;text-align:center;">
      ${bracketRoundLabel(round.key)}
    </div>`;

    roundMatches.forEach((m, i) => {
      const y        = HEADER_H + bracketMatchY(round.count, i);
      const matchState = getBracketMatchState(m);
      const stateClass = matchState === 'live' ? ' is-live' : matchState === 'next' ? ' is-next' : '';
      const dateLabel = m.date && m.date !== '–'
        ? (m.date.startsWith('2026') ? m.date.slice(8,10) + '.' + m.date.slice(5,7) : m.date)
        : '–';
      const timeLabel = m.time && m.time !== '–' ? ` · ${m.time} Uhr` : '';
      const isTbd = m.home === 'TBD' || m.away === 'TBD';
      const tvBadge = (isTbd && !m.tv) ? '' : renderTVBadge(m, true).replace('tv-mini', 'tv-mini b-tv-badge');

      boxesHtml += `<div class="b-match-box${stateClass}" style="left:${x}px;top:${y}px;"${m.id ? ` data-match-id="${m.id}"` : ''}>
        ${renderBracketTeamRow(m, true,  cc)}
        ${renderBracketTeamRow(m, false, cc)}
        <div class="b-match-date"><span class="b-date-text">${dateLabel}${timeLabel}</span>${tvBadge}</div>
      </div>`;

      if (goRight) {
        // Linke Seite: Linie von rechter Kante → rechts
        if (rIdx < rounds.length - 1) {
          const nextRound = rounds[rIdx + 1];
          const nextI = Math.floor(i / 2);
          const y1    = HEADER_H + bracketMatchY(round.count, i) + BOX_H / 2;
          const y2    = HEADER_H + bracketMatchY(nextRound.count, nextI) + BOX_H / 2;
          const x1    = x + BOX_W;
          const x2    = startX + (rIdx + 1) * COL_W;
          const midX  = x1 + COL_GAP / 2;
          const lc    = '#2a3a58';
          svgLines += `<path d="M${x1},${y1} H${midX} V${y2} H${x2}" fill="none" stroke="${lc}" stroke-width="1.5" stroke-linecap="round"/>`;
        }
      } else {
        // Rechte Seite: Linie von linker Kante ← links (von außen nach innen)
        if (rIdx > 0) {
          const prevRound = rounds[rIdx - 1];
          const prevI = Math.floor(i / 2);
          const y1    = HEADER_H + bracketMatchY(round.count, i) + BOX_H / 2;
          const y2    = HEADER_H + bracketMatchY(prevRound.count, prevI) + BOX_H / 2;
          const x1    = x;
          const x2    = startX + (rIdx - 1) * COL_W + BOX_W;
          const midX  = x1 - COL_GAP / 2;
          const lc    = '#2a3a58';
          svgLines += `<path d="M${x1},${y1} H${midX} V${y2} H${x2}" fill="none" stroke="${lc}" stroke-width="1.5" stroke-linecap="round"/>`;
        }
      }
    });
  });

  return { boxesHtml, svgLines };
}

// Bestimmt ob ein Bracket-Match gerade live läuft oder das nächste anstehende ist
function getBracketMatchState(m) {
  if (!m.date || !m.time || m.date === '–' || m.home === 'TBD' || m.away === 'TBD') return null;
  if (m.isFinished) return null; // Spiel ist wirklich beendet (inkl. ggf. Elfmeterschießen)

  const now   = new Date();
  const start = new Date(`${m.date}T${m.time}:00+02:00`);
  const end   = new Date(start.getTime() + 130 * 60000); // +130min: Verlängerung/Elfmeter mit einrechnen

  if (now >= start && now <= end) return 'live';

  // Prüfen ob irgendein anderes Spiel gerade live läuft —
  // solange ein Live-Spiel existiert, wird kein "nächstes Spiel" markiert
  const anyLive = matches.some(x => {
    if (!x.date || !x.time || x.date === '–' || x.home === 'TBD' || x.away === 'TBD' || x.isFinished) return false;
    const xStart = new Date(`${x.date}T${x.time}:00+02:00`);
    const xEnd   = new Date(xStart.getTime() + 130 * 60000);
    return now >= xStart && now <= xEnd;
  });
  if (anyLive) return null;

  // Nächstes anstehendes Spiel: frühester Kickoff in der Zukunft über alle Matches
  if (start > now) {
    const upcoming = matches
      .filter(x => x.date && x.time && x.date !== '–' && x.home !== 'TBD' && x.away !== 'TBD' && !x.score)
      .map(x => new Date(`${x.date}T${x.time}:00+02:00`))
      .filter(d => d > now)
      .sort((a, b) => a - b);
    if (upcoming.length > 0 && start.getTime() === upcoming[0].getTime()) return 'next';
  }
  return null;
}


// ── Bracket aus Gruppenphase befüllen ────────────────────────

const SZF_PAIRINGS = {
  73: { home: { type: '2nd', group: 'A' }, away: { type: '2nd', group: 'B' } },
  74: { home: { type: '1st', group: 'E' }, away: { type: '3rd', slot: 'E'  } },
  75: { home: { type: '1st', group: 'F' }, away: { type: '2nd', group: 'C' } },
  76: { home: { type: '1st', group: 'C' }, away: { type: '2nd', group: 'F' } },
  77: { home: { type: '1st', group: 'I' }, away: { type: '3rd', slot: 'I'  } },
  78: { home: { type: '2nd', group: 'E' }, away: { type: '2nd', group: 'I' } },
  79: { home: { type: '1st', group: 'A' }, away: { type: '3rd', slot: 'A'  } },
  80: { home: { type: '1st', group: 'L' }, away: { type: '3rd', slot: 'L'  } },
  81: { home: { type: '1st', group: 'D' }, away: { type: '3rd', slot: 'D'  } },
  82: { home: { type: '1st', group: 'G' }, away: { type: '3rd', slot: 'G'  } },
  83: { home: { type: '2nd', group: 'K' }, away: { type: '2nd', group: 'L' } },
  84: { home: { type: '1st', group: 'H' }, away: { type: '2nd', group: 'J' } },
  85: { home: { type: '1st', group: 'B' }, away: { type: '3rd', slot: 'B'  } },
  86: { home: { type: '1st', group: 'J' }, away: { type: '2nd', group: 'H' } },
  87: { home: { type: '1st', group: 'K' }, away: { type: '3rd', slot: 'K'  } },
  88: { home: { type: '2nd', group: 'D' }, away: { type: '2nd', group: 'G' } },
};

const THIRD_PLACE_TABLE = {
  'EFGHIJKL':['3E','3J','3I','3F','3H','3G','3L','3K'],
  'DFGHIJKL':['3H','3G','3I','3D','3J','3F','3L','3K'],
  'DEGHIJKL':['3E','3J','3I','3D','3H','3G','3L','3K'],
  'DEFHIJKL':['3E','3J','3I','3D','3H','3F','3L','3K'],
  'DEFGIJKL':['3E','3G','3I','3D','3J','3F','3L','3K'],
  'DEFGHJKL':['3E','3G','3J','3D','3H','3F','3L','3K'],
  'DEFGHIKL':['3E','3G','3I','3D','3H','3F','3L','3K'],
  'DEFGHIJL':['3E','3G','3J','3D','3H','3F','3L','3I'],
  'DEFGHIJK':['3E','3G','3J','3D','3H','3F','3I','3K'],
  'CFGHIJKL':['3H','3G','3I','3C','3J','3F','3L','3K'],
  'CEGHIJKL':['3E','3J','3I','3C','3H','3G','3L','3K'],
  'CEFHIJKL':['3E','3J','3I','3C','3H','3F','3L','3K'],
  'CEFGIJKL':['3E','3G','3I','3C','3J','3F','3L','3K'],
  'CEFGHJKL':['3E','3G','3J','3C','3H','3F','3L','3K'],
  'CEFGHIKL':['3E','3G','3I','3C','3H','3F','3L','3K'],
  'CEFGHIJL':['3E','3G','3J','3C','3H','3F','3L','3I'],
  'CEFGHIJK':['3E','3G','3J','3C','3H','3F','3I','3K'],
  'CDGHIJKL':['3H','3G','3I','3C','3J','3D','3L','3K'],
  'CDFHIJKL':['3C','3J','3I','3D','3H','3F','3L','3K'],
  'CDFGIJKL':['3C','3G','3I','3D','3J','3F','3L','3K'],
  'CDFGHJKL':['3C','3G','3J','3D','3H','3F','3L','3K'],
  'CDFGHIKL':['3C','3G','3I','3D','3H','3F','3L','3K'],
  'CDFGHIJL':['3C','3G','3J','3D','3H','3F','3L','3I'],
  'CDFGHIJK':['3C','3G','3J','3D','3H','3F','3I','3K'],
  'CDEHIJKL':['3E','3J','3I','3C','3H','3D','3L','3K'],
  'CDEGIJKL':['3E','3G','3I','3C','3J','3D','3L','3K'],
  'CDEGHIKL':['3E','3G','3I','3C','3H','3D','3L','3K'],
  'CDEGHIJL':['3E','3G','3J','3C','3H','3D','3L','3I'],
  'CDEGHIJK':['3E','3G','3J','3C','3H','3D','3I','3K'],
  'CDEFIJKL':['3C','3J','3E','3D','3I','3F','3L','3K'],
  'CDEFHJKL':['3C','3J','3E','3D','3H','3F','3L','3K'],
  'CDEFHIKL':['3C','3E','3I','3D','3H','3F','3L','3K'],
  'CDEFHIJL':['3C','3J','3E','3D','3H','3F','3L','3I'],
  'CDEFHIJK':['3C','3J','3E','3D','3H','3F','3I','3K'],
  'CDEFGJKL':['3C','3G','3E','3D','3J','3F','3L','3K'],
  'CDEFGIKL':['3C','3G','3E','3D','3I','3F','3L','3K'],
  'CDEFGIJL':['3C','3G','3E','3D','3J','3F','3L','3I'],
  'CDEFGIJK':['3C','3G','3E','3D','3J','3F','3I','3K'],
  'CDEFGHKL':['3C','3G','3E','3D','3H','3F','3L','3K'],
  'CDEFGHJL':['3C','3G','3J','3D','3H','3F','3L','3E'],
  'CDEFGHJK':['3C','3G','3J','3D','3H','3F','3E','3K'],
  'CDEFGHIL':['3C','3G','3E','3D','3H','3F','3L','3I'],
  'CDEFGHIK':['3C','3G','3E','3D','3H','3F','3I','3K'],
  'CDEFGHIJ':['3C','3G','3J','3D','3H','3F','3E','3I'],
};

function populateBracketFromGroups() {
  function isGroupComplete(g) {
    const gm = matches.filter(m => m.group === g);
    return gm.length === 6 && gm.every(m => m.score !== null);
  }

  const grouped = {};
  'ABCDEFGHIJKL'.split('').forEach(g => {
    if (!isGroupComplete(g)) return;
    const s = calcGroupStandings(g);
    if (s && s.length >= 3) grouped[g] = s;
  });

  if (Object.keys(grouped).length === 0) {
    propagateKnockoutWinners();
    return;
  }

  // SZF befüllen
  Object.entries(SZF_PAIRINGS).forEach(([idStr, pairing]) => {
    const m = matches.find(x => x.id === parseInt(idStr));
    if (!m) return;
    ['home','away'].forEach(side => {
      const p = pairing[side];
      if (p.type === '3rd') return;
      const g = grouped[p.group];
      if (!g) return;
      const team = p.type === '1st' ? g[0] : g[1];
      if (!team) return;
      if (side === 'home') { m.home = team.name; m.homeflag = team.flag||'🏳️'; m.homeCode = team.code; }
      else                 { m.away = team.name; m.awayflag = team.flag||'🏳️'; m.awayCode = team.code; }
    });
  });

  // Drittplatzierte nur wenn alle 12 Gruppen fertig
  if (Object.keys(grouped).length < 12) {
    propagateKnockoutWinners();
    return;
  }

  const thirds = 'ABCDEFGHIJKL'.split('').map(g => ({
    group: g, ...grouped[g][2],
    pts: grouped[g][2]?.pts??0, gd: grouped[g][2]?.gd??0, gf: grouped[g][2]?.gf??0,
  })).filter(t => t.code);
  thirds.sort((a,b) => b.pts-a.pts||b.gd-a.gd||b.gf-a.gf||a.group.localeCompare(b.group));
  const best8 = thirds.slice(0,8);
  const key   = best8.map(t=>t.group).sort().join('');
  const assignment = THIRD_PLACE_TABLE[key];
  if (!assignment) {
    console.warn('Keine Drittplatzierten-Kombination gefunden für:', key);
    propagateKnockoutWinners();
    return;
  }

  const slotOrder = [74,79,81,82,85,77,87,80];
  assignment.forEach((slotCode, idx) => {
    const group = slotCode.replace('3','');
    const team  = grouped[group]?.[2];
    if (!team) return;
    const m = matches.find(x => x.id === slotOrder[idx]);
    if (!m) return;
    m.away = team.name; m.awayflag = team.flag||'🏳️'; m.awayCode = team.code;
  });

  propagateKnockoutWinners();
}

// Übernimmt Sieger von SZF→AF→VF→HF→Finale automatisch in die jeweils
// nächste Runde, sobald ein Ergebnis eingetragen ist.
function propagateKnockoutWinners() {
  // SZF → AF gemäß offiziellem FIFA-Spielplan (NICHT sequentiell 2n-1/2n!)
  // af1=szf2+szf5, af2=szf1+szf3, af3=szf4+szf6, af4=szf7+szf8,
  // af5=szf11+szf12, af6=szf9+szf10, af7=szf14+szf16, af8=szf13+szf15
  const AF_PAIRINGS = {
    1: [2, 5],   2: [1, 3],   3: [4, 6],   4: [7, 8],
    5: [11, 12], 6: [9, 10],  7: [14, 16], 8: [13, 15],
  };
  for (const [afNum, [szfA, szfB]] of Object.entries(AF_PAIRINGS)) {
    const s1 = matches.find(x => x.szf === szfA);
    const s2 = matches.find(x => x.szf === szfB);
    const af = matches.find(x => x.af === parseInt(afNum));
    if (!af) continue;
    const w1 = getWinner(s1);
    const w2 = getWinner(s2);
    if (w1 && af.homeCode !== w1.code) { af.home = w1.name; af.homeflag = w1.flag; af.homeCode = w1.code; }
    if (w2 && af.awayCode !== w2.code) { af.away = w2.name; af.awayflag = w2.flag; af.awayCode = w2.code; }
  }

  // AF → VF nach offizieller FIFA-Paarungslogik WM 2026
  // vf1(97) = af1+af2 = Frankreich/Marokko  -> HF1
  // vf2(98) = af5+af6 = Spanien/Belgien     -> HF1
  // vf3(99) = af3+af4 = Norwegen/England    -> HF2
  // vf4(100)= af7+af8 = rechte Seite        -> HF2
  const VF_PAIRINGS = {
    1: [1, 2],   // vf1 = af1+af2
    2: [5, 6],   // vf2 = af5+af6 (Spanien/Belgien-Seite)
    3: [3, 4],   // vf3 = af3+af4 (Norwegen/England-Seite)
    4: [7, 8],   // vf4 = af7+af8
  };
  for (const [vfNum, [afA, afB]] of Object.entries(VF_PAIRINGS)) {
    const a1 = matches.find(x => x.af === afA);
    const a2 = matches.find(x => x.af === afB);
    const vf = matches.find(x => x.vf === parseInt(vfNum));
    if (!vf) continue;
    const w1 = getWinner(a1);
    const w2 = getWinner(a2);
    if (w1 && vf.homeCode !== w1.code) { vf.home = w1.name; vf.homeflag = w1.flag; vf.homeCode = w1.code; }
    if (w2 && vf.awayCode !== w2.code) { vf.away = w2.name; vf.awayflag = w2.flag; vf.awayCode = w2.code; }
  }

  // VF(2n-1) + VF(2n) → HF(n)
  for (let n = 1; n <= 2; n++) {
    const v1 = matches.find(x => x.vf === (2 * n - 1));
    const v2 = matches.find(x => x.vf === (2 * n));
    const hf = matches.find(x => x.hf === n);
    if (!hf) continue;
    const w1 = getWinner(v1);
    const w2 = getWinner(v2);
    if (w1 && hf.homeCode !== w1.code) { hf.home = w1.name; hf.homeflag = w1.flag; hf.homeCode = w1.code; }
    if (w2 && hf.awayCode !== w2.code) { hf.away = w2.name; hf.awayflag = w2.flag; hf.awayCode = w2.code; }
  }

  // HF1 + HF2 → Finale, Verlierer → Platz 3
  const hf1 = matches.find(x => x.hf === 1);
  const hf2 = matches.find(x => x.hf === 2);
  const finale = matches.find(x => x.round === 'F');
  const platz3  = matches.find(x => x.round === 'P3');

  const w1 = getWinner(hf1);
  const w2 = getWinner(hf2);
  if (finale) {
    if (w1 && finale.homeCode !== w1.code) { finale.home = w1.name; finale.homeflag = w1.flag; finale.homeCode = w1.code; }
    if (w2 && finale.awayCode !== w2.code) { finale.away = w2.name; finale.awayflag = w2.flag; finale.awayCode = w2.code; }
  }

  function getLoser(m) {
    if (!m?.score) return null;
    if (!m.isFinished) return null;
    const [h, a] = m.score.split(':').map(Number);
    if (h > a) return { name: m.away, flag: m.awayflag, code: m.awayCode };
    if (a > h) return { name: m.home, flag: m.homeflag, code: m.homeCode };
    return null;
  }
  const l1 = getLoser(hf1);
  const l2 = getLoser(hf2);
  if (platz3) {
    if (l1 && platz3.homeCode !== l1.code) { platz3.home = l1.name; platz3.homeflag = l1.flag; platz3.homeCode = l1.code; }
    if (l2 && platz3.awayCode !== l2.code) { platz3.away = l2.name; platz3.awayflag = l2.flag; platz3.awayCode = l2.code; }
  }
}

function getWinner(m) {
  if (!m?.score) return null;
  if (!m.isFinished) return null; // Zwischenstand während des Spiels zählt nicht
  const [h,a] = m.score.split(':').map(Number);
  if (h > a) return { name: m.home, flag: m.homeflag, code: m.homeCode };
  if (a > h) return { name: m.away, flag: m.awayflag, code: m.awayCode };
  // Unentschieden nach 90 Min — bei K.o.-Spielen entscheidet das
  // Elfmeterschießen (penaltyWinner: 1=home, 2=away)
  if (m.penaltyWinner === 1) return { name: m.home, flag: m.homeflag, code: m.homeCode };
  if (m.penaltyWinner === 2) return { name: m.away, flag: m.awayflag, code: m.awayCode };
  return null;
}

function renderBracket() {
  populateBracketFromGroups();
  const container = document.getElementById('bracket-container');
  if (!container) return;

  const cc     = countryConfig[currentCountry];
  const totalH = bracketTotalH();
  const totalW = LEFT_ROUNDS.length * COL_W + FIN_W + RIGHT_ROUNDS.length * COL_W + 20;

  const leftStart  = 10;
  const finaleX    = leftStart + LEFT_ROUNDS.length * COL_W;
  const rightStart = finaleX + FIN_W + COL_GAP;

  const left  = renderBracketHalf(LEFT_ROUNDS,  leftStart,  true,  cc, totalH);
  const right = renderBracketHalf(RIGHT_ROUNDS, rightStart, false, cc, totalH);

  const fm  = matches.find(m => m.id === 104) ?? {
    homeCode: null, homeflag: '🏳️', home: 'TBD',
    awayCode: null, awayflag: '🏳️', away: 'TBD',
    date: '19.07', score: null,
  };
  const p3m = matches.find(m => m.id === 103) ?? {
    homeCode: null, homeflag: '🏳️', home: 'TBD',
    awayCode: null, awayflag: '🏳️', away: 'TBD',
    date: '18.07', score: null,
  };

  const finY    = HEADER_H + bracketMatchY(1, 0);
  const sfY     = HEADER_H + bracketMatchY(1, 0) + BOX_H / 2;
  const sfLeftX = leftStart + (LEFT_ROUNDS.length - 1) * COL_W + BOX_W;

  // Platz-3-Box: unter Finale
  const P3_W  = FIN_W - 10;
  const p3X   = finaleX + (FIN_W - P3_W) / 2;
  const p3Y   = finY + BOX_H + 48;
  const p3MidX = p3X + P3_W / 2;
  const p3TopY = p3Y;

  // X-Positionen der HF-Kästen (linke und rechte Kante)
  const hfLeftBoxRight  = sfLeftX;          // rechte Kante HF-Box links = Ende der HF-Linie
  const hfRightBoxLeft  = rightStart;       // linke Kante HF-Box rechts
  // Unterkante der HF-Kästen
  const hfBoxBottom = finY + BOX_H;

  // Linien von HF zu Finale (durchgezogen)
  let centerLines = '';
  centerLines += `<path d="M${sfLeftX},${sfY} H${finaleX}" fill="none" stroke="#2a3a58" stroke-width="1.5" stroke-linecap="round"/>`;
  centerLines += `<path d="M${finaleX + FIN_W},${sfY} H${rightStart}" fill="none" stroke="#2a3a58" stroke-width="1.5" stroke-linecap="round"/>`;

  // Gestrichelte Linien: von Unterkante der HF-Kästen nach unten → Mitte Platz-3-Kasten
  // Linke HF-Box: von ihrer Mitte-X unten nach p3MidX
  const hfLeftMidX  = finaleX - COL_W + COL_W / 2;  // Mitte der linken HF-Box
  const hfRightMidX = rightStart + BOX_W / 2;        // Mitte der rechten HF-Box

  centerLines += `<path d="M${hfLeftMidX},${hfBoxBottom} V${p3TopY - 8} H${p3MidX} V${p3TopY}" fill="none" stroke="#445566" stroke-width="1.2" stroke-dasharray="5,3" stroke-linecap="round"/>`;
  centerLines += `<path d="M${hfRightMidX},${hfBoxBottom} V${p3TopY - 8} H${p3MidX}" fill="none" stroke="#445566" stroke-width="1.2" stroke-dasharray="5,3" stroke-linecap="round"/>`;

  // Finale-Header (hervorgehoben)
  const finaleHeader = `<div class="b-round-title" style="position:absolute;left:${finaleX}px;top:0;width:${FIN_W}px;text-align:center;color:var(--accent);font-size:0.75rem;letter-spacing:2px;">
    🏆 ${t(currentLang,'final')} · 19.07
  </div>`;

  // Finale-Box (hervorgehoben: goldener Rahmen + Glow)
  const finaleTv = (!fm.tv) ? '' : renderTVBadge(fm, true).replace('tv-mini', 'tv-mini b-tv-badge');
  const finaleBox = `<div class="b-match-box b-finale" style="left:${finaleX}px;top:${finY}px;width:${FIN_W}px;">
    ${renderBracketTeamRow(fm, true,  cc)}
    ${renderBracketTeamRow(fm, false, cc)}
    <div class="b-match-date"><span class="b-date-text">🏆 Finale · 19.07 · 21:00 Uhr · New York</span>${finaleTv}</div>
  </div>`;

  // Platz-3-Box (kein separater Header, Label im Datum-Feld)
  const p3Tv = (!p3m.tv) ? '' : renderTVBadge(p3m, true).replace('tv-mini', 'tv-mini b-tv-badge');
  const p3Box = `<div class="b-match-box" style="left:${p3X}px;top:${p3Y}px;width:${P3_W}px;opacity:0.8;">
    ${renderBracketTeamRow(p3m, true,  cc)}
    ${renderBracketTeamRow(p3m, false, cc)}
    <div class="b-match-date"><span class="b-date-text">🥉 Platz 3 · 18.07 · 23:00 Uhr · Miami</span>${p3Tv}</div>
  </div>`;

  // Sieger-Box
  let winnerBox = '';
  if (fm.score) {
    const [h,a] = fm.score.split(':').map(Number);
    const wFlag = h>a ? fm.homeflag : fm.awayflag;
    const wName = h>a ? fm.home     : fm.away;
    const winY  = finY + BOX_H + 16;
    winnerBox = `<div class="b-winner-box" style="left:${finaleX+(FIN_W-148)/2}px;top:${winY}px;">
      <div class="b-winner-flag">${wFlag}</div>
      <div class="b-winner-label">🏆 ${wName}</div>
    </div>`;
  }

  // Gesamthöhe: max aus normalem Bracket und Platz-3-Kasten
  const fullH = Math.max(totalH, p3Y + BOX_H + 40);

  container.innerHTML = `
    <div class="bracket-outer">
      <div class="bracket-svg-wrap" style="width:${totalW}px;height:${fullH}px;">
        <svg style="position:absolute;top:0;left:0;width:${totalW}px;height:${fullH}px;pointer-events:none;" xmlns="http://www.w3.org/2000/svg">
          ${left.svgLines}${right.svgLines}${centerLines}
        </svg>
        ${left.boxesHtml}${right.boxesHtml}
        ${finaleHeader}${finaleBox}${winnerBox}
        ${p3Box}
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
  localStorage.setItem('wm_country', currentCountry);
  localStorage.setItem('wm_lang',    currentLang);
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
  if (tabLabel) tabLabel.textContent = teamName(currentCountry, cc.name);
}

// ═══════════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════════
// LIVE SPIEL ERKENNUNG (zeitbasiert, unabhängig vom Workflow)
// ═══════════════════════════════════════════════════════════════
function updateLiveGameIndicator() {
  const indicator = document.getElementById('live-game-indicator');
  const text      = document.getElementById('live-game-text');
  if (!indicator || !text) return;

  const now = new Date();

  // Alle Spiele prüfen (Gruppenphase UND K.o.-Runde)
  const liveMatch = matches.find(m => {
    if (!m.date || !m.time) return false;
    if (m.home === 'TBD' || m.away === 'TBD') return false;
    const start = new Date(`${m.date}T${m.time}:00+02:00`); // MESZ
    const end   = new Date(start.getTime() + 110 * 60000);   // +110 min
    return now >= start && now <= end;
  });

  if (liveMatch) {
    const cc   = countryConfig[currentCountry];
    const home = teamName(liveMatch.homeCode, liveMatch.home);
    const away = teamName(liveMatch.awayCode, liveMatch.away);
    text.textContent = `${liveMatch.homeflag} ${home} – ${away} ${liveMatch.awayflag}`;
    indicator.style.display = 'inline-flex';
  } else {
    indicator.style.display = 'none';
  }
}

// ═══════════════════════════════════════════════════════════════
// MANUELLER REFRESH
// ═══════════════════════════════════════════════════════════════
async function manualRefresh() {
  const btn = document.getElementById('refresh-btn');
  if (!btn) return;
  btn.classList.add('spinning');
  btn.disabled = true;
  try {
    const data = await fetchScores();
    applyScores(data);
  } catch {}
  btn.classList.remove('spinning');
  btn.disabled = false;
}

// UHR
// ═══════════════════════════════════════════════════════════════
function updateClock() {
  const clock = document.getElementById('clock');
  if (!clock) return;
  clock.textContent = new Date().toLocaleTimeString(
    i18n[currentLang]?.clock_locale ?? 'de-DE',
    { hour: '2-digit', minute: '2-digit', second: '2-digit' }
  );
  updateLiveGameIndicator();
  // Bracket-Live/Next-Status ist zeitbasiert und muss unabhängig von
  // Score-Änderungen regelmäßig neu geprüft werden (sonst bleibt eine
  // einmal verpasste Aktualisierung dauerhaft veraltet, z.B. während
  // ein Spiel läuft aber noch kein neuer Score eingetroffen ist).
  if (currentTab === 'bracket') refreshBracketMatchStates();
}

// Aktualisiert nur die is-live/is-next Klassen der vorhandenen Bracket-Boxen,
// ohne das komplette Bracket neu zu rendern (performant, kein Flackern).
function refreshBracketMatchStates() {
  const boxes = document.querySelectorAll('.b-match-box[data-match-id]');
  boxes.forEach(box => {
    const id = parseInt(box.dataset.matchId);
    const m  = matches.find(x => x.id === id);
    if (!m) return;
    const state = getBracketMatchState(m);
    box.classList.remove('is-live', 'is-next');
    if (state === 'live') box.classList.add('is-live');
    if (state === 'next') box.classList.add('is-next');
  });
}

// ═══════════════════════════════════════════════════════════════
// ALLES RENDERN
// ═══════════════════════════════════════════════════════════════
function renderAll() {
  populateBracketFromGroups();
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
window.manualRefresh  = manualRefresh;

// ═══════════════════════════════════════════════════════════════
// LIVE REFRESH
// Lädt scores.json alle 60 Sekunden neu wenn ein Spiel läuft
// ═══════════════════════════════════════════════════════════════
let liveRefreshTimer = null;

async function fetchScores() {
  try {
    // Cache umgehen mit Timestamp
    const res  = await fetch(`./scores.json?t=${Date.now()}`, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function normalizeTeam(name) {
  return (name || '')
    .toLowerCase()
    .replace(/[äáàâ]/g, 'a').replace(/[öóò]/g, 'o').replace(/[üúù]/g, 'u')
    .replace(/[éèê]/g, 'e').replace(/ß/g, 'ss').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]/g, '');
}

function applyScores(data) {
  if (!data?.scores) return;

  let hasLive    = false;
  let hasChanges = false;

  matches.forEach(m => {
    let entry = null;
    let tvKey = null;

    if (m.openligaId) {
      entry = data.scores[m.openligaId];
      tvKey = m.openligaId;
    } else if (m.home && m.away && m.home !== 'TBD' && m.away !== 'TBD') {
      // Fallback: Team-Namen-basiertes Matching (z.B. K.o.-Runde ohne openligaId)
      const key = `team_${normalizeTeam(m.home)}_${normalizeTeam(m.away)}`;
      entry = data.scores[key];
      tvKey = key;
    }

    if (!entry) return;

    if (entry.score && entry.score !== m.score) {
      m.score    = entry.score;
      hasChanges = true;
    }
    if (entry.penaltyWinner !== undefined && entry.penaltyWinner !== m.penaltyWinner) {
      m.penaltyWinner = entry.penaltyWinner;
      hasChanges = true;
    }
    if (entry.penaltyScore !== undefined && entry.penaltyScore !== m.penaltyScore) {
      m.penaltyScore = entry.penaltyScore;
      hasChanges = true;
    }

    if (entry.isLive) hasLive = true;
    m.isLive     = entry.isLive     ?? false;
    m.isFinished = entry.isFinished ?? false;
    m.minute     = entry.minute     ?? null;

    // TV-Sender aus tvData übernehmen (Free-TV hat Vorrang)
    const tvEntry = data.tvData?.[tvKey];
    if (tvEntry) {
      // Nur aktualisieren wenn noch unbekannt ODER Free-TV neu entdeckt
      if (m.tv === null || (tvEntry.freeTv && !m.freeTv)) {
        m.tv     = tvEntry.tv;
        m.freeTv = tvEntry.freeTv;
        hasChanges = true;
      }
    }
  });

  // ── Bekannte API-Fehler korrigieren ──────────────────────────
  // Greift nur wenn OpenLigaDB den falschen Wert liefert.
  // Automatisch inaktiv sobald API den korrekten Wert liefert.
  const SCORE_FIXES = [
    { home: 'Belgien', away: 'Senegal', wrongScore: '2:2', correctScore: '3:2' },
    { home: 'Argentinien', away: 'Kap Verde', wrongScore: '1:1', correctScore: '3:2' },
    { home: 'Kanada', away: 'Marokko', wrongScore: null, correctScore: '0:3' },
  ];
  SCORE_FIXES.forEach(fix => {
    const m = matches.find(x => x.home === fix.home && x.away === fix.away);
    // wrongScore: null = greift wenn kein Score vorhanden (OpenLigaDB-Mismatch)
    // wrongScore: 'x:y' = greift nur bei diesem bestimmten falschen Wert
    const shouldFix = fix.wrongScore === null
      ? (!m?.score && m?.isFinished)
      : (m?.score === fix.wrongScore && m?.isFinished);
    if (m && shouldFix) {
      m.score = fix.correctScore;
      m.isFinished = true;
      hasChanges = true;
      console.log(`Score-Fix: ${fix.home}-${fix.away} -> ${fix.correctScore}`);
    }
  });

  if (hasChanges && applyScores._initialLoadDone) {
    for (let i = 0; i < 5; i++) propagateKnockoutWinners();
    console.log('Neue Ergebnisse — Dashboard wird aktualisiert');
    renderAll();
  }

  const badge = document.querySelector('.live-badge');
  if (badge) {
    badge.style.display = hasLive ? 'inline-block' : 'none';
  }

  return hasLive;
}

async function checkForUpdates() {
  const data   = await fetchScores();
  const isLive = applyScores(data);
  const interval = isLive ? 30_000 : 60_000;
  if (liveRefreshTimer) clearTimeout(liveRefreshTimer);
  liveRefreshTimer = setTimeout(checkForUpdates, interval);
}

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', async () => {
  readURLParams();
  setInterval(updateClock, 1000);
  updateClock();

  // Schritt 1: Scores laden + SZF-Scores setzen
  const initData = await fetchScores();
  if (initData) applyScores(initData);

  // Schritt 2: Propagieren → AF/VF/HF bekommen Team-Namen
  populateBracketFromGroups();
  for (let i = 0; i < 6; i++) propagateKnockoutWinners();

  // Schritt 3: Zweiter Fetch — jetzt AF/VF/HF-Scores holen (Keys jetzt bekannt)
  const initData2 = await fetchScores();
  if (initData2) applyScores(initData2);

  // Schritt 4: Nochmal propagieren mit vollständigen Scores + isFinished
  for (let i = 0; i < 6; i++) propagateKnockoutWinners();

  // Schritt 5: Einmaliger Render
  applyScores._initialLoadDone = true;
  renderAll();

  // Schritt 6: Normaler Refresh-Zyklus
  checkForUpdates();
});