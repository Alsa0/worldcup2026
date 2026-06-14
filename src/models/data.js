const FLAG_CODES = {
  MEX: 'mx', RSA: 'za', CAN: 'ca', KOR: 'kr', QAT: 'qa', SUI: 'ch',
  BRA: 'br', MAR: 'ma', HAI: 'ht', SCO: 'gb-sct', USA: 'us', PAR: 'py',
  AUS: 'au', GER: 'de', CUW: 'cw', CIV: 'ci', ECU: 'ec', NED: 'nl',
  JPN: 'jp', TUN: 'tn', BEL: 'be', EGY: 'eg', ESP: 'es', CPV: 'cv',
  IRN: 'ir', NZL: 'nz', KSA: 'sa', URU: 'uy', FRA: 'fr', SEN: 'sn',
  NOR: 'no', ARG: 'ar', ALG: 'dz', AUT: 'at', JOR: 'jo', POR: 'pt',
  UZB: 'uz', COL: 'co', ENG: 'gb-eng', CRO: 'hr', GHA: 'gh', PAN: 'pa',
  TCH: 'cz', BIH: 'ba', TUR: 'tr', SUE: 'se', IRQ: 'iq', RDC: 'cd',
};

const TEAM_NAMES = {
  MEX: 'Mexique', RSA: 'Afrique du Sud', CAN: 'Canada', KOR: 'Corée du Sud',
  QAT: 'Qatar', SUI: 'Suisse', BRA: 'Brésil', MAR: 'Maroc', HAI: 'Haïti',
  SCO: 'Écosse', USA: 'États-Unis', PAR: 'Paraguay', AUS: 'Australie',
  GER: 'Allemagne', CUW: 'Curaçao', CIV: "Côte d'Ivoire", ECU: 'Équateur',
  NED: 'Pays-Bas', JPN: 'Japon', TUN: 'Tunisie', BEL: 'Belgique',
  EGY: 'Égypte', ESP: 'Espagne', CPV: 'Cap-Vert', IRN: 'Iran', NZL: 'Nouvelle-Zélande',
  KSA: 'Arabie Saoudite', URU: 'Uruguay', FRA: 'France', SEN: 'Sénégal',
  NOR: 'Norvège', ARG: 'Argentine', ALG: 'Algérie', AUT: 'Autriche',
  JOR: 'Jordanie', POR: 'Portugal', UZB: 'Ouzbékistan', COL: 'Colombie',
  ENG: 'Angleterre', CRO: 'Croatie', GHA: 'Ghana', PAN: 'Panama',
  TCH: 'Tchéquie', BIH: 'Bosnie-Herzégovine', TUR: 'Turquie',
  SUE: 'Suède', IRQ: 'Irak', RDC: 'RD Congo',
};

