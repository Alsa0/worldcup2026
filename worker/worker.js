const TEAM_MAP = {
  'Mexico': 'MEX', 'Mexique': 'MEX', 'South Africa': 'RSA', 'Afrique du Sud': 'RSA',
  'Canada': 'CAN', 'South Korea': 'KOR', 'Corée du Sud': 'KOR', 'Qatar': 'QAT',
  'Switzerland': 'SUI', 'Suisse': 'SUI', 'Brazil': 'BRA', 'Brésil': 'BRA',
  'Morocco': 'MAR', 'Maroc': 'MAR', 'Haiti': 'HAI', 'Haïti': 'HAI',
  'Scotland': 'SCO', 'Écosse': 'SCO', 'United States': 'USA', 'USA': 'USA', 'États-Unis': 'USA',
  'Paraguay': 'PAR', 'Australia': 'AUS', 'Australie': 'AUS', 'Germany': 'GER',
  'Allemagne': 'GER', 'Curacao': 'CUW', 'Curaçao': 'CUW', 'Curaao': 'CUW', 'Ivory Coast': 'CIV',
  "Côte d'Ivoire": 'CIV', 'Ecuador': 'ECU', 'Équateur': 'ECU',
  'Netherlands': 'NED', 'Pays-Bas': 'NED', 'Japan': 'JPN', 'Japon': 'JPN',
  'Tunisia': 'TUN', 'Tunisie': 'TUN', 'Belgium': 'BEL', 'Belgique': 'BEL',
  'Egypt': 'EGY', 'Égypte': 'EGY', 'Spain': 'ESP', 'Espagne': 'ESP',
  'Cape Verde': 'CPV', 'Cap-Vert': 'CPV', 'Cabo Verde': 'CPV', 'Iran': 'IRN',
  'New Zealand': 'NZL', 'Nouvelle-Zélande': 'NZL', 'Saudi Arabia': 'KSA',
  'Arabie Saoudite': 'KSA', 'Uruguay': 'URU', 'France': 'FRA',
  'Senegal': 'SEN', 'Sénégal': 'SEN', 'Norway': 'NOR', 'Norvège': 'NOR',
  'Argentina': 'ARG', 'Argentine': 'ARG', 'Algeria': 'ALG', 'Algérie': 'ALG',
  'Austria': 'AUT', 'Autriche': 'AUT', 'Jordan': 'JOR', 'Jordanie': 'JOR',
  'Portugal': 'POR', 'Uzbekistan': 'UZB', 'Ouzbékistan': 'UZB',
  'Colombia': 'COL', 'Colombie': 'COL', 'England': 'ENG', 'Angleterre': 'ENG',
  'Croatia': 'CRO', 'Croatie': 'CRO', 'Ghana': 'GHA', 'Panama': 'PAN',
  'Czech Republic': 'TCH', 'Czechia': 'TCH', 'Tchéquie': 'TCH',
  'Bosnia': 'BIH', 'Bosnia and Herzegovina': 'BIH', 'Bosnie-Herzégovine': 'BIH',
  'Turkey': 'TUR', 'Turquie': 'TUR', 'Türkiye': 'TUR', 'TǬrkiye': 'TUR',
  'Sweden': 'SUE', 'Suède': 'SUE', 'Iraq': 'IRQ', 'Irak': 'IRQ',
  'DR Congo': 'RDC', 'RD Congo': 'RDC',
};

const GROUPS = {
  A: [{ t1: 'MEX', t2: 'RSA' }, { t1: 'KOR', t2: 'TCH' }, { t1: 'TCH', t2: 'RSA' }, { t1: 'MEX', t2: 'KOR' }, { t1: 'TCH', t2: 'MEX' }, { t1: 'RSA', t2: 'KOR' }],
  B: [{ t1: 'CAN', t2: 'BIH' }, { t1: 'QAT', t2: 'SUI' }, { t1: 'SUI', t2: 'BIH' }, { t1: 'CAN', t2: 'QAT' }, { t1: 'SUI', t2: 'CAN' }, { t1: 'BIH', t2: 'QAT' }],
  C: [{ t1: 'BRA', t2: 'MAR' }, { t1: 'HAI', t2: 'SCO' }, { t1: 'SCO', t2: 'MAR' }, { t1: 'BRA', t2: 'HAI' }, { t1: 'SCO', t2: 'BRA' }, { t1: 'MAR', t2: 'HAI' }],
  D: [{ t1: 'USA', t2: 'PAR' }, { t1: 'AUS', t2: 'TUR' }, { t1: 'USA', t2: 'AUS' }, { t1: 'TUR', t2: 'PAR' }, { t1: 'TUR', t2: 'USA' }, { t1: 'PAR', t2: 'AUS' }],
  E: [{ t1: 'GER', t2: 'CUW' }, { t1: 'CIV', t2: 'ECU' }, { t1: 'GER', t2: 'CIV' }, { t1: 'ECU', t2: 'CUW' }, { t1: 'ECU', t2: 'GER' }, { t1: 'CUW', t2: 'CIV' }],
  F: [{ t1: 'NED', t2: 'JPN' }, { t1: 'SUE', t2: 'TUN' }, { t1: 'NED', t2: 'SUE' }, { t1: 'TUN', t2: 'JPN' }, { t1: 'JPN', t2: 'SUE' }, { t1: 'TUN', t2: 'NED' }],
  G: [{ t1: 'BEL', t2: 'EGY' }, { t1: 'IRN', t2: 'NZL' }, { t1: 'BEL', t2: 'IRN' }, { t1: 'NZL', t2: 'EGY' }, { t1: 'EGY', t2: 'IRN' }, { t1: 'NZL', t2: 'BEL' }],
  H: [{ t1: 'ESP', t2: 'CPV' }, { t1: 'KSA', t2: 'URU' }, { t1: 'ESP', t2: 'KSA' }, { t1: 'URU', t2: 'CPV' }, { t1: 'CPV', t2: 'KSA' }, { t1: 'URU', t2: 'ESP' }],
  I: [{ t1: 'FRA', t2: 'SEN' }, { t1: 'IRQ', t2: 'NOR' }, { t1: 'FRA', t2: 'IRQ' }, { t1: 'NOR', t2: 'SEN' }, { t1: 'NOR', t2: 'FRA' }, { t1: 'SEN', t2: 'IRQ' }],
  J: [{ t1: 'ARG', t2: 'ALG' }, { t1: 'AUT', t2: 'JOR' }, { t1: 'ARG', t2: 'AUT' }, { t1: 'JOR', t2: 'ALG' }, { t1: 'ALG', t2: 'AUT' }, { t1: 'JOR', t2: 'ARG' }],
  K: [{ t1: 'POR', t2: 'RDC' }, { t1: 'UZB', t2: 'COL' }, { t1: 'POR', t2: 'UZB' }, { t1: 'COL', t2: 'RDC' }, { t1: 'COL', t2: 'POR' }, { t1: 'RDC', t2: 'UZB' }],
  L: [{ t1: 'ENG', t2: 'CRO' }, { t1: 'GHA', t2: 'PAN' }, { t1: 'ENG', t2: 'GHA' }, { t1: 'PAN', t2: 'CRO' }, { t1: 'PAN', t2: 'ENG' }, { t1: 'CRO', t2: 'GHA' }],
};

