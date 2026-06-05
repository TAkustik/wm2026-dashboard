// js/matches.js
// Alle Zeiten in lokaler Deutscher Zeit (MESZ / UTC+2)
// Quelle: OpenLigaDB api.openligadb.de/getmatchdata/wm26/2026
// score: null = noch nicht gespielt, 'X:Y' = Ergebnis
// tv: Sender-Kürzel für DE; andere Länder → countryConfig.broadcasters
// openligaId: ID in OpenLigaDB für automatisches Score-Matching

export const matches = [

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE A — Mexiko, Südkorea, Südafrika, Tschechien
  // ═══════════════════════════════════════════════════════════════
  { id: 1,  openligaId: 80099, date: '2026-06-11', time: '21:00', home: 'Mexiko',               homeflag: '🇲🇽', homeCode: 'MX', away: 'Südafrika',            awayflag: '🇿🇦', awayCode: 'ZA', group: 'A', tv: 'ZDF', freeTv: true,  score: null },
  { id: 2,  openligaId: 80100, date: '2026-06-12', time: '00:00', home: 'Südkorea',              homeflag: '🇰🇷', homeCode: 'KR', away: 'Tschechien',           awayflag: '🇨🇿', awayCode: 'CZ', group: 'A', tv: 'Magenta', freeTv: false, score: null },
  { id: 3,  openligaId: 80127, date: '2026-06-19', time: '03:00', home: 'Mexiko',               homeflag: '🇲🇽', homeCode: 'MX', away: 'Südkorea',              awayflag: '🇰🇷', awayCode: 'KR', group: 'A', tv: null, freeTv: null, score: null },
  { id: 4,  openligaId: 80124, date: '2026-06-18', time: '18:00', home: 'Tschechien',            homeflag: '🇨🇿', homeCode: 'CZ', away: 'Südafrika',            awayflag: '🇿🇦', awayCode: 'ZA', group: 'A', tv: null, freeTv: null,  score: null },
  { id: 5,  openligaId: 80152, date: '2026-06-25', time: '03:00', home: 'Südafrika',             homeflag: '🇿🇦', homeCode: 'ZA', away: 'Südkorea',              awayflag: '🇰🇷', awayCode: 'KR', group: 'A', tv: null, freeTv: null, score: null },
  { id: 6,  openligaId: 80153, date: '2026-06-25', time: '03:00', home: 'Tschechien',            homeflag: '🇨🇿', homeCode: 'CZ', away: 'Mexiko',               awayflag: '🇲🇽', awayCode: 'MX', group: 'A', tv: null, freeTv: null,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE B — Kanada, Bosnien und Herzegowina, Katar, Schweiz
  // ═══════════════════════════════════════════════════════════════
  { id: 7,  openligaId: 80101, date: '2026-06-12', time: '21:00', home: 'Kanada',               homeflag: '🇨🇦', homeCode: 'CA', away: 'Bosnien',               awayflag: '🇧🇦', awayCode: 'BA', group: 'B', tv: 'ARD', freeTv: true, score: null },
  { id: 8,  openligaId: 80104, date: '2026-06-13', time: '21:00', home: 'Katar',                homeflag: '🇶🇦', homeCode: 'QA', away: 'Schweiz',               awayflag: '🇨🇭', awayCode: 'CH', group: 'B', tv: 'ZDF', freeTv: true,  score: null },
  { id: 9,  openligaId: 80126, date: '2026-06-19', time: '00:00', home: 'Kanada',               homeflag: '🇨🇦', homeCode: 'CA', away: 'Katar',                awayflag: '🇶🇦', awayCode: 'QA', group: 'B', tv: null, freeTv: null,  score: null },
  { id: 10, openligaId: 80125, date: '2026-06-18', time: '21:00', home: 'Schweiz',              homeflag: '🇨🇭', homeCode: 'CH', away: 'Bosnien',               awayflag: '🇧🇦', awayCode: 'BA', group: 'B', tv: 'ARD', freeTv: true, score: null },
  { id: 11, openligaId: 80148, date: '2026-06-24', time: '21:00', home: 'Schweiz',              homeflag: '🇨🇭', homeCode: 'CH', away: 'Kanada',               awayflag: '🇨🇦', awayCode: 'CA', group: 'B', tv: 'ZDF', freeTv: true,  score: null },
  { id: 12, openligaId: 80149, date: '2026-06-24', time: '21:00', home: 'Bosnien',              homeflag: '🇧🇦', homeCode: 'BA', away: 'Katar',                awayflag: '🇶🇦', awayCode: 'QA', group: 'B', tv: null, freeTv: null, score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE C — Brasilien, Marokko, Haiti, Schottland
  // ═══════════════════════════════════════════════════════════════
  { id: 13, openligaId: 80105, date: '2026-06-14', time: '00:00', home: 'Brasilien',             homeflag: '🇧🇷', homeCode: 'BR', away: 'Marokko',               awayflag: '🇲🇦', awayCode: 'MA', group: 'C', tv: 'ZDF', freeTv: true,  score: null },
  { id: 14, openligaId: 80106, date: '2026-06-14', time: '03:00', home: 'Haiti',                homeflag: '🇭🇹', homeCode: 'HT', away: 'Schottland',             awayflag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', awayCode: 'SC', group: 'C', tv: null, freeTv: null, score: null },
  { id: 15, openligaId: 80130, date: '2026-06-20', time: '00:00', home: 'Schottland',            homeflag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', homeCode: 'SC', away: 'Marokko',               awayflag: '🇲🇦', awayCode: 'MA', group: 'C', tv: null, freeTv: null, score: null },
  { id: 16, openligaId: 80131, date: '2026-06-20', time: '03:00', home: 'Brasilien',             homeflag: '🇧🇷', homeCode: 'BR', away: 'Haiti',                awayflag: '🇭🇹', awayCode: 'HT', group: 'C', tv: null, freeTv: null,  score: null },
  { id: 17, openligaId: 80150, date: '2026-06-25', time: '00:00', home: 'Marokko',              homeflag: '🇲🇦', homeCode: 'MA', away: 'Haiti',                awayflag: '🇭🇹', awayCode: 'HT', group: 'C', tv: null, freeTv: null, score: null },
  { id: 18, openligaId: 80151, date: '2026-06-25', time: '00:00', home: 'Schottland',            homeflag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', homeCode: 'SC', away: 'Brasilien',              awayflag: '🇧🇷', awayCode: 'BR', group: 'C', tv: 'ZDF', freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE D — USA, Paraguay, Australien, Türkei
  // ═══════════════════════════════════════════════════════════════
  { id: 19, openligaId: 80102, date: '2026-06-13', time: '03:00', home: 'USA',                  homeflag: '🇺🇸', homeCode: 'US', away: 'Paraguay',               awayflag: '🇵🇾', awayCode: 'PY', group: 'D', tv: 'Magenta', freeTv: false, score: null },
  { id: 20, openligaId: 80103, date: '2026-06-13', time: '06:00', home: 'Australien',            homeflag: '🇦🇺', homeCode: 'AU', away: 'Türkei',                awayflag: '🇹🇷', awayCode: 'TR', group: 'D', tv: 'Magenta', freeTv: false, score: null },
  { id: 21, openligaId: 80129, date: '2026-06-19', time: '21:00', home: 'USA',                  homeflag: '🇺🇸', homeCode: 'US', away: 'Australien',              awayflag: '🇦🇺', awayCode: 'AU', group: 'D', tv: 'ARD', freeTv: true,  score: null },
  { id: 22, openligaId: 80128, date: '2026-06-19', time: '06:00', home: 'Türkei',               homeflag: '🇹🇷', homeCode: 'TR', away: 'Paraguay',               awayflag: '🇵🇾', awayCode: 'PY', group: 'D', tv: null, freeTv: null, score: null },
  { id: 23, openligaId: 80158, date: '2026-06-26', time: '04:00', home: 'Türkei',               homeflag: '🇹🇷', homeCode: 'TR', away: 'USA',                  awayflag: '🇺🇸', awayCode: 'US', group: 'D', tv: null, freeTv: null,  score: null },
  { id: 24, openligaId: 80159, date: '2026-06-26', time: '04:00', home: 'Paraguay',              homeflag: '🇵🇾', homeCode: 'PY', away: 'Australien',             awayflag: '🇦🇺', awayCode: 'AU', group: 'D', tv: null, freeTv: null, score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE E — Deutschland, Curaçao, Elfenbeinküste, Ecuador
  // ═══════════════════════════════════════════════════════════════
  { id: 25, openligaId: 80107, date: '2026-06-14', time: '19:00', home: 'Deutschland',           homeflag: '🇩🇪', homeCode: 'DE', away: 'Curaçao',               awayflag: '🇨🇼', awayCode: 'CW', group: 'E', tv: 'ARD', freeTv: true,  score: null },
  { id: 26, openligaId: 80109, date: '2026-06-15', time: '01:00', home: 'Elfenbeinküste',        homeflag: '🇨🇮', homeCode: 'CI', away: 'Ecuador',               awayflag: '🇪🇨', awayCode: 'EC', group: 'E', tv: 'ARD', freeTv: true,  score: null },
  { id: 27, openligaId: 80134, date: '2026-06-20', time: '22:00', home: 'Deutschland',           homeflag: '🇩🇪', homeCode: 'DE', away: 'Elfenbeinküste',         awayflag: '🇨🇮', awayCode: 'CI', group: 'E', tv: 'ZDF', freeTv: true,  score: null },
  { id: 28, openligaId: 80135, date: '2026-06-21', time: '02:00', home: 'Ecuador',               homeflag: '🇪🇨', homeCode: 'EC', away: 'Curaçao',               awayflag: '🇨🇼', awayCode: 'CW', group: 'E', tv: null, freeTv: null,  score: null },
  { id: 29, openligaId: 80154, date: '2026-06-25', time: '22:00', home: 'Curaçao',               homeflag: '🇨🇼', homeCode: 'CW', away: 'Elfenbeinküste',         awayflag: '🇨🇮', awayCode: 'CI', group: 'E', tv: null, freeTv: null, score: null },
  { id: 30, openligaId: 80155, date: '2026-06-25', time: '22:00', home: 'Ecuador',               homeflag: '🇪🇨', homeCode: 'EC', away: 'Deutschland',            awayflag: '🇩🇪', awayCode: 'DE', group: 'E', tv: 'ARD', freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE F — Niederlande, Japan, Schweden, Tunesien
  // ═══════════════════════════════════════════════════════════════
  { id: 31, openligaId: 80108, date: '2026-06-14', time: '22:00', home: 'Niederlande',           homeflag: '🇳🇱', homeCode: 'NL', away: 'Japan',                awayflag: '🇯🇵', awayCode: 'JP', group: 'F', tv: 'Magenta', freeTv: false,  score: null },
  { id: 32, openligaId: 80110, date: '2026-06-15', time: '04:00', home: 'Schweden',              homeflag: '🇸🇪', homeCode: 'SE', away: 'Tunesien',               awayflag: '🇹🇳', awayCode: 'TN', group: 'F', tv: 'Magenta', freeTv: false, score: null },
  { id: 33, openligaId: 80133, date: '2026-06-20', time: '19:00', home: 'Niederlande',           homeflag: '🇳🇱', homeCode: 'NL', away: 'Schweden',               awayflag: '🇸🇪', awayCode: 'SE', group: 'F', tv: 'ARD', freeTv: true,  score: null },
  { id: 34, openligaId: 80132, date: '2026-06-20', time: '06:00', home: 'Tunesien',              homeflag: '🇹🇳', homeCode: 'TN', away: 'Japan',                awayflag: '🇯🇵', awayCode: 'JP', group: 'F', tv: null, freeTv: null, score: null },
  { id: 35, openligaId: 80156, date: '2026-06-26', time: '01:00', home: 'Tunesien',              homeflag: '🇹🇳', homeCode: 'TN', away: 'Niederlande',            awayflag: '🇳🇱', awayCode: 'NL', group: 'F', tv: null, freeTv: null, score: null },
  { id: 36, openligaId: 80157, date: '2026-06-26', time: '01:00', home: 'Japan',                homeflag: '🇯🇵', homeCode: 'JP', away: 'Schweden',               awayflag: '🇸🇪', awayCode: 'SE', group: 'F', tv: null, freeTv: null,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE G — Spanien, Kap Verde, Saudi-Arabien, Uruguay
  // ═══════════════════════════════════════════════════════════════
  { id: 37, openligaId: 80111, date: '2026-06-15', time: '18:00', home: 'Spanien',               homeflag: '🇪🇸', homeCode: 'ES', away: 'Kap Verde',              awayflag: '🇨🇻', awayCode: 'CV', group: 'H', tv: 'ZDF', freeTv: true,  score: null },
  { id: 38, openligaId: 80113, date: '2026-06-16', time: '00:00', home: 'Saudi-Arabien',          homeflag: '🇸🇦', homeCode: 'SA', away: 'Uruguay',               awayflag: '🇺🇾', awayCode: 'UY', group: 'H', tv: 'ARD', freeTv: true, score: null },
  { id: 39, openligaId: 80136, date: '2026-06-21', time: '18:00', home: 'Spanien',               homeflag: '🇪🇸', homeCode: 'ES', away: 'Saudi-Arabien',           awayflag: '🇸🇦', awayCode: 'SA', group: 'H', tv: 'ZDF', freeTv: true,  score: null },
  { id: 40, openligaId: 80138, date: '2026-06-22', time: '00:00', home: 'Uruguay',               homeflag: '🇺🇾', homeCode: 'UY', away: 'Kap Verde',              awayflag: '🇨🇻', awayCode: 'CV', group: 'H', tv: null, freeTv: null, score: null },
  { id: 41, openligaId: 80162, date: '2026-06-27', time: '02:00', home: 'Kap Verde',             homeflag: '🇨🇻', homeCode: 'CV', away: 'Saudi-Arabien',           awayflag: '🇸🇦', awayCode: 'SA', group: 'H', tv: null, freeTv: null, score: null },
  { id: 42, openligaId: 80163, date: '2026-06-27', time: '02:00', home: 'Uruguay',               homeflag: '🇺🇾', homeCode: 'UY', away: 'Spanien',               awayflag: '🇪🇸', awayCode: 'ES', group: 'H', tv: 'ZDF', freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE H — Belgien, Ägypten, Iran, Neuseeland
  // ═══════════════════════════════════════════════════════════════
  { id: 43, openligaId: 80112, date: '2026-06-15', time: '21:00', home: 'Belgien',               homeflag: '🇧🇪', homeCode: 'BE', away: 'Ägypten',               awayflag: '🇪🇬', awayCode: 'EG', group: 'G', tv: 'ZDF', freeTv: true,  score: null },
  { id: 44, openligaId: 80114, date: '2026-06-16', time: '03:00', home: 'Iran',                  homeflag: '🇮🇷', homeCode: 'IR', away: 'Neuseeland',             awayflag: '🇳🇿', awayCode: 'NZ', group: 'G', tv: null, freeTv: null, score: null },
  { id: 45, openligaId: 80137, date: '2026-06-21', time: '21:00', home: 'Belgien',               homeflag: '🇧🇪', homeCode: 'BE', away: 'Iran',                  awayflag: '🇮🇷', awayCode: 'IR', group: 'G', tv: null, freeTv: null,  score: null },
  { id: 46, openligaId: 80139, date: '2026-06-22', time: '03:00', home: 'Neuseeland',             homeflag: '🇳🇿', homeCode: 'NZ', away: 'Ägypten',               awayflag: '🇪🇬', awayCode: 'EG', group: 'G', tv: null, freeTv: null, score: null },
  { id: 47, openligaId: 80164, date: '2026-06-27', time: '05:00', home: 'Neuseeland',             homeflag: '🇳🇿', homeCode: 'NZ', away: 'Belgien',               awayflag: '🇧🇪', awayCode: 'BE', group: 'G', tv: null, freeTv: null, score: null },
  { id: 48, openligaId: 80165, date: '2026-06-27', time: '05:00', home: 'Ägypten',               homeflag: '🇪🇬', homeCode: 'EG', away: 'Iran',                  awayflag: '🇮🇷', awayCode: 'IR', group: 'G', tv: null, freeTv: null,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE I — Frankreich, Senegal, Irak, Norwegen
  // ═══════════════════════════════════════════════════════════════
  { id: 49, openligaId: 80116, date: '2026-06-16', time: '21:00', home: 'Frankreich',             homeflag: '🇫🇷', homeCode: 'FR', away: 'Senegal',               awayflag: '🇸🇳', awayCode: 'SN', group: 'I', tv: 'Magenta', freeTv: false,  score: null },
  { id: 50, openligaId: 80117, date: '2026-06-17', time: '00:00', home: 'Irak',                  homeflag: '🇮🇶', homeCode: 'IQ', away: 'Norwegen',               awayflag: '🇳🇴', awayCode: 'NO', group: 'I', tv: 'Magenta', freeTv: false, score: null },
  { id: 51, openligaId: 80141, date: '2026-06-22', time: '23:00', home: 'Frankreich',             homeflag: '🇫🇷', homeCode: 'FR', away: 'Irak',                  awayflag: '🇮🇶', awayCode: 'IQ', group: 'I', tv: 'ARD', freeTv: true,  score: null },
  { id: 52, openligaId: 80142, date: '2026-06-23', time: '02:00', home: 'Norwegen',               homeflag: '🇳🇴', homeCode: 'NO', away: 'Senegal',               awayflag: '🇸🇳', awayCode: 'SN', group: 'I', tv: null, freeTv: null, score: null },
  { id: 53, openligaId: 80160, date: '2026-06-26', time: '21:00', home: 'Norwegen',               homeflag: '🇳🇴', homeCode: 'NO', away: 'Frankreich',             awayflag: '🇫🇷', awayCode: 'FR', group: 'I', tv: 'ARD', freeTv: true,  score: null },
  { id: 54, openligaId: 80161, date: '2026-06-26', time: '21:00', home: 'Senegal',               homeflag: '🇸🇳', homeCode: 'SN', away: 'Irak',                  awayflag: '🇮🇶', awayCode: 'IQ', group: 'I', tv: null, freeTv: null,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE J — Argentinien, Algerien, Österreich, Jordanien
  // ═══════════════════════════════════════════════════════════════
  { id: 55, openligaId: 80118, date: '2026-06-17', time: '03:00', home: 'Argentinien',            homeflag: '🇦🇷', homeCode: 'AR', away: 'Algerien',               awayflag: '🇩🇿', awayCode: 'DZ', group: 'J', tv: 'ZDF', freeTv: true, score: null },
  { id: 56, openligaId: 80115, date: '2026-06-16', time: '06:00', home: 'Österreich',             homeflag: '🇦🇹', homeCode: 'AT', away: 'Jordanien',              awayflag: '🇯🇴', awayCode: 'JO', group: 'J', tv: null, freeTv: null, score: null },
  { id: 57, openligaId: 80140, date: '2026-06-22', time: '19:00', home: 'Argentinien',            homeflag: '🇦🇷', homeCode: 'AR', away: 'Österreich',             awayflag: '🇦🇹', awayCode: 'AT', group: 'J', tv: 'ARD', freeTv: true,  score: null },
  { id: 58, openligaId: 80143, date: '2026-06-23', time: '05:00', home: 'Jordanien',              homeflag: '🇯🇴', homeCode: 'JO', away: 'Algerien',               awayflag: '🇩🇿', awayCode: 'DZ', group: 'J', tv: null, freeTv: null, score: null },
  { id: 59, openligaId: 80170, date: '2026-06-28', time: '04:00', home: 'Algerien',               homeflag: '🇩🇿', homeCode: 'DZ', away: 'Österreich',             awayflag: '🇦🇹', awayCode: 'AT', group: 'J', tv: null, freeTv: null, score: null },
  { id: 60, openligaId: 80171, date: '2026-06-28', time: '04:00', home: 'Jordanien',              homeflag: '🇯🇴', homeCode: 'JO', away: 'Argentinien',            awayflag: '🇦🇷', awayCode: 'AR', group: 'J', tv: 'ZDF', freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE K — Portugal, DR Kongo, Usbekistan, Kolumbien
  // ═══════════════════════════════════════════════════════════════
  { id: 61, openligaId: 80119, date: '2026-06-17', time: '19:00', home: 'Portugal',               homeflag: '🇵🇹', homeCode: 'PT', away: 'DR Kongo',               awayflag: '🇨🇩', awayCode: 'CD', group: 'K', tv: 'ARD', freeTv: true,  score: null },
  { id: 62, openligaId: 80122, date: '2026-06-18', time: '04:00', home: 'Usbekistan',             homeflag: '🇺🇿', homeCode: 'UZ', away: 'Kolumbien',              awayflag: '🇨🇴', awayCode: 'CO', group: 'K', tv: 'Magenta', freeTv: false, score: null },
  { id: 63, openligaId: 80144, date: '2026-06-23', time: '19:00', home: 'Portugal',               homeflag: '🇵🇹', homeCode: 'PT', away: 'Usbekistan',             awayflag: '🇺🇿', awayCode: 'UZ', group: 'K', tv: 'ZDF', freeTv: true,  score: null },
  { id: 64, openligaId: 80147, date: '2026-06-24', time: '04:00', home: 'Kolumbien',              homeflag: '🇨🇴', homeCode: 'CO', away: 'DR Kongo',               awayflag: '🇨🇩', awayCode: 'CD', group: 'K', tv: null, freeTv: null, score: null },
  { id: 65, openligaId: 80168, date: '2026-06-28', time: '01:30', home: 'Kolumbien',              homeflag: '🇨🇴', homeCode: 'CO', away: 'Portugal',               awayflag: '🇵🇹', awayCode: 'PT', group: 'K', tv: 'ARD', freeTv: true, score: null },
  { id: 66, openligaId: 80169, date: '2026-06-28', time: '01:30', home: 'DR Kongo',               homeflag: '🇨🇩', homeCode: 'CD', away: 'Usbekistan',             awayflag: '🇺🇿', awayCode: 'UZ', group: 'K', tv: null, freeTv: null,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // GRUPPE L — England, Kroatien, Ghana, Panama
  // ═══════════════════════════════════════════════════════════════
  { id: 67, openligaId: 80120, date: '2026-06-17', time: '22:00', home: 'England',               homeflag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeCode: 'GB', away: 'Kroatien',               awayflag: '🇭🇷', awayCode: 'HR', group: 'L', tv: 'ZDF', freeTv: true,  score: null },
  { id: 68, openligaId: 80121, date: '2026-06-18', time: '01:00', home: 'Ghana',                 homeflag: '🇬🇭', homeCode: 'GH', away: 'Panama',                awayflag: '🇵🇦', awayCode: 'PA', group: 'L', tv: 'Magenta', freeTv: false, score: null },
  { id: 69, openligaId: 80145, date: '2026-06-23', time: '22:00', home: 'England',               homeflag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeCode: 'GB', away: 'Ghana',                awayflag: '🇬🇭', awayCode: 'GH', group: 'L', tv: 'ARD', freeTv: true,  score: null },
  { id: 70, openligaId: 80146, date: '2026-06-24', time: '01:00', home: 'Panama',                homeflag: '🇵🇦', homeCode: 'PA', away: 'Kroatien',               awayflag: '🇭🇷', awayCode: 'HR', group: 'L', tv: null, freeTv: null, score: null },
  { id: 71, openligaId: 80166, date: '2026-06-27', time: '23:00', home: 'Panama',                homeflag: '🇵🇦', homeCode: 'PA', away: 'England',               awayflag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayCode: 'GB', group: 'L', tv: 'ZDF', freeTv: true, score: null },
  { id: 72, openligaId: 80167, date: '2026-06-27', time: '23:00', home: 'Kroatien',              homeflag: '🇭🇷', homeCode: 'HR', away: 'Ghana',                awayflag: '🇬🇭', awayCode: 'GH', group: 'L', tv: 'ZDF', freeTv: true,  score: null },

  // ═══════════════════════════════════════════════════════════════
  // K.O.-RUNDE
  // Bracket-Logik: je 2 SZF-Sieger → 1 AF, je 2 AF → 1 VF usw.
  //
  // LINKE HÄLFTE:  SZF 1-8  (ids 73-80) → AF 1-4 (89-92) → VF 1-2 (97-98) → HF1 (101)
  // RECHTE HÄLFTE: SZF 9-16 (ids 81-88) → AF 5-8 (93-96) → VF 3-4 (99-100) → HF2 (102)
  // FINALE: id 104  |  PLATZ 3: id 103
  //
  // SZF-Paarungen laut FIFA (Poster):
  // SZF1(73): 2.A vs 2.B        SZF9(81):  1.D vs 3rd
  // SZF2(74): 1.E vs 3rd        SZF10(82): 1.G vs 3rd
  // SZF3(75): 1.F vs 2.C        SZF11(83): 2.K vs 2.L
  // SZF4(76): 1.C vs 2.F        SZF12(84): 1.H vs 2.J
  // SZF5(77): 1.I vs 3rd        SZF13(85): 1.B vs 3rd
  // SZF6(78): 2.E vs 2.I        SZF14(86): 1.J vs 2.H
  // SZF7(79): 1.A vs 3rd        SZF15(87): 1.K vs 3rd
  // SZF8(80): 1.L vs 3rd        SZF16(88): 2.D vs 2.G

  // Sechzehntelfinale (SZF 1-16)
  { id: 73,  szf: 1,  date: '2026-06-28', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 74,  szf: 2,  date: '2026-06-29', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 75,  szf: 3,  date: '2026-06-29', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 76,  szf: 4,  date: '2026-06-30', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 77,  szf: 5,  date: '2026-06-30', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 78,  szf: 6,  date: '2026-07-01', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 79,  szf: 7,  date: '2026-07-01', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 80,  szf: 8,  date: '2026-07-02', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 81,  szf: 9,  date: '2026-07-02', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 82,  szf: 10, date: '2026-07-03', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 83,  szf: 11, date: '2026-07-03', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 84,  szf: 12, date: '2026-07-04', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 85,  szf: 13, date: '2026-07-04', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 86,  szf: 14, date: '2026-07-05', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 87,  szf: 15, date: '2026-07-05', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },
  { id: 88,  szf: 16, date: '2026-07-06', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R32', tv: null, freeTv: null, score: null },

  // Achtelfinale (AF 1-8) — AF(n) = Sieger SZF(2n-1) vs Sieger SZF(2n)
  { id: 89,  af: 1, date: '2026-07-07', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R16', tv: null, freeTv: null, score: null },
  { id: 90,  af: 2, date: '2026-07-08', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R16', tv: null, freeTv: null, score: null },
  { id: 91,  af: 3, date: '2026-07-08', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R16', tv: null, freeTv: null, score: null },
  { id: 92,  af: 4, date: '2026-07-09', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R16', tv: null, freeTv: null, score: null },
  { id: 93,  af: 5, date: '2026-07-09', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R16', tv: null, freeTv: null, score: null },
  { id: 94,  af: 6, date: '2026-07-10', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R16', tv: null, freeTv: null, score: null },
  { id: 95,  af: 7, date: '2026-07-10', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R16', tv: null, freeTv: null, score: null },
  { id: 96,  af: 8, date: '2026-07-11', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'R16', tv: null, freeTv: null, score: null },

  // Viertelfinale (VF 1-4) — VF(n) = Sieger AF(2n-1) vs Sieger AF(2n)
  { id: 97,  vf: 1, date: '2026-07-11', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'QF', tv: null, freeTv: null, score: null },
  { id: 98,  vf: 2, date: '2026-07-12', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'QF', tv: null, freeTv: null, score: null },
  { id: 99,  vf: 3, date: '2026-07-12', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'QF', tv: null, freeTv: null, score: null },
  { id: 100, vf: 4, date: '2026-07-13', time: '00:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'QF', tv: null, freeTv: null, score: null },

  // Halbfinale — HF1 = Sieger VF1 vs VF2 | HF2 = Sieger VF3 vs VF4
  { id: 101, hf: 1, date: '2026-07-14', time: '02:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'SF', tv: 'ARD', freeTv: true,  score: null },
  { id: 102, hf: 2, date: '2026-07-15', time: '02:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'SF', tv: 'ZDF', freeTv: true,  score: null },

  // Spiel um Platz 3
  { id: 103,        date: '2026-07-18', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'P3', tv: 'ZDF', freeTv: true,  score: null },

  // Finale — Sieger HF1 vs Sieger HF2
  { id: 104,        date: '2026-07-19', time: '21:00', home: 'TBD', homeflag: '🏳️', homeCode: null, away: 'TBD', awayflag: '🏳️', awayCode: null, group: null, round: 'F',  tv: 'ZDF', freeTv: true,  score: null },
];