const GROUPS = {
  A: {
    teams: ['MEX', 'RSA', 'KOR', 'TCH'],
    matches: [
      { d: '11/06', t1: 'MEX', t2: 'RSA' },
      { d: '12/06', t1: 'KOR', t2: 'TCH' },
      { d: '18/06', t1: 'TCH', t2: 'RSA' },
      { d: '19/06', t1: 'MEX', t2: 'KOR' },
      { d: '25/06', t1: 'TCH', t2: 'MEX' },
      { d: '25/06', t1: 'RSA', t2: 'KOR' },
    ]
  },
  B: {
    teams: ['CAN', 'BIH', 'QAT', 'SUI'],
    matches: [
      { d: '12/06', t1: 'CAN', t2: 'BIH' },
      { d: '13/06', t1: 'QAT', t2: 'SUI' },
      { d: '18/06', t1: 'SUI', t2: 'BIH' },
      { d: '18/06', t1: 'CAN', t2: 'QAT' },
      { d: '24/06', t1: 'SUI', t2: 'CAN' },
      { d: '24/06', t1: 'BIH', t2: 'QAT' },
    ]
  },
  C: {
    teams: ['BRA', 'MAR', 'HAI', 'SCO'],
    matches: [
      { d: '13/06', t1: 'BRA', t2: 'MAR' },
      { d: '14/06', t1: 'HAI', t2: 'SCO' },
      { d: '19/06', t1: 'SCO', t2: 'MAR' },
      { d: '20/06', t1: 'BRA', t2: 'HAI' },
      { d: '24/06', t1: 'SCO', t2: 'BRA' },
      { d: '24/06', t1: 'MAR', t2: 'HAI' },
    ]
  },
  D: {
    teams: ['USA', 'PAR', 'AUS', 'TUR'],
    matches: [
      { d: '13/06', t1: 'USA', t2: 'PAR' },
      { d: '14/06', t1: 'AUS', t2: 'TUR' },
      { d: '19/06', t1: 'USA', t2: 'AUS' },
      { d: '20/06', t1: 'TUR', t2: 'PAR' },
      { d: '26/06', t1: 'TUR', t2: 'USA' },
      { d: '26/06', t1: 'PAR', t2: 'AUS' },
    ]
  },
  E: {
    teams: ['GER', 'CUW', 'CIV', 'ECU'],
    matches: [
      { d: '14/06', t1: 'GER', t2: 'CUW' },
      { d: '15/06', t1: 'CIV', t2: 'ECU' },
      { d: '20/06', t1: 'GER', t2: 'CIV' },
      { d: '21/06', t1: 'ECU', t2: 'CUW' },
      { d: '25/06', t1: 'ECU', t2: 'GER' },
      { d: '25/06', t1: 'CUW', t2: 'CIV' },
    ]
  },
  F: {
    teams: ['NED', 'JPN', 'SUE', 'TUN'],
    matches: [
      { d: '14/06', t1: 'NED', t2: 'JPN' },
      { d: '15/06', t1: 'SUE', t2: 'TUN' },
      { d: '20/06', t1: 'NED', t2: 'SUE' },
      { d: '21/06', t1: 'TUN', t2: 'JPN' },
      { d: '26/06', t1: 'JPN', t2: 'SUE' },
      { d: '26/06', t1: 'TUN', t2: 'NED' },
    ]
  },
  G: {
    teams: ['BEL', 'EGY', 'IRN', 'NZL'],
    matches: [
      { d: '15/06', t1: 'BEL', t2: 'EGY' },
      { d: '16/06', t1: 'IRN', t2: 'NZL' },
      { d: '21/06', t1: 'BEL', t2: 'IRN' },
      { d: '22/06', t1: 'NZL', t2: 'EGY' },
      { d: '27/06', t1: 'EGY', t2: 'IRN' },
      { d: '27/06', t1: 'NZL', t2: 'BEL' },
    ]
  },
  H: {
    teams: ['ESP', 'CPV', 'KSA', 'URU'],
    matches: [
      { d: '15/06', t1: 'ESP', t2: 'CPV' },
      { d: '16/06', t1: 'KSA', t2: 'URU' },
      { d: '21/06', t1: 'ESP', t2: 'KSA' },
      { d: '22/06', t1: 'URU', t2: 'CPV' },
      { d: '27/06', t1: 'CPV', t2: 'KSA' },
      { d: '27/06', t1: 'URU', t2: 'ESP' },
    ]
  },
  I: {
    teams: ['FRA', 'SEN', 'NOR', 'IRQ'],
    matches: [
      { d: '16/06', t1: 'FRA', t2: 'SEN' },
      { d: '17/06', t1: 'IRQ', t2: 'NOR' },
      { d: '22/06', t1: 'FRA', t2: 'IRQ' },
      { d: '23/06', t1: 'NOR', t2: 'SEN' },
      { d: '26/06', t1: 'NOR', t2: 'FRA' },
      { d: '26/06', t1: 'SEN', t2: 'IRQ' },
    ]
  },
  J: {
    teams: ['ARG', 'ALG', 'AUT', 'JOR'],
    matches: [
      { d: '17/06', t1: 'ARG', t2: 'ALG' },
      { d: '17/06', t1: 'AUT', t2: 'JOR' },
      { d: '22/06', t1: 'ARG', t2: 'AUT' },
      { d: '23/06', t1: 'JOR', t2: 'ALG' },
      { d: '28/06', t1: 'ALG', t2: 'AUT' },
      { d: '28/06', t1: 'JOR', t2: 'ARG' },
    ]
  },
  K: {
    teams: ['POR', 'RDC', 'UZB', 'COL'],
    matches: [
      { d: '17/06', t1: 'POR', t2: 'RDC' },
      { d: '18/06', t1: 'UZB', t2: 'COL' },
      { d: '23/06', t1: 'POR', t2: 'UZB' },
      { d: '24/06', t1: 'COL', t2: 'RDC' },
      { d: '28/06', t1: 'COL', t2: 'POR' },
      { d: '28/06', t1: 'RDC', t2: 'UZB' },
    ]
  },
  L: {
    teams: ['ENG', 'CRO', 'GHA', 'PAN'],
    matches: [
      { d: '17/06', t1: 'ENG', t2: 'CRO' },
      { d: '18/06', t1: 'GHA', t2: 'PAN' },
      { d: '23/06', t1: 'ENG', t2: 'GHA' },
      { d: '24/06', t1: 'PAN', t2: 'CRO' },
      { d: '27/06', t1: 'PAN', t2: 'ENG' },
      { d: '27/06', t1: 'CRO', t2: 'GHA' },
    ]
  }
};