const KNOCKOUT_ROUNDS = ['r16', 'r8', 'qf', 'sf', 'f'];
const KNOCKOUT_SIZES = [16, 8, 4, 2, 1];

const DEFAULT_TIMES = {
  'A_0': '21:00', 'A_1': '04:00', 'A_2': '18:00', 'A_3': '03:00', 'A_4': '03:00', 'A_5': '03:00',
  'B_0': '23:00', 'B_1': '23:00', 'B_2': '00:00', 'B_3': '00:00', 'B_4': '23:00', 'B_5': '23:00',
  'C_0': '00:00', 'C_1': '03:00', 'C_2': '00:00', 'C_3': '03:00', 'C_4': '00:00', 'C_5': '00:00',
  'D_0': '03:00', 'D_1': '06:00', 'D_2': '23:00', 'D_3': '06:00', 'D_4': '04:00', 'D_5': '04:00',
  'E_0': '19:00', 'E_1': '01:00', 'E_2': '22:00', 'E_3': '02:00', 'E_4': '22:00', 'E_5': '22:00',
  'F_0': '22:00', 'F_1': '04:00', 'F_2': '18:00', 'F_3': '06:00', 'F_4': '01:00', 'F_5': '01:00',
  'G_0': '21:00', 'G_1': '03:00', 'G_2': '21:00', 'G_3': '03:00', 'G_4': '05:00', 'G_5': '05:00',
  'H_0': '18:00', 'H_1': '00:00', 'H_2': '18:00', 'H_3': '00:00', 'H_4': '02:00', 'H_5': '02:00',
  'I_0': '21:00', 'I_1': '00:00', 'I_2': '23:00', 'I_3': '02:00', 'I_4': '23:00', 'I_5': '23:00',
  'J_0': '05:00', 'J_1': '06:00', 'J_2': '19:00', 'J_3': '05:00', 'J_4': '04:00', 'J_5': '04:00',
  'K_0': '21:00', 'K_1': '06:00', 'K_2': '19:00', 'K_3': '04:00', 'K_4': '23:30', 'K_5': '23:30',
  'L_0': '22:00', 'L_1': '03:00', 'L_2': '22:00', 'L_3': '01:00', 'L_4': '23:00', 'L_5': '23:00',
};


const MATCH_DATES = {
  'A_0': 'Jun 11', 'A_1': 'Jun 12', 'A_2': 'Jun 18', 'A_3': 'Jun 19', 'A_4': 'Jun 25', 'A_5': 'Jun 25',
  'B_0': 'Jun 12', 'B_1': 'Jun 13', 'B_2': 'Jun 17', 'B_3': 'Jun 17', 'B_4': 'Jun 24', 'B_5': 'Jun 24',
  'C_0': 'Jun 12', 'C_1': 'Jun 14', 'C_2': 'Jun 18', 'C_3': 'Jun 20', 'C_4': 'Jun 23', 'C_5': 'Jun 23',
  'D_0': 'Jun 13', 'D_1': 'Jun 14', 'D_2': 'Jun 19', 'D_3': 'Jun 20', 'D_4': 'Jun 26', 'D_5': 'Jun 26',
  'E_0': 'Jun 14', 'E_1': 'Jun 14', 'E_2': 'Jun 20', 'E_3': 'Jun 21', 'E_4': 'Jun 25', 'E_5': 'Jun 25',
  'F_0': 'Jun 14', 'F_1': 'Jun 15', 'F_2': 'Jun 20', 'F_3': 'Jun 21', 'F_4': 'Jun 25', 'F_5': 'Jun 25',
  'G_0': 'Jun 15', 'G_1': 'Jun 16', 'G_2': 'Jun 21', 'G_3': 'Jun 22', 'G_4': 'Jun 27', 'G_5': 'Jun 27',
  'H_0': 'Jun 15', 'H_1': 'Jun 15', 'H_2': 'Jun 21', 'H_3': 'Jun 21', 'H_4': 'Jun 27', 'H_5': 'Jun 27',
  'I_0': 'Jun 16', 'I_1': 'Jun 16', 'I_2': 'Jun 21', 'I_3': 'Jun 23', 'I_4': 'Jun 26', 'I_5': 'Jun 26',
  'J_0': 'Jun 17', 'J_1': 'Jun 17', 'J_2': 'Jun 22', 'J_3': 'Jun 23', 'J_4': 'Jun 28', 'J_5': 'Jun 28',
  'K_0': 'Jun 17', 'K_1': 'Jun 18', 'K_2': 'Jun 23', 'K_3': 'Jun 24', 'K_4': 'Jun 27', 'K_5': 'Jun 27',
  'L_0': 'Jun 17', 'L_1': 'Jun 17', 'L_2': 'Jun 22', 'L_3': 'Jun 23', 'L_4': 'Jun 26', 'L_5': 'Jun 26',
};

