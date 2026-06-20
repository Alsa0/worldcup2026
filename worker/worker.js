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

const DEFAULT_TIMES = {
  'A_0': '21:00', 'A_1': '04:00', 'A_2': '18:00', 'A_3': '03:00', 'A_4': '03:00', 'A_5': '03:00',
  'B_0': '23:00', 'B_1': '23:00', 'B_2': '00:00', 'B_3': '00:00', 'B_4': '23:00', 'B_5': '23:00',
  'C_0': '00:00', 'C_1': '03:00', 'C_2': '00:00', 'C_3': '03:00', 'C_4': '00:00', 'C_5': '00:00',
  'D_0': '03:00', 'D_1': '06:00', 'D_2': '23:00', 'D_3': '06:00', 'D_4': '04:00', 'D_5': '04:00',
  'E_0': '19:00', 'E_1': '01:00', 'E_2': '22:00', 'E_3': '02:00', 'E_4': '22:00', 'E_5': '22:00',
  'F_0': '22:00', 'F_1': '04:00', 'F_2': '19:00', 'F_3': '06:00', 'F_4': '01:00', 'F_5': '01:00',
  'G_0': '21:00', 'G_1': '03:00', 'G_2': '23:00', 'G_3': '03:00', 'G_4': '05:00', 'G_5': '05:00',
  'H_0': '18:00', 'H_1': '00:00', 'H_2': '18:00', 'H_3': '00:00', 'H_4': '02:00', 'H_5': '02:00',
  'I_0': '21:00', 'I_1': '00:00', 'I_2': '23:00', 'I_3': '02:00', 'I_4': '23:00', 'I_5': '23:00',
  'J_0': '05:00', 'J_1': '06:00', 'J_2': '20:00', 'J_3': '05:00', 'J_4': '04:00', 'J_5': '04:00',
  'K_0': '21:00', 'K_1': '06:00', 'K_2': '20:00', 'K_3': '04:00', 'K_4': '23:30', 'K_5': '23:30',
  'L_0': '22:00', 'L_1': '03:00', 'L_2': '23:00', 'L_3': '01:00', 'L_4': '23:00', 'L_5': '23:00',
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
  return Object.entries(MATCH_DATES)
    .filter(([, d]) => d === dateStr)
    .map(([key]) => key);
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
}

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

    const dateStr = MATCH_DATES[key];
    if (!dateStr) return;

    const timeStr = serpTimes[key] || DEFAULT_TIMES[key] || '00:00';
    const matchStart = parseMatchTime(dateStr, timeStr);
    if (!matchStart) return;

    const knockout = isKnockoutKey(key);
    const offsets = knockout ? [60, 120, 130, 160, 175] : [60, 120, 130];
    const syncTimes = offsets.map(m => matchStart + m * 60 * 1000);

    entries.push({
      key, matchStart, syncTimes,
      finished: false, knockout,
      syncsExecuted: [],
      timeSource: serpTimes[key] ? 'serp' : 'default'
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

function mergeGames(games1, data1, games2, data2) {
  const allGames = [...games1];
  if (data1.sports_results?.game_spotlight) allGames.push(data1.sports_results.game_spotlight);
  if (data2.sports_results?.game_spotlight) allGames.push(data2.sports_results.game_spotlight);
  games2.forEach(g2 => {
    if (!g2.teams || g2.teams.length < 2) return;
    const exists = allGames.some(g1 => {
      if (!g1.teams || g1.teams.length < 2) return false;
      return (g1.teams[0].name === g2.teams[0].name && g1.teams[1].name === g2.teams[1].name) ||
        (g1.teams[0].name === g2.teams[1].name && g1.teams[1].name === g2.teams[0].name);
    });
    if (!exists) allGames.push(g2);
  });
  return allGames;
}

async function fetchFromSerpApi(env) {
  const keys = [env.SERPAPI_KEY, env.SERPAPI_KEY2].filter(Boolean);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    try {
      const { data: data1, status: status1 } = await fetchWithKey(key, 'FIFA World Cup 2026');
      if (isQuotaError(data1, status1)) {
        await setFirebase(env, `apiStatus/key${i + 1}`, { exhausted: true, at: Date.now() });
        continue;
      }

      const { data: data2 } = await fetchWithKey(key, 'FIFA World Cup 2026 results');
      const games1 = data1.sports_results?.games || [];
      const games2 = data2.sports_results?.games || [];
      const allGames = mergeGames(games1, data1, games2, data2);

      await setFirebase(env, 'apiStatus', {
        activeKey: i + 1, key1Exhausted: i > 0,
        key2Exhausted: false, allExhausted: false,
        lastSuccess: Date.now()
      });

      return allGames;
    } catch (e) { continue; }
  }

  await setFirebase(env, 'apiStatus', {
    allExhausted: true, key1Exhausted: true,
    key2Exhausted: true, at: Date.now()
  });
  return [];
}

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

  if (updated) {
    await setFirebase(env, 'officialScores', merged);
  }
  return merged;
}

