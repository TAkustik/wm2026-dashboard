// js/data.js

// ─── BROADCASTER PRO LAND ────────────────────────────────────────────────────
// free: true = Free-TV, false = Pay-TV, null = unbekannt
// Alle Angaben nach aktuellem Stand; bei TBD bitte selbst nachpflegen

export const countryConfig = {
  // ── EUROPA ──────────────────────────────────────────────────────────────────
  DE: {
    name: 'Deutschland', flag: '🇩🇪', teamCode: 'DE', group: 'E', lang: 'de',
    broadcasters: [
      { name: 'ARD',        color: '#0057a8', free: true,  note: '~30 Spiele inkl. alle DFB-Spiele' },
      { name: 'ZDF',        color: '#f07d00', free: true,  note: '~30 Spiele inkl. DFB-Spiele' },
      { name: 'MagentaTV',  color: '#c0006e', free: false, note: 'Alle 104 Spiele, 44 exklusiv' },
    ],
  },
  AT: {
    name: 'Österreich', flag: '🇦🇹', teamCode: null, group: null, lang: 'de',
    broadcasters: [
      { name: 'ORF 1',    color: '#e30613', free: true,  note: 'Ausgewählte Spiele' },
      { name: 'ServusTV', color: '#d4a017', free: true,  note: 'Ausgewählte Spiele' },
    ],
  },
  CH: {
    name: 'Schweiz', flag: '🇨🇭', teamCode: 'CH', group: 'G', lang: 'de',
    broadcasters: [
      { name: 'SRF', color: '#e30613', free: true, note: 'Ausgewählte Spiele' },
      { name: 'RTS', color: '#005eb8', free: true, note: 'Ausgewählte Spiele (FR)' },
      { name: 'RSI', color: '#009246', free: true, note: 'Ausgewählte Spiele (IT)' },
    ],
  },
  FR: {
    name: 'France', flag: '🇫🇷', teamCode: 'FR', group: 'C', lang: 'fr',
    broadcasters: [
      { name: 'TF1',  color: '#003087', free: true,  note: 'Matchs sélectionnés' },
      { name: 'M6',   color: '#ff6600', free: true,  note: 'Matchs sélectionnés' },
      { name: 'beIN', color: '#e10600', free: false, note: 'Tous les 104 matchs' },
    ],
  },
  ES: {
    name: 'España', flag: '🇪🇸', teamCode: 'ES', group: 'B', lang: 'es',
    broadcasters: [
      { name: 'TVE',    color: '#c60b1e', free: true,  note: 'Partidos seleccionados' },
      { name: 'Cuatro', color: '#00a3e0', free: true,  note: 'Partidos seleccionados' },
      { name: 'DAZN',   color: '#111111', free: false, note: 'Todos los partidos' },
    ],
  },
  GB: {
    name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', teamCode: 'GB', group: 'H', lang: 'en',
    broadcasters: [
      { name: 'BBC',       color: '#cc0000', free: true,  note: 'Selected matches' },
      { name: 'ITV',       color: '#005eb8', free: true,  note: 'Selected matches' },
      { name: 'TNT Sports',color: '#f7a600', free: false, note: 'All 104 matches' },
    ],
  },
  NL: {
    name: 'Nederland', flag: '🇳🇱', teamCode: 'NL', group: 'F', lang: 'nl',
    broadcasters: [
      { name: 'NOS',   color: '#e30613', free: true,  note: 'Geselecteerde wedstrijden' },
      { name: 'Ziggo', color: '#ff6600', free: false, note: 'Alle 104 wedstrijden' },
    ],
  },
  PT: {
    name: 'Portugal', flag: '🇵🇹', teamCode: 'PT', group: 'C', lang: 'pt',
    broadcasters: [
      { name: 'RTP',      color: '#009246', free: true,  note: 'Jogos selecionados' },
      { name: 'Sport TV', color: '#003087', free: false, note: 'Todos os jogos' },
    ],
  },
  BE: {
    name: 'België', flag: '🇧🇪', teamCode: 'BE', group: 'C', lang: 'nl',
    broadcasters: [
      { name: 'RTBF',    color: '#003087', free: true, note: 'Matchs sélectionnés (FR)' },
      { name: 'VRT',     color: '#e30613', free: true, note: 'Geselecteerde wedstrijden (NL)' },
      { name: 'Proximus',color: '#7b2d8b', free: false,note: 'Tous les matchs' },
    ],
  },
  HR: {
    name: 'Hrvatska', flag: '🇭🇷', teamCode: 'HR', group: 'K', lang: 'en',
    broadcasters: [
      { name: 'HRT', color: '#003087', free: true, note: 'Odabrane utakmice' },
    ],
  },
  RS: {
    name: 'Srbija', flag: '🇷🇸', teamCode: 'RS', group: 'D', lang: 'en',
    broadcasters: [
      { name: 'RTS', color: '#003087', free: true, note: 'Odabrane utakmice' },
    ],
  },
  RO: {
    name: 'România', flag: '🇷🇴', teamCode: 'RO', group: 'J', lang: 'en',
    broadcasters: [
      { name: 'TVR',   color: '#003087', free: true,  note: 'Meciuri selectate' },
      { name: 'Digi',  color: '#e30613', free: false, note: 'Toate meciurile' },
    ],
  },
  UA: {
    name: 'Ukraina', flag: '🇺🇦', teamCode: 'UA', group: 'L', lang: 'en',
    broadcasters: [
      { name: 'Suspilne', color: '#003087', free: true, note: 'Вибрані матчі' },
    ],
  },
  SK: {
    name: 'Slovensko', flag: '🇸🇰', teamCode: 'SK', group: 'I', lang: 'en',
    broadcasters: [
      { name: 'RTVS', color: '#003087', free: true, note: 'Vybrané zápasy' },
    ],
  },
  SI: {
    name: 'Slovenija', flag: '🇸🇮', teamCode: 'SI', group: 'G', lang: 'en',
    broadcasters: [
      { name: 'RTV SLO', color: '#003087', free: true, note: 'Izbrane tekme' },
    ],
  },
  AL: {
    name: 'Shqipëri', flag: '🇦🇱', teamCode: 'AL', group: 'I', lang: 'en',
    broadcasters: [
      { name: 'RTSH', color: '#e30613', free: true, note: 'Ndeshje të zgjedhura' },
    ],
  },
  GE: {
    name: 'Georgia', flag: '🇬🇪', teamCode: 'GE', group: 'F', lang: 'en',
    broadcasters: [
      { name: 'GPB', color: '#003087', free: true, note: 'Selected matches' },
    ],
  },

  // ── AMERICAS ─────────────────────────────────────────────────────────────────
  US: {
    name: 'USA', flag: '🇺🇸', teamCode: 'US', group: 'D', lang: 'en',
    broadcasters: [
      { name: 'FOX',       color: '#003087', free: true,  note: 'Selected matches' },
      { name: 'FS1',       color: '#002244', free: false, note: 'Selected matches' },
      { name: 'Telemundo', color: '#e30613', free: true,  note: 'Spanish language' },
    ],
  },
  BR: {
    name: 'Brasil', flag: '🇧🇷', teamCode: 'BR', group: 'B', lang: 'pt',
    broadcasters: [
      { name: 'Globo',  color: '#003087', free: true,  note: 'Jogos selecionados' },
      { name: 'SporTV', color: '#e30613', free: false, note: 'Todos os jogos' },
      { name: 'CazéTV', color: '#f7a600', free: true,  note: 'Jogos selecionados (YouTube)' },
    ],
  },
  AR: {
    name: 'Argentina', flag: '🇦🇷', teamCode: 'AR', group: 'C', lang: 'es',
    broadcasters: [
      { name: 'TyC Sports', color: '#003087', free: true, note: 'Partidos seleccionados' },
      { name: 'TV Pública', color: '#e30613', free: true, note: 'Partidos seleccionados' },
    ],
  },
  MX: {
    name: 'México', flag: '🇲🇽', teamCode: 'MX', group: 'A', lang: 'es',
    broadcasters: [
      { name: 'Televisa', color: '#003087', free: true,  note: 'Partidos seleccionados' },
      { name: 'TV Azteca',color: '#f7a600', free: true,  note: 'Partidos seleccionados' },
      { name: 'ViX',      color: '#7b2d8b', free: false, note: 'Todos los partidos' },
    ],
  },
  CA: {
    name: 'Canada', flag: '🇨🇦', teamCode: 'CA', group: 'A', lang: 'en',
    broadcasters: [
      { name: 'CTV',     color: '#003087', free: true,  note: 'Selected matches' },
      { name: 'TSN',     color: '#e30613', free: false, note: 'All matches' },
      { name: 'TVA',     color: '#f7a600', free: true,  note: 'Matchs sélectionnés (FR)' },
    ],
  },
  CO: {
    name: 'Colombia', flag: '🇨🇴', teamCode: 'CO', group: 'H', lang: 'es',
    broadcasters: [
      { name: 'RCN',    color: '#e30613', free: true, note: 'Partidos seleccionados' },
      { name: 'Caracol',color: '#003087', free: true, note: 'Partidos seleccionados' },
    ],
  },
  UY: {
    name: 'Uruguay', flag: '🇺🇾', teamCode: 'UY', group: 'J', lang: 'es',
    broadcasters: [
      { name: 'TCC',    color: '#003087', free: true, note: 'Partidos seleccionados' },
      { name: 'VTV',    color: '#e30613', free: false,note: 'Todos los partidos' },
    ],
  },
  EC: {
    name: 'Ecuador', flag: '🇪🇨', teamCode: 'EC', group: 'E', lang: 'es',
    broadcasters: [
      { name: 'TC',      color: '#e30613', free: true, note: 'Partidos seleccionados' },
      { name: 'GolTV',   color: '#f7a600', free: false,note: 'Todos los partidos' },
    ],
  },
  VE: {
    name: 'Venezuela', flag: '🇻🇪', teamCode: 'VE', group: 'J', lang: 'es',
    broadcasters: [
      { name: 'Venevisión', color: '#003087', free: true, note: 'Partidos seleccionados' },
    ],
  },
  PE: {
    name: 'Perú', flag: '🇵🇪', teamCode: 'PE', group: 'L', lang: 'es',
    broadcasters: [
      { name: 'América TV', color: '#e30613', free: true, note: 'Partidos seleccionados' },
    ],
  },
  PY: {
    name: 'Paraguay', flag: '🇵🇾', teamCode: 'PY', group: 'D', lang: 'es',
    broadcasters: [
      { name: 'Tigo Sports', color: '#003087', free: false, note: 'Todos los partidos' },
      { name: 'SNT',         color: '#e30613', free: true,  note: 'Partidos seleccionados' },
    ],
  },
  BO: {
    name: 'Bolivia', flag: '🇧🇴', teamCode: 'BO', group: 'K', lang: 'es',
    broadcasters: [
      { name: 'Bolivia TV', color: '#003087', free: true, note: 'Partidos seleccionados' },
    ],
  },
  CW: {
    name: 'Curaçao', flag: '🇨🇼', teamCode: 'CW', group: 'E', lang: 'en',
    broadcasters: [
      { name: 'TBD', color: '#666666', free: null, note: 'Rechte noch nicht bestätigt' },
    ],
  },
  PA: {
    name: 'Panamá', flag: '🇵🇦', teamCode: 'PA', group: 'I', lang: 'es',
    broadcasters: [
      { name: 'TVN', color: '#003087', free: true, note: 'Partidos seleccionados' },
    ],
  },
  HN: {
    name: 'Honduras', flag: '🇭🇳', teamCode: 'HN', group: 'L', lang: 'es',
    broadcasters: [
      { name: 'TVC', color: '#003087', free: true, note: 'Partidos seleccionados' },
    ],
  },
  CR: {
    name: 'Costa Rica', flag: '🇨🇷', teamCode: 'CR', group: 'K', lang: 'es',
    broadcasters: [
      { name: 'Teletica', color: '#003087', free: true, note: 'Partidos seleccionados' },
    ],
  },
  JM: {
    name: 'Jamaica', flag: '🇯🇲', teamCode: 'JM', group: 'B', lang: 'en',
    broadcasters: [
      { name: 'TVJ', color: '#003087', free: true, note: 'Selected matches' },
    ],
  },

  // ── AFRIKA ───────────────────────────────────────────────────────────────────
  MA: {
    name: 'Maroc', flag: '🇲🇦', teamCode: 'MA', group: 'F', lang: 'fr',
    broadcasters: [
      { name: 'SNRT',   color: '#003087', free: true, note: 'Matchs sélectionnés' },
      { name: 'beIN',   color: '#e10600', free: false,note: 'Tous les matchs' },
    ],
  },
  SN: {
    name: 'Sénégal', flag: '🇸🇳', teamCode: 'SN', group: 'G', lang: 'fr',
    broadcasters: [
      { name: 'RTS', color: '#003087', free: true, note: 'Matchs sélectionnés' },
    ],
  },
  EG: {
    name: 'Egypt', flag: '🇪🇬', teamCode: 'EG', group: 'H', lang: 'en',
    broadcasters: [
      { name: 'ON Sport', color: '#e30613', free: true,  note: 'Selected matches' },
      { name: 'beIN',     color: '#e10600', free: false, note: 'All matches' },
    ],
  },
  NG: {
    name: 'Nigeria', flag: '🇳🇬', teamCode: 'NG', group: 'I', lang: 'en',
    broadcasters: [
      { name: 'NTA',    color: '#003087', free: true, note: 'Selected matches' },
      { name: 'DSTV',   color: '#e30613', free: false,note: 'All matches' },
    ],
  },
  CM: {
    name: 'Cameroun', flag: '🇨🇲', teamCode: 'CM', group: 'B', lang: 'fr',
    broadcasters: [
      { name: 'CRTV', color: '#003087', free: true, note: 'Matchs sélectionnés' },
    ],
  },
  CI: {
    name: "Côte d'Ivoire", flag: '🇨🇮', teamCode: 'CI', group: 'E', lang: 'fr',
    broadcasters: [
      { name: 'RTI', color: '#f7a600', free: true, note: 'Matchs sélectionnés' },
    ],
  },
  ZA: {
    name: 'South Africa', flag: '🇿🇦', teamCode: 'ZA', group: 'A', lang: 'en',
    broadcasters: [
      { name: 'SABC',  color: '#003087', free: true,  note: 'Selected matches' },
      { name: 'SuperSport', color: '#e30613', free: false, note: 'All matches' },
    ],
  },
  TN: {
    name: 'Tunisie', flag: '🇹🇳', teamCode: 'TN', group: 'F', lang: 'fr',
    broadcasters: [
      { name: 'Wataniya', color: '#e30613', free: true, note: 'Matchs sélectionnés' },
      { name: 'beIN',     color: '#e10600', free: false,note: 'Tous les matchs' },
    ],
  },
  GH: {
    name: 'Ghana', flag: '🇬🇭', teamCode: 'GH', group: 'L', lang: 'en',
    broadcasters: [
      { name: 'GTV',   color: '#003087', free: true, note: 'Selected matches' },
      { name: 'DSTV',  color: '#e30613', free: false,note: 'All matches' },
    ],
  },
  TZ: {
    name: 'Tanzania', flag: '🇹🇿', teamCode: 'TZ', group: 'D', lang: 'en',
    broadcasters: [
      { name: 'TBC',  color: '#003087', free: true, note: 'Selected matches' },
      { name: 'DSTV', color: '#e30613', free: false,note: 'All matches' },
    ],
  },
  AO: {
    name: 'Angola', flag: '🇦🇴', teamCode: 'AO', group: 'K', lang: 'pt',
    broadcasters: [
      { name: 'TPA', color: '#e30613', free: true, note: 'Jogos selecionados' },
    ],
  },
  BF: {
    name: 'Burkina Faso', flag: '🇧🇫', teamCode: 'BF', group: 'J', lang: 'fr',
    broadcasters: [
      { name: 'RTB', color: '#e30613', free: true, note: 'Matchs sélectionnés' },
    ],
  },
  CF: {
    name: 'Rép. Centrafricaine', flag: '🇨🇫', teamCode: 'CF', group: 'H', lang: 'fr',
    broadcasters: [
      { name: 'RTNC', color: '#003087', free: true, note: 'Matchs sélectionnés' },
    ],
  },
  MZ: {
    name: 'Moçambique', flag: '🇲🇿', teamCode: 'MZ', group: 'G', lang: 'pt',
    broadcasters: [
      { name: 'TVM', color: '#003087', free: true, note: 'Jogos selecionados' },
    ],
  },

  // ── ASIEN / OZEANIEN ─────────────────────────────────────────────────────────
  JP: {
    name: 'Japan', flag: '🇯🇵', teamCode: 'JP', group: 'B', lang: 'en',
    broadcasters: [
      { name: 'NHK',   color: '#003087', free: true, note: 'Selected matches' },
      { name: 'ABEMA', color: '#00bcd4', free: true, note: 'All matches (streaming)' },
    ],
  },
  KR: {
    name: '대한민국', flag: '🇰🇷', teamCode: 'KR', group: 'A', lang: 'en',
    broadcasters: [
      { name: 'KBS', color: '#003087', free: true,  note: 'Selected matches' },
      { name: 'MBC', color: '#e30613', free: true,  note: 'Selected matches' },
      { name: 'SBS', color: '#f7a600', free: false, note: 'All matches' },
    ],
  },
  SA: {
    name: 'Saudi Arabia', flag: '🇸🇦', teamCode: 'SA', group: 'D', lang: 'en',
    broadcasters: [
      { name: 'SSC',  color: '#003087', free: false, note: 'All matches' },
      { name: 'beIN', color: '#e10600', free: false, note: 'All matches' },
    ],
  },
  IR: {
    name: 'Iran', flag: '🇮🇷', teamCode: 'IR', group: 'J', lang: 'en',
    broadcasters: [
      { name: 'IRIB', color: '#003087', free: true, note: 'Selected matches' },
    ],
  },
  AU: {
    name: 'Australia', flag: '🇦🇺', teamCode: 'AU', group: 'D', lang: 'en',
    broadcasters: [
      { name: 'SBS',      color: '#003087', free: true,  note: 'Selected matches' },
      { name: 'Optus',    color: '#f7a600', free: false, note: 'All matches' },
    ],
  },
  NZ: {
    name: 'New Zealand', flag: '🇳🇿', teamCode: 'NZ', group: 'I', lang: 'en',
    broadcasters: [
      { name: 'Sky NZ', color: '#003087', free: false, note: 'All matches' },
      { name: 'TVNZ',   color: '#e30613', free: true,  note: 'Selected matches' },
    ],
  },
  UZ: {
    name: "O'zbekiston", flag: '🇺🇿', teamCode: 'UZ', group: 'L', lang: 'en',
    broadcasters: [
      { name: 'Uzbekistan TV', color: '#003087', free: true, note: 'Selected matches' },
    ],
  },
  QA: {
    name: 'Qatar', flag: '🇶🇦', teamCode: 'QA', group: 'G', lang: 'en',
    broadcasters: [
      { name: 'beIN', color: '#e10600', free: false, note: 'All matches' },
    ],
  },
  CN: {
    name: 'China', flag: '🇨🇳', teamCode: 'CN', group: 'K', lang: 'en',
    broadcasters: [
      { name: 'CCTV5', color: '#e30613', free: true, note: 'Selected matches' },
      { name: 'iQIYI', color: '#003087', free: false,note: 'All matches' },
    ],
  },
  TH: {
    name: 'Thailand', flag: '🇹🇭', teamCode: 'TH', group: 'H', lang: 'en',
    broadcasters: [
      { name: 'TrueVisions', color: '#e30613', free: false, note: 'All matches' },
      { name: 'PPTV',        color: '#003087', free: true,  note: 'Selected matches' },
    ],
  },
  IQ: {
    name: 'Iraq', flag: '🇮🇶', teamCode: 'IQ', group: 'C', lang: 'en',
    broadcasters: [
      { name: 'Iraqiya', color: '#003087', free: true,  note: 'Selected matches' },
      { name: 'beIN',    color: '#e10600', free: false, note: 'All matches' },
    ],
  },

  // ── NICHT QUALIFIZIERT (aber wählbar) ────────────────────────────────────────
  IT: {
    name: 'Italia', flag: '🇮🇹', teamCode: null, group: null, lang: 'en',
    broadcasters: [
      { name: 'RAI',   color: '#003087', free: true,  note: 'Partite selezionate' },
      { name: 'DAZN',  color: '#111111', free: false, note: 'Tutti i match' },
    ],
  },
  PL: {
    name: 'Polska', flag: '🇵🇱', teamCode: null, group: null, lang: 'en',
    broadcasters: [
      { name: 'TVP',   color: '#e30613', free: true,  note: 'Wybrane mecze' },
      { name: 'Polsat',color: '#003087', free: false, note: 'Wszystkie mecze' },
    ],
  },
  SE: {
    name: 'Sverige', flag: '🇸🇪', teamCode: null, group: null, lang: 'en',
    broadcasters: [
      { name: 'SVT',  color: '#003087', free: true,  note: 'Utvalda matcher' },
      { name: 'TV4',  color: '#f7a600', free: false, note: 'Alla matcher' },
    ],
  },
  TR: {
    name: 'Türkiye', flag: '🇹🇷', teamCode: null, group: null, lang: 'en',
    broadcasters: [
      { name: 'TRT Spor', color: '#e30613', free: true,  note: 'Seçili maçlar' },
      { name: 'beIN',     color: '#e10600', free: false, note: 'Tüm maçlar' },
    ],
  },
};