const BEST_THIRD_SLOTS = [
  { matchIdx: 0,  position: 't2', allowedGroups: ['A', 'B', 'C', 'D', 'F'] },
  { matchIdx: 1,  position: 't1', allowedGroups: ['C', 'D', 'F', 'G', 'H'] },
  { matchIdx: 6,  position: 't1', allowedGroups: ['B', 'E', 'F', 'I', 'J'] },
  { matchIdx: 7,  position: 't1', allowedGroups: ['A', 'E', 'H', 'I', 'J'] },
  { matchIdx: 10, position: 't2', allowedGroups: ['C', 'E', 'F', 'H', 'I'] },
  { matchIdx: 11, position: 't1', allowedGroups: ['E', 'H', 'I', 'J', 'K'] },
  { matchIdx: 12, position: 't1', allowedGroups: ['E', 'F', 'G', 'I', 'J'] },
  { matchIdx: 13, position: 't1', allowedGroups: ['D', 'E', 'I', 'J', 'L'] },
];

const R16_PAIRS = [
  { label: '1E vs 3e(ABCDF)',  d: '29/06' },
  { label: '3e(CDFGH) vs 1I', d: '30/06' },
  { label: '2A vs 2B',         d: '28/06' },
  { label: '1F vs 2C',         d: '30/06' },
  { label: '2K vs 2L',         d: '03/07' },
  { label: '1H vs 2J',         d: '02/07' },
  { label: '3e(BEFIJ) vs 1D',  d: '02/07' },
  { label: '3e(AEHIJ) vs 1G',  d: '01/07' },
  { label: '1C vs 2F',         d: '29/06' },
  { label: '2E vs 2I',         d: '30/06' },
  { label: '1A vs 3e(CEFHI)',  d: '01/07' },
  { label: '3e(EHIJK) vs 1L',  d: '01/07' },
  { label: '3e(EFGIJ) vs 1B',  d: '03/07' },
  { label: '3e(DEIJL) vs 1K',  d: '04/07' },
  { label: '1J vs 2H',         d: '04/07' },
  { label: '2D vs 2G',         d: '03/07' },
];

const GROUP_MAP = [
  { t1: '1E', t2: null },
  { t1: null, t2: '1I' },
  { t1: '2A', t2: '2B' },
  { t1: '1F', t2: '2C' },
  { t1: '2K', t2: '2L' },
  { t1: '1H', t2: '2J' },
  { t1: null, t2: '1D' },
  { t1: null, t2: '1G' },
  { t1: '1C', t2: '2F' },
  { t1: '2E', t2: '2I' },
  { t1: '1A', t2: null },
  { t1: null, t2: '1L' },
  { t1: null, t2: '1B' },
  { t1: null, t2: '1K' },
  { t1: '1J', t2: '2H' },
  { t1: '2D', t2: '2G' },
];

const ROUND_LABELS = {
  r16: '16es de finale',
  r8:  '8es de finale',
  qf:  'Quarts de finale',
  sf:  'Demi-finales',
  f:   'FINALE'
};

const ROUND_DATES = {
  r16: ['29/06', '30/06', '01/07', '02/07', '03/07', '04/07'],
  r8:  ['05/07', '06/07', '07/07'],
  qf:  ['09/07', '10/07'],
  sf:  ['14/07'],
  f:   ['19/07']
};

const KNOCKOUT_ROUNDS  = ['r16', 'r8', 'qf', 'sf', 'f'];
const KNOCKOUT_SIZES   = [16, 8, 4, 2, 1];

function teamName(code) {
  return TEAM_NAMES[code] || code;
}

function teamFlag(code, size = 20) {
  const iso = FLAG_CODES[code];
  if (!iso) return `<span style="display:inline-block;width:${size}px;height:${Math.round(size * 0.67)}px;background:#2a2f4a;border-radius:2px;"></span>`;
  return `<img src="https://flagcdn.com/w40/${iso}.png" alt="${code}" style="width:${size}px;height:${Math.round(size * 0.67)}px;object-fit:cover;border-radius:2px;vertical-align:middle;display:inline-block;">`;
}