const KNOCKOUT_DATES = {
  'r16_2': 'Jun 28', 'r16_0': 'Jun 29', 'r16_8': 'Jun 29', 'r16_3': 'Jun 30',
  'r16_9': 'Jun 30', 'r16_1': 'Jun 30', 'r16_10': 'Jul 01', 'r16_11': 'Jul 01',
  'r16_7': 'Jul 01', 'r16_6': 'Jul 02', 'r16_5': 'Jul 02', 'r16_13': 'Jul 03',
  'r16_12': 'Jul 03', 'r16_15': 'Jul 03', 'r16_14': 'Jul 04', 'r16_4': 'Jul 04',
  'r8_0': 'Jul 04', 'r8_1': 'Jul 04', 'r8_2': 'Jul 05', 'r8_3': 'Jul 06',
  'r8_4': 'Jul 06', 'r8_5': 'Jul 07', 'r8_6': 'Jul 07', 'r8_7': 'Jul 07',
  'qf_0': 'Jul 09', 'qf_1': 'Jul 10', 'qf_2': 'Jul 11', 'qf_3': 'Jul 12',
  'sf_0': 'Jul 14', 'sf_1': 'Jul 15',
  'f_0': 'Jul 19',
};

const KNOCKOUT_DEFAULT_TIMES = {
  'r16_2': '21:00', 'r16_0': '22:30', 'r16_8': '19:00', 'r16_3': '03:00',
  'r16_9': '19:00', 'r16_1': '23:00', 'r16_10': '03:00', 'r16_11': '18:00',
  'r16_7': '22:00', 'r16_6': '02:00', 'r16_5': '21:00', 'r16_13': '01:00', 'r16_12': '05:00',
  'r16_15': '20:00', 'r16_14': '00:00', 'r16_4': '03:30',
  'r8_0': '19:00', 'r8_1': '23:00', 'r8_2': '22:00', 'r8_3': '02:00',
  'r8_4': '21:00', 'r8_5': '02:00', 'r8_6': '18:00', 'r8_7': '22:00',
  'qf_0': '22:00', 'qf_1': '21:00', 'qf_2': '23:00', 'qf_3': '03:00',
  'sf_0': '21:00', 'sf_1': '21:00',
  'f_0': '21:00',
};

function findMatchKey(t1, t2) {
  for (const grp of Object.keys(GROUPS)) {
    const matches = GROUPS[grp];
    for (let i = 0; i < matches.length; i++) {
      const m = matches[i];
      if ((m.t1 === t1 && m.t2 === t2) || (m.t1 === t2 && m.t2 === t1)) return `${grp}_${i}`;
    }
  }
  return null;
}

function toCode(name) { return TEAM_MAP[name] || null; }

function isFinished(status) {
  if (!status) return false;
  return ['FT', 'Terminé', 'Final', 'Full-time', 'Finished'].includes(status);
}

