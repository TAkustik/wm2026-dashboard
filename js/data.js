// js/data.js

// ─── BROADCASTER PRO LAND ────────────────────────────────────────────────────
// free: true = Free-TV, false = Pay-TV, null = unbekannt
// Alle Angaben nach aktuellem Stand; bei TBD bitte selbst nachpflegen

export const countryConfig = {
  // ── EUROPA ──────────────────────────────────────────────────────────────────
  DE: {
	tzOffset: 2,
    name: 'Deutschland', flag: '🇩🇪', teamCode: 'DE', group: 'E', lang: 'de',
    broadcasters: [
      { name: 'ARD',        color: '#0057a8', free: true,  note: '~30 Spiele inkl. alle DFB-Spiele' },
      { name: 'ZDF',        color: '#f07d00', free: true,  note: '~30 Spiele inkl. DFB-Spiele' },
      { name: 'MagentaTV',  color: '#c0006e', free: false, note: 'Alle 104 Spiele, 44 exklusiv' },
    ],
  },
  AT: {
	tzOffset: 2,
    name: 'Österreich', flag: '🇦🇹', teamCode: 'AT', group: 'J', lang: 'de',
    broadcasters: [
      { name: 'ORF',      color: '#e30613', free: true,  note: '52 Spiele inkl. alle ÖFB-Spiele' },
      { name: 'ServusTV', color: '#d4a017', free: true,  note: '52 Spiele' },
    ],
  },
  CH: {
	tzOffset: 2,
    name: 'Schweiz', flag: '🇨🇭', teamCode: 'CH', group: 'B', lang: 'de',
    broadcasters: [
      { name: 'SRF', color: '#e30613', free: true, note: 'Alle 104 Spiele' },
      { name: 'RTS', color: '#005eb8', free: true, note: 'Ausgewählte Spiele (FR)' },
      { name: 'RSI', color: '#009246', free: true, note: 'Ausgewählte Spiele (IT)' },
    ],
  },
  FR: {
	tzOffset: 2,
    name: 'France', flag: '🇫🇷', teamCode: 'FR', group: 'I', lang: 'fr',
    broadcasters: [
      { name: 'M6',    color: '#0066cc', free: true,  note: '54 matchs dont tous les Bleus' },
      { name: 'beIN',  color: '#e10600', free: false, note: 'Tous les 104 matchs' },
    ],
  },
  ES: {
	tzOffset: 2,
    name: 'España', flag: '🇪🇸', teamCode: 'ES', group: 'H', lang: 'es',
    broadcasters: [
      { name: 'RTVE',  color: '#c60b1e', free: true,  note: '33 partidos incl. todos España' },
      { name: 'DAZN',  color: '#111111', free: false, note: 'Todos los partidos' },
    ],
  },
  GB: {
	tzOffset: 1,
    name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', teamCode: 'GB', group: 'L', lang: 'en',
    broadcasters: [
      { name: 'BBC',  color: '#cc0000', free: true,  note: 'Selected matches incl. all England' },
      { name: 'ITV',  color: '#005eb8', free: true,  note: 'Selected matches' },
    ],
  },
  NL: {
	tzOffset: 2,
    name: 'Nederland', flag: '🇳🇱', teamCode: 'NL', group: 'F', lang: 'nl',
    broadcasters: [
      { name: 'NOS',  color: '#e30613', free: true,  note: 'Alle 104 wedstrijden (NPO 1/3)' },
    ],
  },
  PT: {
	tzOffset: 1,
    name: 'Portugal', flag: '🇵🇹', teamCode: 'PT', group: 'K', lang: 'pt',
    broadcasters: [
      { name: 'RTP',      color: '#009246', free: true,  note: 'Jogos selecionados' },
      { name: 'Sport TV', color: '#003087', free: false, note: 'Todos os jogos' },
    ],
  },
  BE: {
	tzOffset: 2,
    name: 'België', flag: '🇧🇪', teamCode: 'BE', group: 'G', lang: 'nl',
    broadcasters: [
      { name: 'RTBF',    color: '#003087', free: true, note: 'Matchs sélectionnés (FR)' },
      { name: 'VRT',     color: '#e30613', free: true, note: 'Geselecteerde wedstrijden (NL)' },
      { name: 'Proximus',color: '#7b2d8b', free: false,note: 'Tous les matchs' },
    ],
  },
  HR: {
	tzOffset: 2,
    name: 'Hrvatska', flag: '🇭🇷', teamCode: 'HR', group: 'L', lang: 'en',
    broadcasters: [
      { name: 'HRT', color: '#003087', free: true, note: 'Odabrane utakmice' },
    ],
  },
  RS: {
	tzOffset: 2,
    name: 'Srbija', flag: '🇷🇸', teamCode: 'RS', group: null, lang: 'en',
    broadcasters: [
      { name: 'RTS', color: '#003087', free: true, note: 'Odabrane utakmice' },
    ],
  },
  RO: {
	tzOffset: 3,
    name: 'România', flag: '🇷🇴', teamCode: 'RO', group: null, lang: 'en',
    broadcasters: [
      { name: 'TVR',   color: '#003087', free: true,  note: 'Meciuri selectate' },
      { name: 'Digi',  color: '#e30613', free: false, note: 'Toate meciurile' },
    ],
  },
  UA: {
	tzOffset: 3,
    name: 'Ukraina', flag: '🇺🇦', teamCode: 'UA', group: null, lang: 'en',
    broadcasters: [
      { name: 'Suspilne', color: '#003087', free: true, note: 'Вибрані матчі' },
    ],
  },
  SK: {
	tzOffset: 2,
    name: 'Slovensko', flag: '🇸🇰', teamCode: 'SK', group: null, lang: 'en',
    broadcasters: [
      { name: 'RTVS', color: '#003087', free: true, note: 'Vybrané zápasy' },
    ],
  },
  SI: {
	tzOffset: 2,
    name: 'Slovenija', flag: '🇸🇮', teamCode: 'SI', group: null, lang: 'en',
    broadcasters: [
      { name: 'RTV SLO', color: '#003087', free: true, note: 'Izbrane tekme' },
    ],
  },
  AL: {
	tzOffset: 2,
    name: 'Shqipëri', flag: '🇦🇱', teamCode: 'AL', group: null, lang: 'en',
    broadcasters: [
      { name: 'RTSH', color: '#e30613', free: true, note: 'Ndeshje të zgjedhura' },
    ],
  },
  GE: {
	tzOffset: 4,
    name: 'Georgia', flag: '🇬🇪', teamCode: 'GE', group: null, lang: 'en',
    broadcasters: [
      { name: 'GPB', color: '#003087', free: true, note: 'Selected matches' },
    ],
  },

  // ── AMERICAS ─────────────────────────────────────────────────────────────────
  US: {
	tzOffset: -4,
    name: 'USA', flag: '🇺🇸', teamCode: 'US', group: 'D', lang: 'en',
    broadcasters: [
      { name: 'FOX',       color: '#003087', free: true,  note: 'Selected matches' },
      { name: 'FS1',       color: '#002244', free: false, note: 'Selected matches' },
      { name: 'Telemundo', color: '#e30613', free: true,  note: 'Spanish language' },
    ],
  },
  BR: {
	tzOffset: -3,
    name: 'Brasil', flag: '🇧🇷', teamCode: 'BR', group: 'C', lang: 'pt',
    broadcasters: [
      { name: 'Globo',  color: '#003087', free: true,  note: 'Jogos selecionados' },
      { name: 'SporTV', color: '#e30613', free: false, note: 'Todos os jogos' },
      { name: 'CazéTV', color: '#f7a600', free: true,  note: 'Jogos selecionados (YouTube)' },
    ],
  },
  AR: {
	tzOffset: -3,
    name: 'Argentina', flag: '🇦🇷', teamCode: 'AR', group: 'J', lang: 'es',
    broadcasters: [
      { name: 'TyC Sports', color: '#003087', free: true, note: 'Partidos seleccionados' },
      { name: 'TV Pública', color: '#e30613', free: true, note: 'Partidos seleccionados' },
    ],
  },
  MX: {
	tzOffset: -5,
    name: 'México', flag: '🇲🇽', teamCode: 'MX', group: 'A', lang: 'es',
    broadcasters: [
      { name: 'Televisa', color: '#003087', free: true,  note: 'Partidos seleccionados' },
      { name: 'TV Azteca',color: '#f7a600', free: true,  note: 'Partidos seleccionados' },
      { name: 'ViX',      color: '#7b2d8b', free: false, note: 'Todos los partidos' },
    ],
  },
  CA: {
	tzOffset: -4,
    name: 'Canada', flag: '🇨🇦', teamCode: 'CA', group: 'B', lang: 'en',
    broadcasters: [
      { name: 'CTV',     color: '#003087', free: true,  note: 'Selected matches' },
      { name: 'TSN',     color: '#e30613', free: false, note: 'All matches' },
      { name: 'TVA',     color: '#f7a600', free: true,  note: 'Matchs sélectionnés (FR)' },
    ],
  },
  CO: {
	tzOffset: -5,
    name: 'Colombia', flag: '🇨🇴', teamCode: 'CO', group: 'K', lang: 'es',
    broadcasters: [
      { name: 'RCN',    color: '#e30613', free: true, note: 'Partidos seleccionados' },
      { name: 'Caracol',color: '#003087', free: true, note: 'Partidos seleccionados' },
    ],
  },
  UY: {
	tzOffset: -3,
    name: 'Uruguay', flag: '🇺🇾', teamCode: 'UY', group: 'H', lang: 'es',
    broadcasters: [
      { name: 'TCC',    color: '#003087', free: true, note: 'Partidos seleccionados' },
      { name: 'VTV',    color: '#e30613', free: false,note: 'Todos los partidos' },
    ],
  },
  EC: {
	tzOffset: -5,
    name: 'Ecuador', flag: '🇪🇨', teamCode: 'EC', group: 'E', lang: 'es',
    broadcasters: [
      { name: 'TC',      color: '#e30613', free: true, note: 'Partidos seleccionados' },
      { name: 'GolTV',   color: '#f7a600', free: false,note: 'Todos los partidos' },
    ],
  },
  VE: {
	tzOffset: -4,
    name: 'Venezuela', flag: '🇻🇪', teamCode: 'VE', group: 'J', lang: 'es',
    broadcasters: [
      { name: 'Venevisión', color: '#003087', free: true, note: 'Partidos seleccionados' },
    ],
  },
  PE: {
	tzOffset: -5,
    name: 'Perú', flag: '🇵🇪', teamCode: 'PE', group: 'L', lang: 'es',
    broadcasters: [
      { name: 'América TV', color: '#e30613', free: true, note: 'Partidos seleccionados' },
    ],
  },
  PY: {
	tzOffset: -4,
    name: 'Paraguay', flag: '🇵🇾', teamCode: 'PY', group: 'D', lang: 'es',
    broadcasters: [
      { name: 'Tigo Sports', color: '#003087', free: false, note: 'Todos los partidos' },
      { name: 'SNT',         color: '#e30613', free: true,  note: 'Partidos seleccionados' },
    ],
  },
  BO: {
	tzOffset: -4,
    name: 'Bolivia', flag: '🇧🇴', teamCode: 'BO', group: 'K', lang: 'es',
    broadcasters: [
      { name: 'Bolivia TV', color: '#003087', free: true, note: 'Partidos seleccionados' },
    ],
  },
  CW: {
	tzOffset: -4,
    name: 'Curaçao', flag: '🇨🇼', teamCode: 'CW', group: 'E', lang: 'en',
    broadcasters: [
      { name: 'TBD', color: '#666666', free: null, note: 'Rechte noch nicht bestätigt' },
    ],
  },
  PA: {
	tzOffset: -5,
    name: 'Panamá', flag: '🇵🇦', teamCode: 'PA', group: 'I', lang: 'es',
    broadcasters: [
      { name: 'TVN', color: '#003087', free: true, note: 'Partidos seleccionados' },
    ],
  },
  HN: {
	tzOffset: -6,
    name: 'Honduras', flag: '🇭🇳', teamCode: 'HN', group: 'L', lang: 'es',
    broadcasters: [
      { name: 'TVC', color: '#003087', free: true, note: 'Partidos seleccionados' },
    ],
  },
  CR: {
	tzOffset: -6,
    name: 'Costa Rica', flag: '🇨🇷', teamCode: 'CR', group: 'K', lang: 'es',
    broadcasters: [
      { name: 'Teletica', color: '#003087', free: true, note: 'Partidos seleccionados' },
    ],
  },
  JM: {
	tzOffset: -5,
    name: 'Jamaica', flag: '🇯🇲', teamCode: 'JM', group: 'B', lang: 'en',
    broadcasters: [
      { name: 'TVJ', color: '#003087', free: true, note: 'Selected matches' },
    ],
  },

  // ── AFRIKA ───────────────────────────────────────────────────────────────────
  MA: {
	tzOffset: 1,
    name: 'Maroc', flag: '🇲🇦', teamCode: 'MA', group: 'F', lang: 'fr',
    broadcasters: [
      { name: 'SNRT',   color: '#003087', free: true, note: 'Matchs sélectionnés' },
      { name: 'beIN',   color: '#e10600', free: false,note: 'Tous les matchs' },
    ],
  },
  SN: {
	tzOffset: 0,
    name: 'Sénégal', flag: '🇸🇳', teamCode: 'SN', group: 'G', lang: 'fr',
    broadcasters: [
      { name: 'RTS', color: '#003087', free: true, note: 'Matchs sélectionnés' },
    ],
  },
  EG: {
	tzOffset: 3,
    name: 'Egypt', flag: '🇪🇬', teamCode: 'EG', group: 'H', lang: 'en',
    broadcasters: [
      { name: 'ON Sport', color: '#e30613', free: true,  note: 'Selected matches' },
      { name: 'beIN',     color: '#e10600', free: false, note: 'All matches' },
    ],
  },
  NG: {
	tzOffset: 1,
    name: 'Nigeria', flag: '🇳🇬', teamCode: 'NG', group: 'I', lang: 'en',
    broadcasters: [
      { name: 'NTA',    color: '#003087', free: true, note: 'Selected matches' },
      { name: 'DSTV',   color: '#e30613', free: false,note: 'All matches' },
    ],
  },
  CM: {
	tzOffset: 1,
    name: 'Cameroun', flag: '🇨🇲', teamCode: 'CM', group: 'B', lang: 'fr',
    broadcasters: [
      { name: 'CRTV', color: '#003087', free: true, note: 'Matchs sélectionnés' },
    ],
  },
  CI: {
	tzOffset: 0,
    name: "Côte d'Ivoire", flag: '🇨🇮', teamCode: 'CI', group: 'E', lang: 'fr',
    broadcasters: [
      { name: 'RTI', color: '#f7a600', free: true, note: 'Matchs sélectionnés' },
    ],
  },
  ZA: {
	tzOffset: 2,
    name: 'South Africa', flag: '🇿🇦', teamCode: 'ZA', group: 'A', lang: 'en',
    broadcasters: [
      { name: 'SABC',  color: '#003087', free: true,  note: 'Selected matches' },
      { name: 'SuperSport', color: '#e30613', free: false, note: 'All matches' },
    ],
  },
  TN: {
	tzOffset: 1,
    name: 'Tunisie', flag: '🇹🇳', teamCode: 'TN', group: 'F', lang: 'fr',
    broadcasters: [
      { name: 'Wataniya', color: '#e30613', free: true, note: 'Matchs sélectionnés' },
      { name: 'beIN',     color: '#e10600', free: false,note: 'Tous les matchs' },
    ],
  },
  GH: {
	tzOffset: 0,
    name: 'Ghana', flag: '🇬🇭', teamCode: 'GH', group: 'L', lang: 'en',
    broadcasters: [
      { name: 'GTV',   color: '#003087', free: true, note: 'Selected matches' },
      { name: 'DSTV',  color: '#e30613', free: false,note: 'All matches' },
    ],
  },
  TZ: {
	tzOffset: 3,
    name: 'Tanzania', flag: '🇹🇿', teamCode: 'TZ', group: 'D', lang: 'en',
    broadcasters: [
      { name: 'TBC',  color: '#003087', free: true, note: 'Selected matches' },
      { name: 'DSTV', color: '#e30613', free: false,note: 'All matches' },
    ],
  },
  AO: {
	tzOffset: 1,
    name: 'Angola', flag: '🇦🇴', teamCode: 'AO', group: 'K', lang: 'pt',
    broadcasters: [
      { name: 'TPA', color: '#e30613', free: true, note: 'Jogos selecionados' },
    ],
  },
  BF: {
	tzOffset: 0,
    name: 'Burkina Faso', flag: '🇧🇫', teamCode: 'BF', group: 'J', lang: 'fr',
    broadcasters: [
      { name: 'RTB', color: '#e30613', free: true, note: 'Matchs sélectionnés' },
    ],
  },
  CF: {
	tzOffset: 1,
    name: 'Rép. Centrafricaine', flag: '🇨🇫', teamCode: 'CF', group: 'H', lang: 'fr',
    broadcasters: [
      { name: 'RTNC', color: '#003087', free: true, note: 'Matchs sélectionnés' },
    ],
  },
  MZ: {
	tzOffset: 2,
    name: 'Moçambique', flag: '🇲🇿', teamCode: 'MZ', group: 'G', lang: 'pt',
    broadcasters: [
      { name: 'TVM', color: '#003087', free: true, note: 'Jogos selecionados' },
    ],
  },

  // ── ASIEN / OZEANIEN ─────────────────────────────────────────────────────────
  JP: {
	tzOffset: 9,
    name: 'Japan', flag: '🇯🇵', teamCode: 'JP', group: 'B', lang: 'en',
    broadcasters: [
      { name: 'NHK',   color: '#003087', free: true, note: 'Selected matches' },
      { name: 'ABEMA', color: '#00bcd4', free: true, note: 'All matches (streaming)' },
    ],
  },
  KR: {
	tzOffset: 9,
    name: '대한민국', flag: '🇰🇷', teamCode: 'KR', group: 'A', lang: 'en',
    broadcasters: [
      { name: 'KBS', color: '#003087', free: true,  note: 'Selected matches' },
      { name: 'MBC', color: '#e30613', free: true,  note: 'Selected matches' },
      { name: 'SBS', color: '#f7a600', free: false, note: 'All matches' },
    ],
  },
  SA: {
	tzOffset: 3,
    name: 'Saudi Arabia', flag: '🇸🇦', teamCode: 'SA', group: 'H', lang: 'en',
    broadcasters: [
      { name: 'SSC',  color: '#003087', free: false, note: 'All matches' },
      { name: 'beIN', color: '#e10600', free: false, note: 'All matches' },
    ],
  },
  IR: {
	tzOffset: 3,
    name: 'Iran', flag: '🇮🇷', teamCode: 'IR', group: 'J', lang: 'en',
    broadcasters: [
      { name: 'IRIB', color: '#003087', free: true, note: 'Selected matches' },
    ],
  },
  AU: {
	tzOffset: 10,
    name: 'Australia', flag: '🇦🇺', teamCode: 'AU', group: 'D', lang: 'en',
    broadcasters: [
      { name: 'SBS',      color: '#003087', free: true,  note: 'Selected matches' },
      { name: 'Optus',    color: '#f7a600', free: false, note: 'All matches' },
    ],
  },
  NZ: {
	tzOffset: 12,
    name: 'New Zealand', flag: '🇳🇿', teamCode: 'NZ', group: 'I', lang: 'en',
    broadcasters: [
      { name: 'Sky NZ', color: '#003087', free: false, note: 'All matches' },
      { name: 'TVNZ',   color: '#e30613', free: true,  note: 'Selected matches' },
    ],
  },
  UZ: {
	tzOffset: 5,
    name: "O'zbekiston", flag: '🇺🇿', teamCode: 'UZ', group: 'L', lang: 'en',
    broadcasters: [
      { name: 'Uzbekistan TV', color: '#003087', free: true, note: 'Selected matches' },
    ],
  },
  QA: {
	tzOffset: 3,
    name: 'Qatar', flag: '🇶🇦', teamCode: 'QA', group: 'G', lang: 'en',
    broadcasters: [
      { name: 'beIN', color: '#e10600', free: false, note: 'All matches' },
    ],
  },
  CN: {
	tzOffset: 8,
    name: 'China', flag: '🇨🇳', teamCode: 'CN', group: 'K', lang: 'en',
    broadcasters: [
      { name: 'CCTV5', color: '#e30613', free: true, note: 'Selected matches' },
      { name: 'iQIYI', color: '#003087', free: false,note: 'All matches' },
    ],
  },
  TH: {
	tzOffset: 7,
    name: 'Thailand', flag: '🇹🇭', teamCode: 'TH', group: 'H', lang: 'en',
    broadcasters: [
      { name: 'TrueVisions', color: '#e30613', free: false, note: 'All matches' },
      { name: 'PPTV',        color: '#003087', free: true,  note: 'Selected matches' },
    ],
  },
  IQ: {
	tzOffset: 3,
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
    { name: 'Mexiko',               flag: '🇲🇽', code: 'MX' },
    { name: 'Südkorea',             flag: '🇰🇷', code: 'KR' },
    { name: 'Südafrika',            flag: '🇿🇦', code: 'ZA' },
    { name: 'Tschechien',           flag: '🇨🇿', code: 'CZ' },
  ]},
  B: { teams: [
    { name: 'Kanada',               flag: '🇨🇦', code: 'CA' },
    { name: 'Bosnien',              flag: '🇧🇦', code: 'BA' },
    { name: 'Katar',                flag: '🇶🇦', code: 'QA' },
    { name: 'Schweiz',              flag: '🇨🇭', code: 'CH' },
  ]},
  C: { teams: [
    { name: 'Brasilien',            flag: '🇧🇷', code: 'BR' },
    { name: 'Marokko',              flag: '🇲🇦', code: 'MA' },
    { name: 'Haiti',                flag: '🇭🇹', code: 'HT' },
    { name: 'Schottland',           flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', code: 'SC' },
  ]},
  D: { teams: [
    { name: 'USA',                  flag: '🇺🇸', code: 'US' },
    { name: 'Paraguay',             flag: '🇵🇾', code: 'PY' },
    { name: 'Australien',           flag: '🇦🇺', code: 'AU' },
    { name: 'Türkei',               flag: '🇹🇷', code: 'TR' },
  ]},
  E: { teams: [
    { name: 'Deutschland',          flag: '🇩🇪', code: 'DE' },
    { name: 'Curaçao',              flag: '🇨🇼', code: 'CW' },
    { name: 'Elfenbeinküste',       flag: '🇨🇮', code: 'CI' },
    { name: 'Ecuador',              flag: '🇪🇨', code: 'EC' },
  ]},
  F: { teams: [
    { name: 'Niederlande',          flag: '🇳🇱', code: 'NL' },
    { name: 'Japan',                flag: '🇯🇵', code: 'JP' },
    { name: 'Schweden',             flag: '🇸🇪', code: 'SE' },
    { name: 'Tunesien',             flag: '🇹🇳', code: 'TN' },
  ]},
  H: { teams: [
    { name: 'Spanien',              flag: '🇪🇸', code: 'ES' },
    { name: 'Kap Verde',            flag: '🇨🇻', code: 'CV' },
    { name: 'Saudi-Arabien',        flag: '🇸🇦', code: 'SA' },
    { name: 'Uruguay',              flag: '🇺🇾', code: 'UY' },
  ]},
  G: { teams: [
    { name: 'Belgien',              flag: '🇧🇪', code: 'BE' },
    { name: 'Ägypten',              flag: '🇪🇬', code: 'EG' },
    { name: 'Iran',                 flag: '🇮🇷', code: 'IR' },
    { name: 'Neuseeland',           flag: '🇳🇿', code: 'NZ' },
  ]},
  I: { teams: [
    { name: 'Frankreich',           flag: '🇫🇷', code: 'FR' },
    { name: 'Senegal',              flag: '🇸🇳', code: 'SN' },
    { name: 'Irak',                 flag: '🇮🇶', code: 'IQ' },
    { name: 'Norwegen',             flag: '🇳🇴', code: 'NO' },
  ]},
  J: { teams: [
    { name: 'Argentinien',          flag: '🇦🇷', code: 'AR' },
    { name: 'Algerien',             flag: '🇩🇿', code: 'DZ' },
    { name: 'Österreich',           flag: '🇦🇹', code: 'AT' },
    { name: 'Jordanien',            flag: '🇯🇴', code: 'JO' },
  ]},
  K: { teams: [
    { name: 'Portugal',             flag: '🇵🇹', code: 'PT' },
    { name: 'DR Kongo',             flag: '🇨🇩', code: 'CD' },
    { name: 'Usbekistan',           flag: '🇺🇿', code: 'UZ' },
    { name: 'Kolumbien',            flag: '🇨🇴', code: 'CO' },
  ]},
  L: { teams: [
    { name: 'England',              flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', code: 'GB' },
    { name: 'Kroatien',             flag: '🇭🇷', code: 'HR' },
    { name: 'Ghana',                flag: '🇬🇭', code: 'GH' },
    { name: 'Panama',               flag: '🇵🇦', code: 'PA' },
  ]},
};

// ─── TEAM FLAGS (Kurzreferenz für Spielkarten) ────────────────────────────────

export const teamFlags = Object.fromEntries(
  Object.entries(countryConfig).map(([code, c]) => [code, c.flag])
);