// ─── GRUPPEN ─────────────────────────────────────────────────────────────────

export const groups = {
  A: { teams: [
    { name: 'Mexiko',      flag: '🇲🇽', code: 'MX' },
    { name: 'Kanada',      flag: '🇨🇦', code: 'CA' },
    { name: 'Südafrika',   flag: '🇿🇦', code: 'ZA' },
    { name: 'Südkorea',    flag: '🇰🇷', code: 'KR' },
  ]},
  B: { teams: [
    { name: 'Spanien',     flag: '🇪🇸', code: 'ES' },
    { name: 'Brasilien',   flag: '🇧🇷', code: 'BR' },
    { name: 'Japan',       flag: '🇯🇵', code: 'JP' },
    { name: 'Jamaika',     flag: '🇯🇲', code: 'JM' },
  ]},
  C: { teams: [
    { name: 'Frankreich',  flag: '🇫🇷', code: 'FR' },
    { name: 'Argentinien', flag: '🇦🇷', code: 'AR' },
    { name: 'Portugal',    flag: '🇵🇹', code: 'PT' },
    { name: 'Irak',        flag: '🇮🇶', code: 'IQ' },
  ]},
  D: { teams: [
    { name: 'USA',         flag: '🇺🇸', code: 'US' },
    { name: 'Paraguay',    flag: '🇵🇾', code: 'PY' },
    { name: 'Australien',  flag: '🇦🇺', code: 'AU' },
    { name: 'Tansania',    flag: '🇹🇿', code: 'TZ' },
  ]},
  E: { teams: [
    { name: 'Deutschland', flag: '🇩🇪', code: 'DE' },
    { name: 'Elfenbeinküste', flag: '🇨🇮', code: 'CI' },
    { name: 'Ecuador',     flag: '🇪🇨', code: 'EC' },
    { name: 'Curaçao',     flag: '🇨🇼', code: 'CW' },
  ]},
  F: { teams: [
    { name: 'Niederlande', flag: '🇳🇱', code: 'NL' },
    { name: 'Marokko',     flag: '🇲🇦', code: 'MA' },
    { name: 'Georgien',    flag: '🇬🇪', code: 'GE' },
    { name: 'Tunesien',    flag: '🇹🇳', code: 'TN' },
  ]},
  G: { teams: [
    { name: 'Schweiz',     flag: '🇨🇭', code: 'CH' },
    { name: 'Senegal',     flag: '🇸🇳', code: 'SN' },
    { name: 'Slowenien',   flag: '🇸🇮', code: 'SI' },
    { name: 'Katar',       flag: '🇶🇦', code: 'QA' },
  ]},
  H: { teams: [
    { name: 'England',     flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', code: 'GB' },
    { name: 'Kolumbien',   flag: '🇨🇴', code: 'CO' },
    { name: 'Ägypten',     flag: '🇪🇬', code: 'EG' },
    { name: 'Thailand',    flag: '🇹🇭', code: 'TH' },
  ]},
  I: { teams: [
    { name: 'Slowakei',    flag: '🇸🇰', code: 'SK' },
    { name: 'Albanien',    flag: '🇦🇱', code: 'AL' },
    { name: 'Neuseeland',  flag: '🇳🇿', code: 'NZ' },
    { name: 'Nigeria',     flag: '🇳🇬', code: 'NG' },
  ]},
  J: { teams: [
    { name: 'Rumänien',    flag: '🇷🇴', code: 'RO' },
    { name: 'Uruguay',     flag: '🇺🇾', code: 'UY' },
    { name: 'Iran',        flag: '🇮🇷', code: 'IR' },
    { name: 'Burkina Faso',flag: '🇧🇫', code: 'BF' },
  ]},
  K: { teams: [
    { name: 'Kroatien',    flag: '🇭🇷', code: 'HR' },
    { name: 'China',       flag: '🇨🇳', code: 'CN' },
    { name: 'Costa Rica',  flag: '🇨🇷', code: 'CR' },
    { name: 'Angola',      flag: '🇦🇴', code: 'AO' },
  ]},
  L: { teams: [
    { name: 'Ukraine',     flag: '🇺🇦', code: 'UA' },
    { name: 'Usbekistan',  flag: '🇺🇿', code: 'UZ' },
    { name: 'Ghana',       flag: '🇬🇭', code: 'GH' },
    { name: 'Peru',        flag: '🇵🇪', code: 'PE' },
  ]},
};

// ─── TEAM FLAGS (Kurzreferenz für Spielkarten) ────────────────────────────────

export const teamFlags = Object.fromEntries(
  Object.entries(countryConfig).map(([code, c]) => [code, c.flag])
);