// js/matches.js
// Alle Zeiten in lokaler Deutscher Zeit (MESZ / UTC+2)
// score: null = noch nicht gespielt, 'X:Y' = Ergebnis
// tv: Sender-Kürzel für DE; andere Länder → countryConfig.broadcasters

export const matches = [

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE A — Mexiko, Kanada, Südafrika, Südkorea
  // ═══════════════════════════════════════════════════════════════
  { id: 1,  date: '2026-06-11', time: '21:00', home: 'Mexiko',     homeflag: '🇲🇽', homeCode: 'MX', away: 'Südafrika',  awayflag: '🇿🇦', awayCode: 'ZA', group: 'A', tv: 'ZDF',     freeTv: true,  score: null },
  { id: 2,  date: '2026-06-12', time: '00:00', home: 'Kanada',     homeflag: '🇨🇦', homeCode: 'CA', away: 'Südkorea',   awayflag: '🇰🇷', awayCode: 'KR', group: 'A', tv: 'Magenta', freeTv: false, score: null },
  { id: 3,  date: '2026-06-16', time: '21:00', home: 'Mexiko',     homeflag: '🇲🇽', homeCode: 'MX', away: 'Südkorea',   awayflag: '🇰🇷', awayCode: 'KR', group: 'A', tv: 'Magenta', freeTv: false, score: null },
  { id: 4,  date: '2026-06-17', time: '00:00', home: 'Kanada',     homeflag: '🇨🇦', homeCode: 'CA', away: 'Südafrika',  awayflag: '🇿🇦', awayCode: 'ZA', group: 'A', tv: 'ARD',     freeTv: true,  score: null },
  { id: 5,  date: '2026-06-25', time: '22:00', home: 'Südkorea',   homeflag: '🇰🇷', homeCode: 'KR', away: 'Südafrika',  awayflag: '🇿🇦', awayCode: 'ZA', group: 'A', tv: 'Magenta', freeTv: false, score: null },
  { id: 6,  date: '2026-06-25', time: '22:00', home: 'Mexiko',     homeflag: '🇲🇽', homeCode: 'MX', away: 'Kanada',     awayflag: '🇨🇦', awayCode: 'CA', group: 'A', tv: 'ARD',     freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE B — Spanien, Brasilien, Japan, Jamaika
  // ═══════════════════════════════════════════════════════════════
  { id: 7,  date: '2026-06-12', time: '21:00', home: 'Spanien',    homeflag: '🇪🇸', homeCode: 'ES', away: 'Brasilien',  awayflag: '🇧🇷', awayCode: 'BR', group: 'B', tv: 'ARD',     freeTv: true,  score: null },
  { id: 8,  date: '2026-06-13', time: '00:00', home: 'Japan',      homeflag: '🇯🇵', homeCode: 'JP', away: 'Jamaika',    awayflag: '🇯🇲', awayCode: 'JM', group: 'B', tv: 'Magenta', freeTv: false, score: null },
  { id: 9,  date: '2026-06-17', time: '22:00', home: 'Spanien',    homeflag: '🇪🇸', homeCode: 'ES', away: 'Japan',      awayflag: '🇯🇵', awayCode: 'JP', group: 'B', tv: 'ZDF',     freeTv: true,  score: null },
  { id: 10, date: '2026-06-18', time: '01:00', home: 'Brasilien',  homeflag: '🇧🇷', homeCode: 'BR', away: 'Jamaika',    awayflag: '🇯🇲', awayCode: 'JM', group: 'B', tv: 'ARD',     freeTv: true,  score: null },
  { id: 11, date: '2026-06-26', time: '22:00', home: 'Japan',      homeflag: '🇯🇵', homeCode: 'JP', away: 'Brasilien',  awayflag: '🇧🇷', awayCode: 'BR', group: 'B', tv: 'ARD',     freeTv: true,  score: null },
  { id: 12, date: '2026-06-26', time: '22:00', home: 'Jamaika',    homeflag: '🇯🇲', homeCode: 'JM', away: 'Spanien',    awayflag: '🇪🇸', awayCode: 'ES', group: 'B', tv: 'Magenta', freeTv: false, score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE C — Frankreich, Argentinien, Portugal, Irak
  // ═══════════════════════════════════════════════════════════════
  { id: 13, date: '2026-06-13', time: '21:00', home: 'Frankreich', homeflag: '🇫🇷', homeCode: 'FR', away: 'Argentinien',awayflag: '🇦🇷', awayCode: 'AR', group: 'C', tv: 'ZDF',     freeTv: true,  score: null },
  { id: 14, date: '2026-06-14', time: '01:00', home: 'Portugal',   homeflag: '🇵🇹', homeCode: 'PT', away: 'Irak',       awayflag: '🇮🇶', awayCode: 'IQ', group: 'C', tv: 'Magenta', freeTv: false, score: null },
  { id: 15, date: '2026-06-18', time: '22:00', home: 'Frankreich', homeflag: '🇫🇷', homeCode: 'FR', away: 'Portugal',   awayflag: '🇵🇹', awayCode: 'PT', group: 'C', tv: 'ARD',     freeTv: true,  score: null },
  { id: 16, date: '2026-06-19', time: '01:00', home: 'Argentinien',homeflag: '🇦🇷', homeCode: 'AR', away: 'Irak',       awayflag: '🇮🇶', awayCode: 'IQ', group: 'C', tv: 'Magenta', freeTv: false, score: null },
  { id: 17, date: '2026-06-27', time: '22:00', home: 'Portugal',   homeflag: '🇵🇹', homeCode: 'PT', away: 'Argentinien',awayflag: '🇦🇷', awayCode: 'AR', group: 'C', tv: 'ZDF',     freeTv: true,  score: null },
  { id: 18, date: '2026-06-27', time: '22:00', home: 'Irak',       homeflag: '🇮🇶', homeCode: 'IQ', away: 'Frankreich', awayflag: '🇫🇷', awayCode: 'FR', group: 'C', tv: 'ARD',     freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE D — USA, Paraguay, Australien, Tansania
  // ═══════════════════════════════════════════════════════════════
  { id: 19, date: '2026-06-13', time: '03:00', home: 'USA',        homeflag: '🇺🇸', homeCode: 'US', away: 'Paraguay',   awayflag: '🇵🇾', awayCode: 'PY', group: 'D', tv: 'Magenta', freeTv: false, score: null },
  { id: 20, date: '2026-06-13', time: '21:00', home: 'Australien', homeflag: '🇦🇺', homeCode: 'AU', away: 'Tansania',   awayflag: '🇹🇿', awayCode: 'TZ', group: 'D', tv: 'Magenta', freeTv: false, score: null },
  { id: 21, date: '2026-06-18', time: '19:00', home: 'USA',        homeflag: '🇺🇸', homeCode: 'US', away: 'Tansania',   awayflag: '🇹🇿', awayCode: 'TZ', group: 'D', tv: 'Magenta', freeTv: false, score: null },
  { id: 22, date: '2026-06-19', time: '21:00', home: 'Australien', homeflag: '🇦🇺', homeCode: 'AU', away: 'Paraguay',   awayflag: '🇵🇾', awayCode: 'PY', group: 'D', tv: 'ARD',     freeTv: true,  score: null },
  { id: 23, date: '2026-06-27', time: '03:00', home: 'Paraguay',   homeflag: '🇵🇾', homeCode: 'PY', away: 'Tansania',   awayflag: '🇹🇿', awayCode: 'TZ', group: 'D', tv: 'Magenta', freeTv: false, score: null },
  { id: 24, date: '2026-06-27', time: '03:00', home: 'USA',        homeflag: '🇺🇸', homeCode: 'US', away: 'Australien', awayflag: '🇦🇺', awayCode: 'AU', group: 'D', tv: 'ZDF',     freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE E — Deutschland, Elfenbeinküste, Ecuador, Curaçao
  // ═══════════════════════════════════════════════════════════════
  { id: 25, date: '2026-06-14', time: '19:00', home: 'Deutschland',homeflag: '🇩🇪', homeCode: 'DE', away: 'Curaçao',    awayflag: '🇨🇼', awayCode: 'CW', group: 'E', tv: 'ARD',     freeTv: true,  score: null },
  { id: 26, date: '2026-06-15', time: '01:00', home: 'Elfenbeinküste',homeflag:'🇨🇮',homeCode:'CI', away: 'Ecuador',    awayflag: '🇪🇨', awayCode: 'EC', group: 'E', tv: 'ARD',     freeTv: true,  score: null },
  { id: 27, date: '2026-06-20', time: '22:00', home: 'Deutschland',homeflag: '🇩🇪', homeCode: 'DE', away: 'Elfenbeinküste',awayflag:'🇨🇮',awayCode:'CI', group: 'E', tv: 'ZDF',     freeTv: true,  score: null },
  { id: 28, date: '2026-06-21', time: '02:00', home: 'Ecuador',    homeflag: '🇪🇨', homeCode: 'EC', away: 'Curaçao',    awayflag: '🇨🇼', awayCode: 'CW', group: 'E', tv: 'ZDF',     freeTv: true,  score: null },
  { id: 29, date: '2026-06-25', time: '22:00', home: 'Curaçao',    homeflag: '🇨🇼', homeCode: 'CW', away: 'Elfenbeinküste',awayflag:'🇨🇮',awayCode:'CI', group: 'E', tv: 'Magenta', freeTv: false, score: null },
  { id: 30, date: '2026-06-25', time: '22:00', home: 'Ecuador',    homeflag: '🇪🇨', homeCode: 'EC', away: 'Deutschland', awayflag: '🇩🇪', awayCode: 'DE', group: 'E', tv: 'ARD',     freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE F — Niederlande, Marokko, Georgien, Tunesien
  // ═══════════════════════════════════════════════════════════════
  { id: 31, date: '2026-06-14', time: '22:00', home: 'Niederlande',homeflag: '🇳🇱', homeCode: 'NL', away: 'Tunesien',   awayflag: '🇹🇳', awayCode: 'TN', group: 'F', tv: 'ARD',     freeTv: true,  score: null },
  { id: 32, date: '2026-06-15', time: '03:00', home: 'Marokko',    homeflag: '🇲🇦', homeCode: 'MA', away: 'Georgien',   awayflag: '🇬🇪', awayCode: 'GE', group: 'F', tv: 'Magenta', freeTv: false, score: null },
  { id: 33, date: '2026-06-20', time: '19:00', home: 'Niederlande',homeflag: '🇳🇱', homeCode: 'NL', away: 'Georgien',   awayflag: '🇬🇪', awayCode: 'GE', group: 'F', tv: 'ZDF',     freeTv: true,  score: null },
  { id: 34, date: '2026-06-20', time: '22:00', home: 'Marokko',    homeflag: '🇲🇦', homeCode: 'MA', away: 'Tunesien',   awayflag: '🇹🇳', awayCode: 'TN', group: 'F', tv: 'Magenta', freeTv: false, score: null },
  { id: 35, date: '2026-06-26', time: '22:00', home: 'Georgien',   homeflag: '🇬🇪', homeCode: 'GE', away: 'Tunesien',   awayflag: '🇹🇳', awayCode: 'TN', group: 'F', tv: 'Magenta', freeTv: false, score: null },
  { id: 36, date: '2026-06-26', time: '22:00', home: 'Niederlande',homeflag: '🇳🇱', homeCode: 'NL', away: 'Marokko',    awayflag: '🇲🇦', awayCode: 'MA', group: 'F', tv: 'ARD',     freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE G — Schweiz, Senegal, Slowenien, Katar
  // ═══════════════════════════════════════════════════════════════
  { id: 37, date: '2026-06-15', time: '19:00', home: 'Schweiz',    homeflag: '🇨🇭', homeCode: 'CH', away: 'Katar',      awayflag: '🇶🇦', awayCode: 'QA', group: 'G', tv: 'ZDF',     freeTv: true,  score: null },
  { id: 38, date: '2026-06-15', time: '22:00', home: 'Senegal',    homeflag: '🇸🇳', homeCode: 'SN', away: 'Slowenien',  awayflag: '🇸🇮', awayCode: 'SI', group: 'G', tv: 'Magenta', freeTv: false, score: null },
  { id: 39, date: '2026-06-21', time: '19:00', home: 'Schweiz',    homeflag: '🇨🇭', homeCode: 'CH', away: 'Slowenien',  awayflag: '🇸🇮', awayCode: 'SI', group: 'G', tv: 'ARD',     freeTv: true,  score: null },
  { id: 40, date: '2026-06-21', time: '22:00', home: 'Senegal',    homeflag: '🇸🇳', homeCode: 'SN', away: 'Katar',      awayflag: '🇶🇦', awayCode: 'QA', group: 'G', tv: 'Magenta', freeTv: false, score: null },
  { id: 41, date: '2026-06-28', time: '22:00', home: 'Slowenien',  homeflag: '🇸🇮', homeCode: 'SI', away: 'Katar',      awayflag: '🇶🇦', awayCode: 'QA', group: 'G', tv: 'Magenta', freeTv: false, score: null },
  { id: 42, date: '2026-06-28', time: '22:00', home: 'Schweiz',    homeflag: '🇨🇭', homeCode: 'CH', away: 'Senegal',    awayflag: '🇸🇳', awayCode: 'SN', group: 'G', tv: 'ZDF',     freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE H — England, Kolumbien, Ägypten, Thailand
  // ═══════════════════════════════════════════════════════════════
  { id: 43, date: '2026-06-15', time: '21:00', home: 'England',    homeflag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeCode: 'GB', away: 'Thailand',   awayflag: '🇹🇭', awayCode: 'TH', group: 'H', tv: 'ZDF',     freeTv: true,  score: null },
  { id: 44, date: '2026-06-16', time: '00:00', home: 'Kolumbien',  homeflag: '🇨🇴', homeCode: 'CO', away: 'Ägypten',    awayflag: '🇪🇬', awayCode: 'EG', group: 'H', tv: 'Magenta', freeTv: false, score: null },
  { id: 45, date: '2026-06-21', time: '21:00', home: 'England',    homeflag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeCode: 'GB', away: 'Ägypten',    awayflag: '🇪🇬', awayCode: 'EG', group: 'H', tv: 'ARD',     freeTv: true,  score: null },
  { id: 46, date: '2026-06-22', time: '00:00', home: 'Kolumbien',  homeflag: '🇨🇴', homeCode: 'CO', away: 'Thailand',   awayflag: '🇹🇭', awayCode: 'TH', group: 'H', tv: 'Magenta', freeTv: false, score: null },
  { id: 47, date: '2026-06-28', time: '03:00', home: 'Ägypten',    homeflag: '🇪🇬', homeCode: 'EG', away: 'Thailand',   awayflag: '🇹🇭', awayCode: 'TH', group: 'H', tv: 'Magenta', freeTv: false, score: null },
  { id: 48, date: '2026-06-28', time: '03:00', home: 'England',    homeflag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeCode: 'GB', away: 'Kolumbien',  awayflag: '🇨🇴', awayCode: 'CO', group: 'H', tv: 'ZDF',     freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE I — Slowakei, Albanien, Neuseeland, Nigeria
  // ═══════════════════════════════════════════════════════════════
  { id: 49, date: '2026-06-16', time: '19:00', home: 'Slowakei',   homeflag: '🇸🇰', homeCode: 'SK', away: 'Nigeria',    awayflag: '🇳🇬', awayCode: 'NG', group: 'I', tv: 'Magenta', freeTv: false, score: null },
  { id: 50, date: '2026-06-16', time: '22:00', home: 'Albanien',   homeflag: '🇦🇱', homeCode: 'AL', away: 'Neuseeland', awayflag: '🇳🇿', awayCode: 'NZ', group: 'I', tv: 'Magenta', freeTv: false, score: null },
  { id: 51, date: '2026-06-22', time: '19:00', home: 'Slowakei',   homeflag: '🇸🇰', homeCode: 'SK', away: 'Neuseeland', awayflag: '🇳🇿', awayCode: 'NZ', group: 'I', tv: 'Magenta', freeTv: false, score: null },
  { id: 52, date: '2026-06-22', time: '22:00', home: 'Albanien',   homeflag: '🇦🇱', homeCode: 'AL', away: 'Nigeria',    awayflag: '🇳🇬', awayCode: 'NG', group: 'I', tv: 'ARD',     freeTv: true,  score: null },
  { id: 53, date: '2026-06-29', time: '22:00', home: 'Neuseeland', homeflag: '🇳🇿', homeCode: 'NZ', away: 'Nigeria',    awayflag: '🇳🇬', awayCode: 'NG', group: 'I', tv: 'Magenta', freeTv: false, score: null },
  { id: 54, date: '2026-06-29', time: '22:00', home: 'Slowakei',   homeflag: '🇸🇰', homeCode: 'SK', away: 'Albanien',   awayflag: '🇦🇱', awayCode: 'AL', group: 'I', tv: 'ZDF',     freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE J — Rumänien, Uruguay, Iran, Burkina Faso
  // ═══════════════════════════════════════════════════════════════
  { id: 55, date: '2026-06-16', time: '03:00', home: 'Uruguay',    homeflag: '🇺🇾', homeCode: 'UY', away: 'Iran',       awayflag: '🇮🇷', awayCode: 'IR', group: 'J', tv: 'Magenta', freeTv: false, score: null },
  { id: 56, date: '2026-06-17', time: '19:00', home: 'Rumänien',   homeflag: '🇷🇴', homeCode: 'RO', away: 'Burkina Faso',awayflag:'🇧🇫', awayCode: 'BF', group: 'J', tv: 'Magenta', freeTv: false, score: null },
  { id: 57, date: '2026-06-22', time: '03:00', home: 'Uruguay',    homeflag: '🇺🇾', homeCode: 'UY', away: 'Burkina Faso',awayflag:'🇧🇫', awayCode: 'BF', group: 'J', tv: 'Magenta', freeTv: false, score: null },
  { id: 58, date: '2026-06-22', time: '21:00', home: 'Rumänien',   homeflag: '🇷🇴', homeCode: 'RO', away: 'Iran',       awayflag: '🇮🇷', awayCode: 'IR', group: 'J', tv: 'ARD',     freeTv: true,  score: null },
  { id: 59, date: '2026-06-29', time: '03:00', home: 'Iran',       homeflag: '🇮🇷', homeCode: 'IR', away: 'Burkina Faso',awayflag:'🇧🇫', awayCode: 'BF', group: 'J', tv: 'Magenta', freeTv: false, score: null },
  { id: 60, date: '2026-06-29', time: '03:00', home: 'Uruguay',    homeflag: '🇺🇾', homeCode: 'UY', away: 'Rumänien',   awayflag: '🇷🇴', awayCode: 'RO', group: 'J', tv: 'ZDF',     freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE K — Kroatien, China, Costa Rica, Angola
  // ═══════════════════════════════════════════════════════════════
  { id: 61, date: '2026-06-17', time: '21:00', home: 'Kroatien',   homeflag: '🇭🇷', homeCode: 'HR', away: 'Angola',     awayflag: '🇦🇴', awayCode: 'AO', group: 'K', tv: 'ZDF',     freeTv: true,  score: null },
  { id: 62, date: '2026-06-18', time: '03:00', home: 'China',      homeflag: '🇨🇳', homeCode: 'CN', away: 'Costa Rica', awayflag: '🇨🇷', awayCode: 'CR', group: 'K', tv: 'Magenta', freeTv: false, score: null },
  { id: 63, date: '2026-06-23', time: '19:00', home: 'Kroatien',   homeflag: '🇭🇷', homeCode: 'HR', away: 'Costa Rica', awayflag: '🇨🇷', awayCode: 'CR', group: 'K', tv: 'ARD',     freeTv: true,  score: null },
  { id: 64, date: '2026-06-23', time: '22:00', home: 'China',      homeflag: '🇨🇳', homeCode: 'CN', away: 'Angola',     awayflag: '🇦🇴', awayCode: 'AO', group: 'K', tv: 'Magenta', freeTv: false, score: null },
  { id: 65, date: '2026-06-30', time: '22:00', home: 'Costa Rica', homeflag: '🇨🇷', homeCode: 'CR', away: 'Angola',     awayflag: '🇦🇴', awayCode: 'AO', group: 'K', tv: 'Magenta', freeTv: false, score: null },
  { id: 66, date: '2026-06-30', time: '22:00', home: 'Kroatien',   homeflag: '🇭🇷', homeCode: 'HR', away: 'China',      awayflag: '🇨🇳', awayCode: 'CN', group: 'K', tv: 'ZDF',     freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE L — Ukraine, Usbekistan, Ghana, Peru
  // ═══════════════════════════════════════════════════════════════
  { id: 67, date: '2026-06-18', time: '19:00', home: 'Ukraine',    homeflag: '🇺🇦', homeCode: 'UA', away: 'Peru',       awayflag: '🇵🇪', awayCode: 'PE', group: 'L', tv: 'ARD',     freeTv: true,  score: null },
  { id: 68, date: '2026-06-18', time: '22:00', home: 'Usbekistan', homeflag: '🇺🇿', homeCode: 'UZ', away: 'Ghana',      awayflag: '🇬🇭', awayCode: 'GH', group: 'L', tv: 'Magenta', freeTv: false, score: null },
  { id: 69, date: '2026-06-23', time: '03:00', home: 'Ukraine',    homeflag: '🇺🇦', homeCode: 'UA', away: 'Ghana',      awayflag: '🇬🇭', awayCode: 'GH', group: 'L', tv: 'Magenta', freeTv: false, score: null },
  { id: 70, date: '2026-06-24', time: '03:00', home: 'Usbekistan', homeflag: '🇺🇿', homeCode: 'UZ', away: 'Peru',       awayflag: '🇵🇪', awayCode: 'PE', group: 'L', tv: 'Magenta', freeTv: false, score: null },
  { id: 71, date: '2026-06-30', time: '03:00', home: 'Ghana',      homeflag: '🇬🇭', homeCode: 'GH', away: 'Peru',       awayflag: '🇵🇪', awayCode: 'PE', group: 'L', tv: 'ZDF',     freeTv: true,  score: null },
  { id: 72, date: '2026-06-30', time: '03:00', home: 'Ukraine',    homeflag: '🇺🇦', homeCode: 'UA', away: 'Usbekistan', awayflag: '🇺🇿', awayCode: 'UZ', group: 'L', tv: 'ARD',     freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // K.O.-RUNDE — Platzhalter (werden später befüllt)
  // ═══════════════════════════════════════════════════════════════

  // Achtelfinale (Runde der 32 → 16 Spiele)
  { id: 73,  date: '2026-07-06', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ARD', freeTv: true,  score: null },
  { id: 74,  date: '2026-07-06', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ZDF', freeTv: true,  score: null },
  { id: 75,  date: '2026-07-07', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ARD', freeTv: true,  score: null },
  { id: 76,  date: '2026-07-07', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ZDF', freeTv: true,  score: null },
  { id: 77,  date: '2026-07-08', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ARD', freeTv: true,  score: null },
  { id: 78,  date: '2026-07-08', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ZDF', freeTv: true,  score: null },
  { id: 79,  date: '2026-07-09', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ARD', freeTv: true,  score: null },
  { id: 80,  date: '2026-07-09', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ZDF', freeTv: true,  score: null },
  { id: 81,  date: '2026-07-10', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ARD', freeTv: true,  score: null },
  { id: 82,  date: '2026-07-10', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ZDF', freeTv: true,  score: null },
  { id: 83,  date: '2026-07-11', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ARD', freeTv: true,  score: null },
  { id: 84,  date: '2026-07-11', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ZDF', freeTv: true,  score: null },
  { id: 85,  date: '2026-07-12', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ARD', freeTv: true,  score: null },
  { id: 86,  date: '2026-07-12', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ZDF', freeTv: true,  score: null },
  { id: 87,  date: '2026-07-13', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ARD', freeTv: true,  score: null },
  { id: 88,  date: '2026-07-13', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: 'ZDF', freeTv: true,  score: null },

  // Viertelfinale (4 Spiele)
  { id: 89,  date: '2026-07-17', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'QF', tv: 'ARD', freeTv: true,  score: null },
  { id: 90,  date: '2026-07-17', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'QF', tv: 'ZDF', freeTv: true,  score: null },
  { id: 91,  date: '2026-07-18', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'QF', tv: 'ARD', freeTv: true,  score: null },
  { id: 92,  date: '2026-07-18', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'QF', tv: 'ZDF', freeTv: true,  score: null },

  // Halbfinale (2 Spiele)
  { id: 93,  date: '2026-07-22', time: '02:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'SF', tv: 'ARD', freeTv: true,  score: null },
  { id: 94,  date: '2026-07-23', time: '02:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'SF', tv: 'ZDF', freeTv: true,  score: null },

  // Spiel um Platz 3
  { id: 95,  date: '2026-07-25', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'P3', tv: 'ZDF', freeTv: true,  score: null },

  // Finale
  { id: 96,  date: '2026-07-19', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'F',  tv: 'ARD', freeTv: true,  score: null },
];