function isLive(status) {
  if (!status) return false;
  if (isFinished(status)) return false;
  const s = status.toLowerCase();
  return s.includes('live') || s.includes('half') || /^\d+['′]/.test(s);
}

function isKnockoutKey(key) {
  return key && KNOCKOUT_ROUNDS.some(r => key.startsWith(r));
}

function parseMatchTime(dateStr, timeStr) {
  try {
    const year = new Date().getFullYear();
    const dt = new Date(`${dateStr} ${year} ${timeStr} UTC`);
    return isNaN(dt.getTime()) ? null : dt.getTime();
  } catch (e) { return null; }
}

function getMatchKeysForDate(dateStr) {
  const groupKeys = Object.entries(MATCH_DATES)
    .filter(([, d]) => d === dateStr)
    .map(([key]) => key);

  const knockoutKeys = Object.entries(KNOCKOUT_DATES)
    .filter(([, d]) => d === dateStr)
    .map(([key]) => key);

  return [...groupKeys, ...knockoutKeys];
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
}

// ─── Parse scores groupes ─────────────────────────────────────────────────────

function parseSerpGames(games) {
  const scores = {};
  games.forEach(g => {
    if (!isFinished(g.status)) return;
    if (!g.teams || g.teams.length < 2) return;
    const t1 = toCode(g.teams[0].name);
    const t2 = toCode(g.teams[1].name);
    const s1 = parseInt(g.teams[0].score);
    const s2 = parseInt(g.teams[1].score);
    if (!t1 || !t2 || isNaN(s1) || isNaN(s2)) return;
    const key = findMatchKey(t1, t2);
    if (key) scores[key] = { s1, s2, done: true, official: true };
  });
  return scores;
}

function parseLiveGames(games) {
  const scores = {};
  games.forEach(g => {
    if (!isLive(g.status)) return;
    if (!g.teams || g.teams.length < 2) return;
    const t1 = toCode(g.teams[0].name);
    const t2 = toCode(g.teams[1].name);
    const s1 = parseInt(g.teams[0].score);
    const s2 = parseInt(g.teams[1].score);
    if (!t1 || !t2 || isNaN(s1) || isNaN(s2)) return;
    const key = findMatchKey(t1, t2);
    if (key) scores[key] = { s1, s2, done: false, official: true, live: true, status: g.status };
  });
  return scores;
}

// ─── Parse scores knockout ────────────────────────────────────────────────────

/**
 * Cherche dans officialKnockout le match correspondant à t1/t2.
 * Retourne { round, idx } ou null.
 */
function findKnockoutMatchKey(t1, t2, officialKnockout) {
  for (const round of KNOCKOUT_ROUNDS) {
    const roundData = officialKnockout?.[round];
    if (!roundData) continue;
    for (const [idx, m] of Object.entries(roundData)) {
      if (!m || !m.t1 || !m.t2) continue;
      if ((m.t1 === t1 && m.t2 === t2) || (m.t1 === t2 && m.t2 === t1)) {
        return { round, idx: parseInt(idx) };
      }
    }
  }
  return null;
}

/**
 * Parse les tirs au but depuis SerpApi.
 * SerpApi peut retourner un champ "penalty" ou encoder "3 (5)" dans le score.
 */
function extractPenalties(team) {
  // Cas 1 : champ penalty explicite
  if (team.penalty !== undefined && team.penalty !== null) {
    const p = parseInt(team.penalty);
    return isNaN(p) ? null : p;
  }
  // Cas 2 : score encodé "3 (5)"
  if (typeof team.score === 'string') {
    const match = team.score.match(/\((\d+)\)/);
    if (match) return parseInt(match[1]);
  }
  return null;
}

function parseKnockoutFinished(games, officialKnockout) {
  const scores = {};
  games.forEach(g => {
    if (!isFinished(g.status)) return;
    if (!g.teams || g.teams.length < 2) return;
    const t1 = toCode(g.teams[0].name);
    const t2 = toCode(g.teams[1].name);
    if (!t1 || !t2) return;

    // Score de base (temps réglementaire)
    const s1 = parseInt(g.teams[0].score);
    const s2 = parseInt(g.teams[1].score);
    if (isNaN(s1) || isNaN(s2)) return;

    // Ce match est-il dans officialKnockout ?
    const found = findKnockoutMatchKey(t1, t2, officialKnockout);
    if (!found) return;

    const { round, idx } = found;

    // Tirs au but
    const pen1 = extractPenalties(g.teams[0]);
    const pen2 = extractPenalties(g.teams[1]);

    // Déterminer le vainqueur
    let winner;
    if (s1 !== s2) {
      winner = s1 > s2 ? t1 : t2;
    } else if (pen1 !== null && pen2 !== null && pen1 !== pen2) {
      winner = pen1 > pen2 ? t1 : t2;
    } else {
      winner = null; // match pas encore tranché (ne devrait pas arriver sur FT)
    }

    if (!scores[round]) scores[round] = {};
    scores[round][idx] = {
      t1, t2, s1, s2,
      pen1: pen1 ?? null,
      pen2: pen2 ?? null,
      done: true, official: true, winner
    };
  });
  return scores;
}

function parseKnockoutLive(games, officialKnockout) {
  const scores = {};
  games.forEach(g => {
    if (!isLive(g.status)) return;
    if (!g.teams || g.teams.length < 2) return;
    const t1 = toCode(g.teams[0].name);
    const t2 = toCode(g.teams[1].name);
    if (!t1 || !t2) return;

    const s1 = parseInt(g.teams[0].score);
    const s2 = parseInt(g.teams[1].score);
    if (isNaN(s1) || isNaN(s2)) return;

    const found = findKnockoutMatchKey(t1, t2, officialKnockout);
    if (!found) return;

    const { round, idx } = found;
    if (!scores[round]) scores[round] = {};
    scores[round][idx] = {
      t1, t2, s1, s2,
      pen1: null, pen2: null,
      done: false, official: true, live: true, status: g.status
    };
  });
  return scores;
}

/**
 * Propage les vainqueurs de chaque round vers le round suivant.
 * Peuple t1/t2 des matchs du tour suivant automatiquement.
 */
function propagateOfficialKnockout(officialKnockout) {
  for (let ri = 0; ri < KNOCKOUT_ROUNDS.length - 1; ri++) {
    const cur = KNOCKOUT_ROUNDS[ri];
    const next = KNOCKOUT_ROUNDS[ri + 1];
    const size = KNOCKOUT_SIZES[ri];

    if (!officialKnockout[cur]) continue;
    if (!officialKnockout[next]) officialKnockout[next] = {};

    for (let i = 0; i < size; i++) {
      const m = officialKnockout[cur][i];
      if (!m || !m.done || !m.winner) continue;

      const ni = Math.floor(i / 2);
      if (!officialKnockout[next][ni]) {
        officialKnockout[next][ni] = {
          t1: null, t2: null,
          s1: null, s2: null,
          pen1: null, pen2: null,
          done: false, official: true, winner: null
        };
      }

      const nm = officialKnockout[next][ni];
      if (!nm.done) {
        if (i % 2 === 0) nm.t1 = m.winner;
        if (i % 2 === 1) nm.t2 = m.winner;
      }
    }
  }
  return officialKnockout;
}

// ─── SerpApi ──────────────────────────────────────────────────────────────────

function extractTimesFromSerp(games) {
  const times = {};
  games.forEach(g => {
    if (!g.teams || g.teams.length < 2 || !g.time) return;
    const t1 = toCode(g.teams[0].name);
    const t2 = toCode(g.teams[1].name);
    if (!t1 || !t2) return;
    const key = findMatchKey(t1, t2);
    if (key) times[key] = g.time;
  });
  return times;
}

function buildScheduleEntries(matchKeys, serpTimes, existingKeys) {
  const entries = [];
  matchKeys.forEach(key => {
    if (existingKeys.has(key)) return;

    const isKO = KNOCKOUT_ROUNDS.some(r => key.startsWith(r));
    const dateStr = isKO ? KNOCKOUT_DATES[key] : MATCH_DATES[key];
    if (!dateStr) return;

    const timeStr = isKO
      ? (KNOCKOUT_DEFAULT_TIMES[key] || '23:00')
      : (serpTimes[key] || DEFAULT_TIMES[key] || '00:00');

    const matchStart = parseMatchTime(dateStr, timeStr);
    if (!matchStart) return;

    const offsets = isKO ? [60, 120, 130, 160, 175] : [60, 120, 130];
    const syncTimes = offsets.map(m => matchStart + m * 60 * 1000);

    entries.push({
      key, matchStart, syncTimes,
      finished: false, knockout: isKO,
      syncsExecuted: [],
      timeSource: isKO ? 'default' : (serpTimes[key] ? 'serp' : 'default')
    });
  });
  return entries;
}

function isQuotaError(data, status) {
  if (status === 429) return true;
  if (!data.error) return false;
  const err = data.error.toLowerCase();
  return err.includes('limit') || err.includes('quota') || err.includes('upgrade') || err.includes('plan');
}

async function fetchWithKey(key, query) {
  const res = await fetch(
    `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(query)}&api_key=${key}`
  );
  const data = await res.json();
  return { data, status: res.status };
}

async function fetchFromSerpApi(env, mode = 'results') {
  const keys = [env.SERPAPI_KEY, env.SERPAPI_KEY2].filter(Boolean);
  const query = mode === 'live' ? 'FIFA World Cup 2026' : 'FIFA World Cup 2026 results';

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    try {
      const { data, status } = await fetchWithKey(key, query);
      if (isQuotaError(data, status)) {
        await setFirebase(env, `apiStatus/key${i + 1}`, { exhausted: true, at: Date.now() });
        continue;
      }
      const games = data.sports_results?.games || [];
      if (data.sports_results?.game_spotlight) games.push(data.sports_results.game_spotlight);
      await setFirebase(env, 'apiStatus', {
        activeKey: i + 1, key1Exhausted: i > 0,
        key2Exhausted: false, allExhausted: false,
        lastSuccess: Date.now()
      });
      return games;
    } catch (e) { continue; }
  }

  await setFirebase(env, 'apiStatus', {
    allExhausted: true, key1Exhausted: true,
    key2Exhausted: true, at: Date.now()
  });
  return [];
}

