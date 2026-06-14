const Group = {
  computeStandings(grp, groupScores) {
    const data = GROUPS[grp];
    const teams = {};
    data.teams.forEach(t => {
      teams[t] = { code: t, pts: 0, j: 0, g: 0, ga: 0, gf: 0, gd: 0 };
    });

    data.matches.forEach((m, idx) => {
      const sc = groupScores[`${grp}_${idx}`];
      if (!sc || !sc.done) return;
      const { s1, s2 } = sc;
      if (!(m.t1 in teams)) teams[m.t1] = { code: m.t1, pts: 0, j: 0, g: 0, ga: 0, gf: 0, gd: 0 };
      if (!(m.t2 in teams)) teams[m.t2] = { code: m.t2, pts: 0, j: 0, g: 0, ga: 0, gf: 0, gd: 0 };

      teams[m.t1].j++; teams[m.t2].j++;
      teams[m.t1].gf += s1; teams[m.t1].ga += s2;
      teams[m.t2].gf += s2; teams[m.t2].ga += s1;
      teams[m.t1].gd = teams[m.t1].gf - teams[m.t1].ga;
      teams[m.t2].gd = teams[m.t2].gf - teams[m.t2].ga;

      if (s1 > s2) { teams[m.t1].pts += 3; teams[m.t1].g++; }
      else if (s1 < s2) { teams[m.t2].pts += 3; teams[m.t2].g++; }
      else { teams[m.t1].pts++; teams[m.t2].pts++; }
    });

    return Object.values(teams).sort((a, b) =>
      b.pts - a.pts || b.gd - a.gd || b.gf - a.gf
    );
  },

  isFinished(grp, groupScores) {
    return GROUPS[grp].matches.every((_, idx) => groupScores[`${grp}_${idx}`]?.done);
  },

  matchesPlayed(grp, groupScores) {
    return GROUPS[grp].matches.filter((_, idx) => groupScores[`${grp}_${idx}`]?.done).length;
  },

  getAllQualifiers(groupScores) {
    const q = {};
    Object.keys(GROUPS).forEach(grp => {
      if (!this.isFinished(grp, groupScores)) return;
      const s = this.computeStandings(grp, groupScores);
      q[`1${grp}`] = s[0];
      q[`2${grp}`] = s[1];
      q[`3${grp}`] = s[2];
    });
    return q;
  },

  allGroupsFinished(groupScores) {
    return Object.keys(GROUPS).every(g => this.isFinished(g, groupScores));
  },

  getBestThirds(groupScores) {
    const thirds = [];
    Object.keys(GROUPS).forEach(grp => {
      if (!this.isFinished(grp, groupScores)) return;
      const s = this.computeStandings(grp, groupScores);
      if (s[2]) thirds.push({ ...s[2], group: grp });
    });
    thirds.sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);
    return thirds.slice(0, 8);
  }
};