async function initialize(env) {
  const now = new Date();
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  const existingSchedule = await getFirebase(env, 'syncSchedule') || [];
  const existingScores = await getFirebase(env, 'officialScores') || {};

  const games = await fetchFromSerpApi(env);

  const mergedScores = await catchUpPastScores(env, games, existingScores);

  await updateScheduleForDays(env, today, tomorrow, existingSchedule, games);

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
    todayDate: formatDate(today),
    tomorrowDate: formatDate(tomorrow)
  };
}

async function scheduleCronMidnight(env) {
  const now = new Date();
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  const existingSchedule = await getFirebase(env, 'syncSchedule') || [];
  const games = await fetchFromSerpApi(env);

  await updateScheduleForDays(env, today, tomorrow, existingSchedule, games);
}

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
  const existingSchedKeys = new Set(schedule.map(s => s.key));
  const missingFromSchedule = Object.entries(MATCH_DATES).filter(([key, dateStr]) => {
    if (existingSchedKeys.has(key)) return false;
    const matchStart = parseMatchTime(dateStr, DEFAULT_TIMES[key] || '00:00');
    if (!matchStart) return false;
    return (now - matchStart) > 130 * 60 * 1000 && !existing[key];
  });

  const hasMissing = missingFromSchedule.length > 0;

  if (matchesDue.length === 0 && !hasMissing) return;

  const games = await fetchFromSerpApi(env);
  const finishedScores = parseSerpGames(games);
  const liveScores = parseLiveGames(games);

  let updated = false;
  const merged = { ...existing };

  Object.entries(finishedScores).forEach(([key, val]) => {
    const prev = existing[key];
    if (!prev || prev.s1 !== val.s1 || prev.s2 !== val.s2 || !prev.done) {
      merged[key] = val;
      updated = true;
    }
  });

  Object.entries(liveScores).forEach(([key, val]) => {
    const prev = existing[key];
    if (prev && prev.done) return;
    if (!prev || prev.s1 !== val.s1 || prev.s2 !== val.s2) {
      merged[key] = val;
      updated = true;
    }
  });

  missingFromSchedule.forEach(([key]) => {
    if (finishedScores[key] && !existing[key]) {
      merged[key] = finishedScores[key];
      updated = true;
    }
  });

  if (updated) await setFirebase(env, 'officialScores', merged);

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

    if (merged[item.key]?.done && !item.finished) {
      newItem.finished = true;
    }

    return newItem;
  });

  await setFirebase(env, 'syncSchedule', updatedSchedule);
}

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
      return new Response(JSON.stringify({
        scoresStored: Object.keys(scores).length,
        matchesScheduled: Array.isArray(schedule) ? schedule.length : 0,
        matchesFinished: Array.isArray(schedule) ? schedule.filter(s => s.finished).length : 0
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