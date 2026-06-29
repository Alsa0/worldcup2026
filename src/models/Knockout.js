const Knockout = {
  emptyMatch() {
    return { t1: 'TBD', t2: 'TBD', s1: null, s2: null, pen1: null, pen2: null, done: false, winner: null };
  },

  assignBestThirds(bestThirds) {
    const sorted = [...bestThirds].sort((a, b) => {
      const slotsA = BEST_THIRD_SLOTS.filter(s => s.allowedGroups.includes(a.group)).length;
      const slotsB = BEST_THIRD_SLOTS.filter(s => s.allowedGroups.includes(b.group)).length;
      return slotsA - slotsB;
    });

    const assignment = new Array(BEST_THIRD_SLOTS.length).fill(null);
    const used = new Set();

    function backtrack(slotIdx) {
      if (slotIdx === BEST_THIRD_SLOTS.length) return true;
      const slot = BEST_THIRD_SLOTS[slotIdx];
      for (const team of sorted) {
        if (used.has(team.group)) continue;
        if (!slot.allowedGroups.includes(team.group)) continue;
        assignment[slotIdx] = team;
        used.add(team.group);
        if (backtrack(slotIdx + 1)) return true;
        used.delete(team.group);
        assignment[slotIdx] = null;
      }
      return false;
    }

    return backtrack(0) ? assignment : null;
  },

  initRound(knockout, round, size) {
    if (!knockout[round]) knockout[round] = {};
    for (let i = 0; i < size; i++) {
      if (!knockout[round][i]) knockout[round][i] = this.emptyMatch();
    }
  },

  updateFromGroups(knockout, groupScores) {
    this.initRound(knockout, 'r16', 16);
    const q = Group.getAllQualifiers(groupScores);

    GROUP_MAP.forEach((pair, idx) => {
      const m = knockout['r16'][idx];
      if (m.done) return;
      if (!pair.t1) m.t1 = 'TBD';
      if (!pair.t2) m.t2 = 'TBD';
      if (pair.t1) m.t1 = q[pair.t1]?.code || 'TBD';
      if (pair.t2) m.t2 = q[pair.t2]?.code || 'TBD';
    });

    if (Group.allGroupsFinished(groupScores)) {
      const bestThirds = Group.getBestThirds(groupScores);
      if (bestThirds.length === 8) {
        const assignment = this.assignBestThirds(bestThirds);
        if (assignment) {
          assignment.forEach((team, slotIdx) => {
            if (!team) return;
            const slot = BEST_THIRD_SLOTS[slotIdx];
            const m = knockout['r16'][slot.matchIdx];
            if (m && !m.done) m[slot.position] = team.code;
          });
        }
      }
    }
  },

  propagate(knockout) {
    for (let ri = 0; ri < KNOCKOUT_ROUNDS.length - 1; ri++) {
      const cur = KNOCKOUT_ROUNDS[ri];
      const next = KNOCKOUT_ROUNDS[ri + 1];
      const size = KNOCKOUT_SIZES[ri];

      if (!knockout[cur]) continue;
      if (!knockout[next]) knockout[next] = {};

      for (let i = 0; i < size; i++) {
        const m = knockout[cur][i];
        if (!m) continue;
        const ni = Math.floor(i / 2);
        if (!knockout[next][ni]) knockout[next][ni] = this.emptyMatch();
        const nm = knockout[next][ni];
        if (!nm.done) {
          const winner = m.done && m.winner && m.winner !== 'TBD' ? m.winner : 'TBD';
          if (i % 2 === 0) nm.t1 = winner;
          if (i % 2 === 1) nm.t2 = winner;
        }
      }
    }
  },

  setResult(knockout, round, idx, s1, s2, pen1, pen2) {
    const m = knockout[round]?.[idx];
    if (!m) return false;
    m.s1 = s1; m.s2 = s2;
    if (s1 === s2) {
      if (pen1 === pen2) return false;
      m.pen1 = pen1; m.pen2 = pen2;
      m.winner = pen1 > pen2 ? m.t1 : m.t2;
    } else {
      m.pen1 = null; m.pen2 = null;
      m.winner = s1 > s2 ? m.t1 : m.t2;
    }
    m.done = true;
    return true;
  },

  simulateRandom(knockout) {
    KNOCKOUT_ROUNDS.forEach((round, ri) => {
      for (let i = 0; i < KNOCKOUT_SIZES[ri]; i++) {
        const m = knockout[round]?.[i];
        if (!m || m.done) continue;
        let s1 = Math.floor(Math.random() * 5);
        let s2 = Math.floor(Math.random() * 5);
        if (s1 === s2) s1++;
        m.s1 = s1; m.s2 = s2;
        m.pen1 = null; m.pen2 = null;
        m.winner = s1 > s2 ? m.t1 : m.t2;
        m.done = true;
      }
      this.propagate(knockout);
    });
  }
};