// ─── Firebase ─────────────────────────────────────────────────────────────────

async function getFirebase(env, path) {
  try {
    const res = await fetch(`${env.FIREBASE_URL}/${path}.json`);
    const data = await res.json();
    return data || null;
  } catch (e) { return null; }
}

async function setFirebase(env, path, data) {
  await fetch(`${env.FIREBASE_URL}/${path}.json`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}

// ─── Schedule ─────────────────────────────────────────────────────────────────

async function updateScheduleForDays(env, date1, date2, existingSchedule, serpGames) {
  const existingKeys = new Set(existingSchedule.map(s => s.key));
  const serpTimes = extractTimesFromSerp(serpGames);
  const keysDay1 = getMatchKeysForDate(formatDate(date1));
  const keysDay2 = date2 ? getMatchKeysForDate(formatDate(date2)) : [];
  const allKeys = [...keysDay1, ...keysDay2];
  const newEntries = buildScheduleEntries(allKeys, serpTimes, existingKeys);
  if (newEntries.length === 0) return existingSchedule;
  const updatedSchedule = [...existingSchedule, ...newEntries];
  await setFirebase(env, 'syncSchedule', updatedSchedule);
  return updatedSchedule;
}

async function catchUpPastScores(env, games, existingScores) {
  const finishedScores = parseSerpGames(games);
  let updated = false;
  const merged = { ...existingScores };
  Object.entries(finishedScores).forEach(([key, val]) => {
    const prev = existingScores[key];
    if (!prev || !prev.done) {
      merged[key] = val;
      updated = true;
    }
  });
  if (updated) await setFirebase(env, 'officialScores', merged);
  return merged;
}

// ─── Init knockout officiel depuis les qualifiés des groupes ──────────────────

/**
 * Peuple officialKnockout/r16 avec les équipes qualifiées des groupes.
 * Appelé depuis /init quand tous les groupes sont terminés.
 * Ne nécessite pas de table de matchs prédéfinie :
 * les équipes viennent des scores de groupes Firebase.
 */
function buildR16FromGroupScores(groupScores) {
  // Reproduire la logique de classement des groupes (simplifiée)
  const standings = {};

  for (const grp of Object.keys(GROUPS)) {
    const teams = {};
    GROUPS[grp].forEach(m => {
      if (!teams[m.t1]) teams[m.t1] = { code: m.t1, pts: 0, gf: 0, ga: 0, gd: 0, j: 0 };
      if (!teams[m.t2]) teams[m.t2] = { code: m.t2, pts: 0, gf: 0, ga: 0, gd: 0, j: 0 };
    });

    GROUPS[grp].forEach((m, idx) => {
      const sc = groupScores[`${grp}_${idx}`];
      if (!sc || (!sc.done && !sc.official)) return;
      const { s1, s2 } = sc;
      teams[m.t1].j++; teams[m.t2].j++;
      teams[m.t1].gf += s1; teams[m.t1].ga += s2;
      teams[m.t2].gf += s2; teams[m.t2].ga += s1;
      teams[m.t1].gd = teams[m.t1].gf - teams[m.t1].ga;
      teams[m.t2].gd = teams[m.t2].gf - teams[m.t2].ga;
      if (s1 > s2) { teams[m.t1].pts += 3; }
      else if (s2 > s1) { teams[m.t2].pts += 3; }
      else { teams[m.t1].pts++; teams[m.t2].pts++; }
    });

    standings[grp] = Object.values(teams).sort((a, b) =>
      b.pts - a.pts || b.gd - a.gd || b.gf - a.gf
    );
  }

  // Qualifiés 1ers et 2èmes
  const q = {};
  for (const grp of Object.keys(standings)) {
    q[`1${grp}`] = standings[grp][0]?.code || null;
    q[`2${grp}`] = standings[grp][1]?.code || null;
    q[`3${grp}`] = standings[grp][2] ? { ...standings[grp][2], group: grp } : null;
  }

  // Meilleurs 3èmes (top 8)
  const thirds = Object.keys(GROUPS)
    .map(grp => q[`3${grp}`])
    .filter(Boolean)
    .sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf)
    .slice(0, 8);

  // GROUP_MAP (même ordre que data.js)
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

  // BEST_THIRD_SLOTS (même ordre que data.js)
  const BEST_THIRD_SLOTS = [
    { matchIdx: 0, position: 't2', allowedGroups: ['A', 'B', 'C', 'D', 'F'] },
    { matchIdx: 1, position: 't1', allowedGroups: ['C', 'D', 'F', 'G', 'H'] },
    { matchIdx: 6, position: 't2', allowedGroups: ['B', 'E', 'F', 'I', 'J'] },
    { matchIdx: 7, position: 't1', allowedGroups: ['A', 'E', 'H', 'I', 'J'] },
    { matchIdx: 10, position: 't2', allowedGroups: ['C', 'E', 'F', 'H', 'I'] },
    { matchIdx: 11, position: 't1', allowedGroups: ['E', 'H', 'I', 'J', 'K'] },
    { matchIdx: 12, position: 't1', allowedGroups: ['E', 'F', 'G', 'I', 'J'] },
    { matchIdx: 13, position: 't1', allowedGroups: ['D', 'E', 'I', 'J', 'L'] },
  ];

  // Assigner les meilleurs 3èmes (backtrack trié par contrainte)
  const sorted = [...thirds].sort((a, b) => {
    const sA = BEST_THIRD_SLOTS.filter(s => s.allowedGroups.includes(a.group)).length;
    const sB = BEST_THIRD_SLOTS.filter(s => s.allowedGroups.includes(b.group)).length;
    return sA - sB;
  });

  const thirdAssignment = new Array(BEST_THIRD_SLOTS.length).fill(null);
  const used = new Set();

  function backtrack(slotIdx) {
    if (slotIdx === BEST_THIRD_SLOTS.length) return true;
    const slot = BEST_THIRD_SLOTS[slotIdx];
    for (const team of sorted) {
      if (used.has(team.group)) continue;
      if (!slot.allowedGroups.includes(team.group)) continue;
      thirdAssignment[slotIdx] = team;
      used.add(team.group);
      if (backtrack(slotIdx + 1)) return true;
      used.delete(team.group);
      thirdAssignment[slotIdx] = null;
    }
    return false;
  }
  backtrack(0);

  // Construire r16
  const r16 = {};
  GROUP_MAP.forEach((pair, idx) => {
    r16[idx] = {
      t1: pair.t1 ? (q[pair.t1] || null) : null,
      t2: pair.t2 ? (q[pair.t2] || null) : null,
      s1: null, s2: null, pen1: null, pen2: null,
      done: false, official: true, winner: null
    };
  });

  // Appliquer les meilleurs 3èmes
  thirdAssignment.forEach((team, slotIdx) => {
    if (!team) return;
    const slot = BEST_THIRD_SLOTS[slotIdx];
    if (r16[slot.matchIdx]) r16[slot.matchIdx][slot.position] = team.code;
  });

  return r16;
}

