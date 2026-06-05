// js/i18n.js

export const i18n = {

  // ═══════════════════════════════════════════════════════════════
  // DEUTSCH
  // ═══════════════════════════════════════════════════════════════
  de: {
    // Navigation
    schedule:           'Spielplan',
    groups:             'Gruppen',
    bracket:            'Bracket',
    favorite:           'Favorit',

    // Filter
    filter_all:         'Alle',
    filter_today:       'Heute',
    filter_freetv:      'Free-TV',

    // Favoriten-Tab
    next_match:         '⚡ Nächstes Spiel',
    kickoff_in:         'Anpfiff in',
    all_group_matches:  'Alle Gruppenspiele',
    tv_rights:          'TV-Rechte',
    no_next_match:      'Keine weiteren Spiele',

    // Gruppen-Tab
    group:              'Gruppe',
    pos:                'Pos',
    played:             'Sp',
    won:                'S',
    drawn:              'U',
    lost:               'N',
    goals:              'Tore',
    points:             'Pkt',

    // Bracket
    round_of_32:        'Achtelfinale',
    round_of_16:        'Runde der 16',
    quarter_final:      'Viertelfinale',
    semi_final:         'Halbfinale',
    third_place:        'Platz 3',
    final:              'Finale',
    champion:           '🏆 Weltmeister',

    // Status
    no_matches:         'Keine Spiele gefunden',
    running:            'Läuft!',
    finished:           'Beendet',
    tbd:                'TBD',

    // Countdown
    days:               'T',

    // TV
    free_tv:            '📺 Free-TV',
    pay_tv:             '💳 Pay-TV',
    tv_unknown:         '❓ Unbekannt',

    // Einstellungen
    settings_title:     'Einstellungen',
    settings_country:   'Mein Land / Favorit',
    settings_language:  'Sprache',
    settings_apply:     'Übernehmen',
    settings_hint:      'Home Assistant: URL-Parameter ?country=DE&lang=de möglich',

    // Datum & Zeit (locale für toLocaleDateString / toLocaleTimeString)
    date_locale:        'de-DE',
    clock_locale:       'de-DE',

    // Wochentage kurz (für Spielplan-Trennzeilen)
    weekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],

    // Monate kurz
    months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun',
             'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],

    // Rundenbezeichnungen kurz (für Bracket-Header)
    rounds: {
      R32: 'AF',
      R16: '1/16',
      QF:  'VF',
      SF:  'HF',
      P3:  'Pl. 3',
      F:   'Finale',
    },
    
	teams: {
      // Europa
      DE:'Deutschland', AT:'Österreich', CH:'Schweiz', FR:'Frankreich',
      ES:'Spanien', GB:'England', NL:'Niederlande', PT:'Portugal',
      BE:'Belgien', HR:'Kroatien', RS:'Serbien', RO:'Rumänien',
      UA:'Ukraine', SK:'Slowakei', SI:'Slowenien', AL:'Albanien',
      GE:'Georgien', IT:'Italien', PL:'Polen', SE:'Schweden', TR:'Türkei',
      // Americas
      US:'USA', BR:'Brasilien', AR:'Argentinien', MX:'Mexiko', CA:'Kanada',
      CO:'Kolumbien', UY:'Uruguay', EC:'Ecuador', VE:'Venezuela', PE:'Peru',
      PY:'Paraguay', BO:'Bolivien', CW:'Curaçao', PA:'Panama', HN:'Honduras',
      CR:'Costa Rica', JM:'Jamaika',
      // Afrika
      MA:'Marokko', SN:'Senegal', EG:'Ägypten', NG:'Nigeria', CM:'Kamerun',
      CI:'Elfenbeinküste', ZA:'Südafrika', TN:'Tunesien', GH:'Ghana',
      TZ:'Tansania', AO:'Angola', BF:'Burkina Faso', CF:'Zentralafrika', MZ:'Mosambik',
      // Asien & Ozeanien
      JP:'Japan', KR:'Südkorea', SA:'Saudi-Arabien', IR:'Iran', AU:'Australien',
      NZ:'Neuseeland', UZ:'Usbekistan', QA:'Katar', CN:'China', TH:'Thailand', IQ:'Irak',
      BA:'Bósnia e Herzegovina', CZ:'República Checa', HT:'Haiti', SC:'Escócia', CV:'Cabo Verde', CD:'RD Congo', DZ:'Argélia', JO:'Jordânia', NO:'Noruega', AT:'Áustria', TR:'Turquia', UY:'Uruguai', SA:'Arábia Saudita', QA:'Qatar', CH:'Suíça',
      BA:'Bosnië-Herzegovina', CZ:'Tsjechië', HT:'Haïti', SC:'Schotland', CV:'Kaapverdië', CD:'DR Congo', DZ:'Algerije', JO:'Jordanië', NO:'Noorwegen', AT:'Oostenrijk', TR:'Turkije', UY:'Uruguay', SA:'Saudi-Arabië', QA:'Qatar', CH:'Zwitserland',
      BA:'Bosnia y Herzegovina', CZ:'República Checa', HT:'Haití', SC:'Escocia', CV:'Cabo Verde', CD:'RD Congo', DZ:'Argelia', JO:'Jordania', NO:'Noruega', AT:'Austria', TR:'Turquía', UY:'Uruguay', SA:'Arabia Saudita', QA:'Catar', CH:'Suiza',
      BA:'Bosnie-Herzégovine', CZ:'République Tchèque', HT:'Haïti', SC:'Écosse', CV:'Cap-Vert', CD:'RD Congo', DZ:'Algérie', JO:'Jordanie', NO:'Norvège', AT:'Autriche', TR:'Turquie', UY:'Uruguay', SA:'Arabie Saoudite', QA:'Qatar', CH:'Suisse',
      BA:'Bosnia & Herzegovina', CZ:'Czech Republic', HT:'Haiti', SC:'Scotland', CV:'Cape Verde', CD:'DR Congo', DZ:'Algeria', JO:'Jordan', NO:'Norway', AT:'Austria', TR:'Turkey', UY:'Uruguay', SA:'Saudi Arabia', QA:'Qatar', CH:'Switzerland',
      BA:'Bosnien', CZ:'Tschechien', HT:'Haiti', SC:'Schottland', CV:'Kap Verde', CD:'DR Kongo', DZ:'Algerien', JO:'Jordanien', NO:'Norwegen', AT:'Österreich', TR:'Türkei', UY:'Uruguay', SA:'Saudi-Arabien', QA:'Katar', CH:'Schweiz',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ENGLISH
  // ═══════════════════════════════════════════════════════════════
  en: {
    schedule:           'Schedule',
    groups:             'Groups',
    bracket:            'Bracket',
    favorite:           'Favourite',

    filter_all:         'All',
    filter_today:       'Today',
    filter_freetv:      'Free TV',

    next_match:         '⚡ Next Match',
    kickoff_in:         'Kick-off in',
    all_group_matches:  'All Group Matches',
    tv_rights:          'TV Rights',
    no_next_match:      'No more matches',

    group:              'Group',
    pos:                'Pos',
    played:             'P',
    won:                'W',
    drawn:              'D',
    lost:               'L',
    goals:              'Goals',
    points:             'Pts',

    round_of_32:        'Round of 32',
    round_of_16:        'Round of 16',
    quarter_final:      'Quarter-final',
    semi_final:         'Semi-final',
    third_place:        '3rd Place',
    final:              'Final',
    champion:           '🏆 World Champion',

    no_matches:         'No matches found',
    running:            'Live!',
    finished:           'Finished',
    tbd:                'TBD',

    days:               'd',

    free_tv:            '📺 Free TV',
    pay_tv:             '💳 Pay TV',
    tv_unknown:         '❓ Unknown',

    settings_title:     'Settings',
    settings_country:   'My Country / Favourite',
    settings_language:  'Language',
    settings_apply:     'Apply',
    settings_hint:      'Home Assistant: URL parameter ?country=GB&lang=en supported',

    date_locale:        'en-GB',
    clock_locale:       'en-GB',

    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months:   ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
               'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    rounds: {
      R32: 'R32',
      R16: 'R16',
      QF:  'QF',
      SF:  'SF',
      P3:  '3rd',
      F:   'Final',
    },
	
	teams: {
      DE:'Germany', AT:'Austria', CH:'Switzerland', FR:'France',
      ES:'Spain', GB:'England', NL:'Netherlands', PT:'Portugal',
      BE:'Belgium', HR:'Croatia', RS:'Serbia', RO:'Romania',
      UA:'Ukraine', SK:'Slovakia', SI:'Slovenia', AL:'Albania',
      GE:'Georgia', IT:'Italy', PL:'Poland', SE:'Sweden', TR:'Turkey',
      US:'USA', BR:'Brazil', AR:'Argentina', MX:'Mexico', CA:'Canada',
      CO:'Colombia', UY:'Uruguay', EC:'Ecuador', VE:'Venezuela', PE:'Peru',
      PY:'Paraguay', BO:'Bolivia', CW:'Curaçao', PA:'Panama', HN:'Honduras',
      CR:'Costa Rica', JM:'Jamaica',
	  MA:'Morocco', SN:'Senegal', EG:'Egypt', NG:'Nigeria', CM:'Cameroon',
	  CI:'Ivory Coast', ZA:'South Africa', TN:'Tunisia', GH:'Ghana',
	  TZ:'Tanzania', AO:'Angola', BF:'Burkina Faso', CF:'Central Africa', MZ:'Mozambique',
	  JP:'Japan', KR:'South Korea', SA:'Saudi Arabia', IR:'Iran', AU:'Australia',
	  NZ:'New Zealand', UZ:'Uzbekistan', QA:'Qatar', CN:'China', TH:'Thailand', IQ:'Iraq',
	},
  },

  // ═══════════════════════════════════════════════════════════════
  // FRANÇAIS
  // ═══════════════════════════════════════════════════════════════
  fr: {
    schedule:           'Calendrier',
    groups:             'Groupes',
    bracket:            'Tableau',
    favorite:           'Favori',

    filter_all:         'Tous',
    filter_today:       "Aujourd'hui",
    filter_freetv:      'TV Gratuite',

    next_match:         '⚡ Prochain Match',
    kickoff_in:         "Coup d'envoi dans",
    all_group_matches:  'Tous les matchs de groupe',
    tv_rights:          'Droits TV',
    no_next_match:      'Plus de matchs',

    group:              'Groupe',
    pos:                'Pos',
    played:             'J',
    won:                'V',
    drawn:              'N',
    lost:               'D',
    goals:              'Buts',
    points:             'Pts',

    round_of_32:        '8e de finale',
    round_of_16:        '16e de finale',
    quarter_final:      'Quart de finale',
    semi_final:         'Demi-finale',
    third_place:        '3e place',
    final:              'Finale',
    champion:           '🏆 Champion du Monde',

    no_matches:         'Aucun match trouvé',
    running:            'En cours!',
    finished:           'Terminé',
    tbd:                'TBD',

    days:               'j',

    free_tv:            '📺 TV Gratuite',
    pay_tv:             '💳 TV Payante',
    tv_unknown:         '❓ Inconnu',

    settings_title:     'Paramètres',
    settings_country:   'Mon pays / Favori',
    settings_language:  'Langue',
    settings_apply:     'Appliquer',
    settings_hint:      'Home Assistant: paramètre URL ?country=FR&lang=fr supporté',

    date_locale:        'fr-FR',
    clock_locale:       'fr-FR',

    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    months:   ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun',
               'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],

    rounds: {
      R32: '8F',
      R16: '16F',
      QF:  'QF',
      SF:  'SF',
      P3:  '3e',
      F:   'Finale',
    },
	
	teams: {
      DE:'Allemagne', AT:'Autriche', CH:'Suisse', FR:'France',
      ES:'Espagne', GB:'Angleterre', NL:'Pays-Bas', PT:'Portugal',
      BE:'Belgique', HR:'Croatie', RS:'Serbie', RO:'Roumanie',
      UA:'Ukraine', SK:'Slovaquie', SI:'Slovénie', AL:'Albanie',
      GE:'Géorgie', IT:'Italie', PL:'Pologne', SE:'Suède', TR:'Turquie',
      US:'États-Unis', BR:'Brésil', AR:'Argentine', MX:'Mexique', CA:'Canada',
      CO:'Colombie', UY:'Uruguay', EC:'Équateur', VE:'Venezuela', PE:'Pérou',
      PY:'Paraguay', BO:'Bolivie', CW:'Curaçao', PA:'Panama', HN:'Honduras',
      CR:'Costa Rica', JM:'Jamaïque',
      MA:'Maroc', SN:'Sénégal', EG:'Égypte', NG:'Nigéria', CM:'Cameroun',
      CI:"Côte d'Ivoire", ZA:'Afrique du Sud', TN:'Tunisie', GH:'Ghana',
      TZ:'Tanzanie', AO:'Angola', BF:'Burkina Faso', CF:'Centrafrique', MZ:'Mozambique',
      JP:'Japon', KR:'Corée du Sud', SA:'Arabie Saoudite', IR:'Iran', AU:'Australie',
      NZ:'Nouvelle-Zélande', UZ:'Ouzbékistan', QA:'Qatar', CN:'Chine', TH:'Thaïlande', IQ:'Irak',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ESPAÑOL
  // ═══════════════════════════════════════════════════════════════
  es: {
    schedule:           'Calendario',
    groups:             'Grupos',
    bracket:            'Cuadro',
    favorite:           'Favorito',

    filter_all:         'Todos',
    filter_today:       'Hoy',
    filter_freetv:      'TV Gratis',

    next_match:         '⚡ Próximo Partido',
    kickoff_in:         'Inicio en',
    all_group_matches:  'Todos los partidos de grupo',
    tv_rights:          'Derechos TV',
    no_next_match:      'No hay más partidos',

    group:              'Grupo',
    pos:                'Pos',
    played:             'PJ',
    won:                'G',
    drawn:              'E',
    lost:               'P',
    goals:              'Goles',
    points:             'Pts',

    round_of_32:        'Octavos de final',
    round_of_16:        'Dieciseisavos',
    quarter_final:      'Cuartos de final',
    semi_final:         'Semifinal',
    third_place:        '3er puesto',
    final:              'Final',
    champion:           '🏆 Campeón del Mundo',

    no_matches:         'No se encontraron partidos',
    running:            '¡En juego!',
    finished:           'Finalizado',
    tbd:                'TBD',

    days:               'd',

    free_tv:            '📺 TV Gratis',
    pay_tv:             '💳 TV Pago',
    tv_unknown:         '❓ Desconocido',

    settings_title:     'Configuración',
    settings_country:   'Mi país / Favorito',
    settings_language:  'Idioma',
    settings_apply:     'Aplicar',
    settings_hint:      'Home Assistant: parámetro URL ?country=ES&lang=es soportado',

    date_locale:        'es-ES',
    clock_locale:       'es-ES',

    weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    months:   ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
               'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],

    rounds: {
      R32: 'Oct',
      R16: '1/16',
      QF:  'Cuar',
      SF:  'Semi',
      P3:  '3er',
      F:   'Final',
    },
	
	teams: {
      DE:'Alemania', AT:'Austria', CH:'Suiza', FR:'Francia',
      ES:'España', GB:'Inglaterra', NL:'Países Bajos', PT:'Portugal',
      BE:'Bélgica', HR:'Croacia', RS:'Serbia', RO:'Rumanía',
      UA:'Ucrania', SK:'Eslovaquia', SI:'Eslovenia', AL:'Albania',
      GE:'Georgia', IT:'Italia', PL:'Polonia', SE:'Suecia', TR:'Turquía',
      US:'EE.UU.', BR:'Brasil', AR:'Argentina', MX:'México', CA:'Canadá',
      CO:'Colombia', UY:'Uruguay', EC:'Ecuador', VE:'Venezuela', PE:'Perú',
      PY:'Paraguay', BO:'Bolivia', CW:'Curaçao', PA:'Panamá', HN:'Honduras',
      CR:'Costa Rica', JM:'Jamaica',
      MA:'Marruecos', SN:'Senegal', EG:'Egipto', NG:'Nigeria', CM:'Camerún',
      CI:'Costa de Marfil', ZA:'Sudáfrica', TN:'Túnez', GH:'Ghana',
      TZ:'Tanzania', AO:'Angola', BF:'Burkina Faso', CF:'República Centroafricana', MZ:'Mozambique',
      JP:'Japón', KR:'Corea del Sur', SA:'Arabia Saudita', IR:'Irán', AU:'Australia',
      NZ:'Nueva Zelanda', UZ:'Uzbekistán', QA:'Catar', CN:'China', TH:'Tailandia', IQ:'Irak',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // NEDERLANDS
  // ═══════════════════════════════════════════════════════════════
  nl: {
    schedule:           'Speelschema',
    groups:             'Groepen',
    bracket:            'Bracket',
    favorite:           'Favoriet',

    filter_all:         'Alle',
    filter_today:       'Vandaag',
    filter_freetv:      'Gratis TV',

    next_match:         '⚡ Volgende Wedstrijd',
    kickoff_in:         'Aftrap over',
    all_group_matches:  'Alle groepswedstrijden',
    tv_rights:          'TV-rechten',
    no_next_match:      'Geen wedstrijden meer',

    group:              'Groep',
    pos:                'Pos',
    played:             'G',
    won:                'W',
    drawn:              'G',
    lost:               'V',
    goals:              'Doel.',
    points:             'Pnt',

    round_of_32:        'Achtste finale',
    round_of_16:        'Zestiende finale',
    quarter_final:      'Kwartfinale',
    semi_final:         'Halve finale',
    third_place:        '3e plaats',
    final:              'Finale',
    champion:           '🏆 Wereldkampioen',

    no_matches:         'Geen wedstrijden gevonden',
    running:            'Bezig!',
    finished:           'Afgelopen',
    tbd:                'TBD',

    days:               'd',

    free_tv:            '📺 Gratis TV',
    pay_tv:             '💳 Betaal TV',
    tv_unknown:         '❓ Onbekend',

    settings_title:     'Instellingen',
    settings_country:   'Mijn land / Favoriet',
    settings_language:  'Taal',
    settings_apply:     'Toepassen',
    settings_hint:      'Home Assistant: URL-parameter ?country=NL&lang=nl mogelijk',

    date_locale:        'nl-NL',
    clock_locale:       'nl-NL',

    weekdays: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
    months:   ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun',
               'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],

    rounds: {
      R32: 'AF',
      R16: 'R16',
      QF:  'KF',
      SF:  'HF',
      P3:  '3e',
      F:   'Finale',
    },
	
	teams: {
      DE:'Duitsland', AT:'Oostenrijk', CH:'Zwitserland', FR:'Frankrijk',
      ES:'Spanje', GB:'Engeland', NL:'Nederland', PT:'Portugal',
      BE:'België', HR:'Kroatië', RS:'Servië', RO:'Roemenië',
      UA:'Oekraïne', SK:'Slowakije', SI:'Slovenië', AL:'Albanië',
      GE:'Georgië', IT:'Italië', PL:'Polen', SE:'Zweden', TR:'Turkije',
      US:'VS', BR:'Brazilië', AR:'Argentinië', MX:'Mexico', CA:'Canada',
      CO:'Colombia', UY:'Uruguay', EC:'Ecuador', VE:'Venezuela', PE:'Peru',
      PY:'Paraguay', BO:'Bolivia', CW:'Curaçao', PA:'Panama', HN:'Honduras',
      CR:'Costa Rica', JM:'Jamaica',
      MA:'Marokko', SN:'Senegal', EG:'Egypte', NG:'Nigeria', CM:'Kameroen',
      CI:'Ivoorkust', ZA:'Zuid-Afrika', TN:'Tunesië', GH:'Ghana',
      TZ:'Tanzania', AO:'Angola', BF:'Burkina Faso', CF:'Centraal-Afrika', MZ:'Mozambique',
      JP:'Japan', KR:'Zuid-Korea', SA:'Saudi-Arabië', IR:'Iran', AU:'Australië',
      NZ:'Nieuw-Zeeland', UZ:'Oezbekistan', QA:'Qatar', CN:'China', TH:'Thailand', IQ:'Irak',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // PORTUGUÊS
  // ═══════════════════════════════════════════════════════════════
  pt: {
    schedule:           'Calendário',
    groups:             'Grupos',
    bracket:            'Chaveamento',
    favorite:           'Favorito',

    filter_all:         'Todos',
    filter_today:       'Hoje',
    filter_freetv:      'TV Gratuita',

    next_match:         '⚡ Próximo Jogo',
    kickoff_in:         'Início em',
    all_group_matches:  'Todos os jogos do grupo',
    tv_rights:          'Direitos TV',
    no_next_match:      'Sem mais jogos',

    group:              'Grupo',
    pos:                'Pos',
    played:             'J',
    won:                'V',
    drawn:              'E',
    lost:               'D',
    goals:              'Golos',
    points:             'Pts',

    round_of_32:        'Oitavas de final',
    round_of_16:        'Décimos-sextos',
    quarter_final:      'Quartas de final',
    semi_final:         'Meia-final',
    third_place:        '3º lugar',
    final:              'Final',
    champion:           '🏆 Campeão do Mundo',

    no_matches:         'Nenhum jogo encontrado',
    running:            'Em jogo!',
    finished:           'Terminado',
    tbd:                'TBD',

    days:               'd',

    free_tv:            '📺 TV Gratuita',
    pay_tv:             '💳 TV Paga',
    tv_unknown:         '❓ Desconhecido',

    settings_title:     'Configurações',
    settings_country:   'Meu país / Favorito',
    settings_language:  'Idioma',
    settings_apply:     'Aplicar',
    settings_hint:      'Home Assistant: parâmetro URL ?country=PT&lang=pt suportado',

    date_locale:        'pt-PT',
    clock_locale:       'pt-PT',

    weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    months:   ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
               'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],

    rounds: {
      R32: 'Oit',
      R16: 'Dec',
      QF:  'QF',
      SF:  'MF',
      P3:  '3º',
      F:   'Final',
    },
	
	teams: {
      DE:'Alemanha', AT:'Áustria', CH:'Suíça', FR:'França',
      ES:'Espanha', GB:'Inglaterra', NL:'Países Baixos', PT:'Portugal',
      BE:'Bélgica', HR:'Croácia', RS:'Sérvia', RO:'Roménia',
      UA:'Ucrânia', SK:'Eslováquia', SI:'Eslovénia', AL:'Albânia',
      GE:'Geórgia', IT:'Itália', PL:'Polónia', SE:'Suécia', TR:'Turquia',
      US:'EUA', BR:'Brasil', AR:'Argentina', MX:'México', CA:'Canadá',
      CO:'Colômbia', UY:'Uruguai', EC:'Equador', VE:'Venezuela', PE:'Peru',
      PY:'Paraguai', BO:'Bolívia', CW:'Curaçao', PA:'Panamá', HN:'Honduras',
      CR:'Costa Rica', JM:'Jamaica',
      MA:'Marrocos', SN:'Senegal', EG:'Egito', NG:'Nigéria', CM:'Camarões',
      CI:'Costa do Marfim', ZA:'África do Sul', TN:'Tunísia', GH:'Gana',
      TZ:'Tanzânia', AO:'Angola', BF:'Burkina Faso', CF:'República Centro-Africana', MZ:'Moçambique',
      JP:'Japão', KR:'Coreia do Sul', SA:'Arábia Saudita', IR:'Irão', AU:'Austrália',
      NZ:'Nova Zelândia', UZ:'Uzbequistão', QA:'Catar', CN:'China', TH:'Tailândia', IQ:'Iraque',
    },
  },
};

// ─── Hilfsfunktion ───────────────────────────────────────────────────────────
// Gibt einen übersetzten String zurück.
// Fällt auf Deutsch zurück wenn Sprache oder Key nicht gefunden.

export function t(lang, key) {
  return (i18n[lang] ?? i18n.de)[key] ?? i18n.de[key] ?? key;
}

// Datum formatieren ohne toLocaleDateString (funktioniert überall gleich)
export function formatDate(dateStr, lang) {
  const d = new Date(`${dateStr}T00:00:00`);
  const L = i18n[lang] ?? i18n.de;
  return `${L.weekdays[d.getDay()]}, ${d.getDate()}. ${L.months[d.getMonth()]}`;
}