// ─── Initialize ───────────────────────────────────────────────────────────────

async function initialize(env) {
  const now = new Date();
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  await setFirebase(env, 'syncSchedule', []);

  const existingScores = await getFirebase(env, 'officialScores') || {};
  const existingKnockout = await getFirebase(env, 'officialKnockout') || {};

  const games = await fetchFromSerpApi(env, 'results');

  const mergedScores = await catchUpPastScores(env, games, existingScores);


  const allGroupsFinished = Object.keys(GROUPS).every(grp =>
    GROUPS[grp].every((_, idx) => mergedScores[`${grp}_${idx}`]?.done)
  );

  let mergedKnockout = { ...existingKnockout };
  if (allGroupsFinished) {
    const r16 = buildR16FromGroupScores(mergedScores);
    mergedKnockout.r16 = r16;
    await setFirebase(env, 'officialKnockout', mergedKnockout);
  }

  await updateScheduleForDays(env, today, tomorrow, [], games);

  const updatedSchedule = await getFirebase(env, 'syncSchedule') || [];
  const finalSchedule = updatedSchedule.map(item => {
    if (!item.finished && mergedScores[item.key]?.done) {
      return { ...item, finished: true };
    }
    return item;
  });
  await setFirebase(env, 'syncSchedule', finalSchedule);

  return {
    scoresFound: Object.keys(mergedScores).length,
    matchesScheduled: finalSchedule.length,
    allGroupsFinished,
    r16Initialized: !!mergedKnockout.r16,
    todayDate: formatDate(today),
    tomorrowDate: formatDate(tomorrow)
  };
}

// ─── Cron midnight ────────────────────────────────────────────────────────────

async function scheduleCronMidnight(env) {
  const now = new Date();
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  const existingSchedule = await getFirebase(env, 'syncSchedule') || [];
  const games = await fetchFromSerpApi(env, 'results');
  await updateScheduleForDays(env, today, tomorrow, existingSchedule, games);
}

// ─── Sync cycle ───────────────────────────────────────────────────────────────

async function runSyncCycle(env) {
  const now = Date.now();
  const WINDOW = 2 * 60 * 1000;

  let schedule = await getFirebase(env, 'syncSchedule');

  if (!schedule || !Array.isArray(schedule) || schedule.length === 0) {
    await initialize(env);
    return;
  }

  const matchesDue = schedule.filter(item => {
    if (item.finished) return false;
    const due = (item.syncTimes || []).filter(t =>
      t <= now + WINDOW && t >= now - WINDOW &&
      !(item.syncsExecuted || []).includes(t)
    );
    if (due.length > 0) return true;
    if (item.matchStart && (now - item.matchStart) > 2 * 60 * 60 * 1000) {
      return (now - (item.lastCheckedTime || 0)) > 30 * 60 * 1000;
    }
    return false;
  });

  const matchToConfirm = schedule.find(item => {
    if (item.finished) return false;
    if (matchesDue.some(m => m.key === item.key)) return false;
    const next = schedule
      .filter(s => s.matchStart > item.matchStart && !s.finished)
      .sort((a, b) => a.matchStart - b.matchStart)[0];
    if (!next) return false;
    const timeToNext = next.matchStart - now;
    return timeToNext > 0 && timeToNext < 60 * 60 * 1000;
  });
  if (matchToConfirm) matchesDue.push(matchToConfirm);

  const existing = await getFirebase(env, 'officialScores') || {};
  const existingKnockout = await getFirebase(env, 'officialKnockout') || {};

  const existingSchedKeys = new Set(schedule.map(s => s.key));
  const missingFromSchedule = Object.entries(MATCH_DATES).filter(([key, dateStr]) => {
    if (existingSchedKeys.has(key)) return false;
    const matchStart = parseMatchTime(dateStr, DEFAULT_TIMES[key] || '00:00');
    if (!matchStart) return false;
    return (now - matchStart) > 130 * 60 * 1000 && !existing[key];
  });

  const hasMissing = missingFromSchedule.length > 0;
  if (matchesDue.length === 0 && !hasMissing) return;

  const isOnlyLiveSync = !hasMissing && matchesDue.every(item => {
    const due = (item.syncTimes || []).filter(t =>
      t <= now + WINDOW && t >= now - WINDOW &&
      !(item.syncsExecuted || []).includes(t)
    );
    return due.length > 0 && due.every(t => item.matchStart && (t - item.matchStart) <= 65 * 60 * 1000);
  });

  const games = await fetchFromSerpApi(env, isOnlyLiveSync ? 'live' : 'results');

  // ── Merge scores groupes ──
  const finishedScores = parseSerpGames(games);
  const liveScores = parseLiveGames(games);
  let groupUpdated = false;
  const mergedScores = { ...existing };

  Object.entries(finishedScores).forEach(([key, val]) => {
    const prev = existing[key];
    if (!prev || prev.s1 !== val.s1 || prev.s2 !== val.s2 || !prev.done) {
      mergedScores[key] = val;
      groupUpdated = true;
    }
  });
  Object.entries(liveScores).forEach(([key, val]) => {
    const prev = existing[key];
    if (prev && prev.done) return;
    if (!prev || prev.s1 !== val.s1 || prev.s2 !== val.s2) {
      mergedScores[key] = val;
      groupUpdated = true;
    }
  });
  missingFromSchedule.forEach(([key]) => {
    if (finishedScores[key] && !existing[key]) {
      mergedScores[key] = finishedScores[key];
      groupUpdated = true;
    }
  });

  if (groupUpdated) await setFirebase(env, 'officialScores', mergedScores);

  // ── Initialiser r16 si tous les groupes viennent de se terminer ──
  let mergedKnockout = JSON.parse(JSON.stringify(existingKnockout));
  const allGroupsFinished = Object.keys(GROUPS).every(grp =>
    GROUPS[grp].every((_, idx) => mergedScores[`${grp}_${idx}`]?.done)
  );
  if (allGroupsFinished && !mergedKnockout.r16) {
    mergedKnockout.r16 = buildR16FromGroupScores(mergedScores);
  }

  // ── Merge scores knockout ──
  const knockoutFinished = parseKnockoutFinished(games, mergedKnockout);
  const knockoutLive = parseKnockoutLive(games, mergedKnockout);
  let knockoutUpdated = allGroupsFinished && !existingKnockout.r16; // r16 vient d'être initialisé

  Object.entries(knockoutFinished).forEach(([round, matches]) => {
    if (!mergedKnockout[round]) mergedKnockout[round] = {};
    Object.entries(matches).forEach(([idx, val]) => {
      const prev = existingKnockout[round]?.[idx];
      if (!prev || !prev.done) {
        mergedKnockout[round][idx] = val;
        knockoutUpdated = true;
      }
    });
  });

  Object.entries(knockoutLive).forEach(([round, matches]) => {
    if (!mergedKnockout[round]) mergedKnockout[round] = {};
    Object.entries(matches).forEach(([idx, val]) => {
      const prev = existingKnockout[round]?.[idx];
      if (prev?.done) return;
      mergedKnockout[round][idx] = val;
      knockoutUpdated = true;
    });
  });

  // ── Propager les vainqueurs vers le tour suivant ──
  if (knockoutUpdated) {
    mergedKnockout = propagateOfficialKnockout(mergedKnockout);
    await setFirebase(env, 'officialKnockout', mergedKnockout);
  }

  // ── Mettre à jour le schedule ──
  const updatedSchedule = schedule.map(item => {
    const wasChecked = matchesDue.some(m => m.key === item.key);
    const newItem = {
      ...item,
      syncsExecuted: [...(item.syncsExecuted || [])],
      lastCheckedTime: wasChecked ? now : (item.lastCheckedTime || 0)
    };
    (item.syncTimes || []).forEach(t => {
      if (t <= now + WINDOW && t >= now - WINDOW && !newItem.syncsExecuted.includes(t)) {
        newItem.syncsExecuted.push(t);
      }
    });
    if (mergedScores[item.key]?.done && !item.finished) {
      newItem.finished = true;
    }
    return newItem;
  });

  await setFirebase(env, 'syncSchedule', updatedSchedule);
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/init') {
      const result = await initialize(env);
      return new Response(JSON.stringify(result, null, 2), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/sync') {
      await runSyncCycle(env);
      return new Response('Synchro effectuée');
    }

    if (url.pathname === '/status') {
      const scores = await getFirebase(env, 'officialScores') || {};
      const schedule = await getFirebase(env, 'syncSchedule') || [];
      const knockout = await getFirebase(env, 'officialKnockout') || {};
      return new Response(JSON.stringify({
        scoresStored: Object.keys(scores).length,
        matchesScheduled: Array.isArray(schedule) ? schedule.length : 0,
        matchesFinished: Array.isArray(schedule) ? schedule.filter(s => s.finished).length : 0,
        r16Initialized: !!knockout.r16,
        knockoutRounds: Object.keys(knockout),
      }, null, 2), { headers: { 'Content-Type': 'application/json' } });
    }

    if (url.pathname === '/api-status') {
      const status = await getFirebase(env, 'apiStatus') || {};
      return new Response(JSON.stringify({
        activeKey: status.activeKey || 1,
        key1Exhausted: status.key1Exhausted || false,
        key2Exhausted: status.key2Exhausted || false,
        allExhausted: status.allExhausted || false,
        lastSuccess: status.lastSuccess ? new Date(status.lastSuccess).toISOString() : null,
        key2Available: !!env.SERPAPI_KEY2
      }, null, 2), { headers: { 'Content-Type': 'application/json' } });
    }

    if (url.pathname === '/debug-serp') {
      const q = url.searchParams.get('q') || 'FIFA World Cup 2026';
      const keys = [env.SERPAPI_KEY, env.SERPAPI_KEY2].filter(Boolean);
      const res = await fetch(
        `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(q)}&api_key=${keys[0]}`
      );
      const data = await res.json();
      return new Response(JSON.stringify(data.sports_results || {}, null, 2), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/init-knockout') {
      const existingScores = await getFirebase(env, 'officialScores') || {};
      const allGroupsFinished = Object.keys(GROUPS).every(grp =>
        GROUPS[grp].every((_, idx) => existingScores[`${grp}_${idx}`]?.done)
      );
      if (!allGroupsFinished) {
        return new Response(JSON.stringify({ error: 'Groupes pas encore terminés' }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Construire r16
      const r16 = buildR16FromGroupScores(existingScores);
      let officialKnockout = { r16 };

      // Fetch SerpApi et attraper les scores knockout déjà terminés
      const games = await fetchFromSerpApi(env, 'results');
      const knockoutFinished = parseKnockoutFinished(games, officialKnockout);

      // Merger les scores trouvés
      Object.entries(knockoutFinished).forEach(([round, matches]) => {
        if (!officialKnockout[round]) officialKnockout[round] = {};
        Object.entries(matches).forEach(([idx, val]) => {
          officialKnockout[round][idx] = val;
        });
      });

      // Propager les vainqueurs vers le tour suivant
      officialKnockout = propagateOfficialKnockout(officialKnockout);

      await setFirebase(env, 'officialKnockout', officialKnockout);

      return new Response(JSON.stringify({
        ok: true,
        scoresFound: Object.values(knockoutFinished).reduce((acc, r) => acc + Object.keys(r).length, 0),
        officialKnockout
      }, null, 2), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.pathname === '/debug-knockout') {
      const knockout = await getFirebase(env, 'officialKnockout') || {};
      return new Response(JSON.stringify(knockout, null, 2), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response('Worker Coupe du Monde 2026');
  },

  async scheduled(event, env) {
    const now = new Date();
    if (now.getUTCHours() === 0 && now.getUTCMinutes() < 2) {
      await scheduleCronMidnight(env);
    }
    await runSyncCycle(env);
  }
};