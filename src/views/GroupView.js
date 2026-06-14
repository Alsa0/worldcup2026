const GroupView = {
  render(groupScores, officialScores = {}) {
    const grid = document.getElementById('groupsGrid');
    grid.innerHTML = '';
    Object.keys(GROUPS).forEach(grp => {
      grid.appendChild(this._buildCard(grp, groupScores, officialScores));
    });
  },

  _buildCard(grp, groupScores, officialScores) {
    const data      = GROUPS[grp];
    const standings = Group.computeStandings(grp, groupScores);
    const done      = Group.matchesPlayed(grp, groupScores);
    const card      = document.createElement('div');
    card.className  = 'group-card';
    card.innerHTML  = this._headerHtml(grp, done, data.matches.length)
      + this._tableHtml(standings)
      + this._matchesHtml(grp, data, groupScores, officialScores);
    return card;
  },

  _headerHtml(grp, done, total) {
    return `<div class="group-header">
      <span class="group-letter">GROUPE ${grp}</span>
      <span class="group-label">${done}/${total} matchs</span>
    </div>`;
  },

  _tableHtml(standings) {
    const rankClass = ['qualified-1st','qualified-2nd','third-place',''];
    const rankBg    = ['rank-1','rank-2','rank-3','rank-4'];
    let html = `<table class="standings-table"><thead><tr>
      <th>Équipe</th><th>J</th><th>Pts</th><th>GD</th>
    </tr></thead><tbody>`;
    standings.forEach((t, i) => {
      const gdColor  = t.gd > 0 ? 'var(--green)' : t.gd < 0 ? 'var(--accent)' : 'var(--text2)';
      const ptsColor = i < 2 ? 'var(--accent2)' : 'var(--text)';
      html += `<tr class="team-row ${rankClass[i]}">
        <td><div class="team-name-cell">
          <span class="team-rank ${rankBg[i]}">${i+1}</span>
          <span class="flag">${teamFlag(t.code)}</span>
          <span style="font-size:12px;font-family:'Barlow Condensed',sans-serif;font-weight:600;">${t.code}</span>
        </div></td>
        <td>${t.j}</td>
        <td style="font-weight:700;color:${ptsColor}">${t.pts}</td>
        <td style="color:${gdColor}">${t.gd > 0 ? '+' : ''}${t.gd}</td>
      </tr>`;
    });
    return html + '</tbody></table>';
  },

  _matchesHtml(grp, data, groupScores, officialScores) {
    let html = `<button class="group-matches-btn" onclick="GroupController.toggleMatches('${grp}')">
      ⚽ Matchs <span id="toggle-icon-${grp}">▼</span>
    </button>
    <div class="group-matches-section" id="matches-${grp}"><div class="matches-grid">`;

    data.matches.forEach((m, idx) => {
      const key        = `${grp}_${idx}`;
      const sc         = groupScores[key];
      const isOfficial = officialScores[key]?.official === true;
      const isLive     = officialScores[key]?.live === true;
      const s1         = sc?.s1 ?? '';
      const s2         = sc?.s2 ?? '';
      const done       = sc?.done;
      const w1         = done && sc.s1 > sc.s2;
      const w2         = done && sc.s2 > sc.s1;
      const scoreColor = isLive ? '#ff4444' : (done ? (isOfficial ? 'var(--green)' : 'var(--accent2)') : 'var(--text2)');
      const lockIcon   = isLive ? '<span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:6px;height:6px;border-radius:50%;background:#ff4444;animation:pulse 1.2s infinite;"></span>LIVE</span>' : (isOfficial ? '🔒' : (done ? '✓' : '○'));
      const lockColor  = isLive ? '#ff4444' : (isOfficial ? 'var(--green)' : (done ? 'var(--green)' : 'var(--border)'));
      const cursor     = isOfficial ? 'default' : 'pointer';
      const border     = isOfficial ? 'border-color:var(--green);' : '';

      html += `<div class="match-row" onclick="GroupController.openModal('${grp}',${idx})" style="cursor:${cursor};${border}">
        <span class="match-date">${m.d}</span>
        <div class="match-teams">
          <span class="match-team ${w1?'winner':''}">${teamFlag(m.t1)} ${m.t1}</span>
          <div class="match-score">
            <span style="font-family:'Bebas Neue',sans-serif;font-size:18px;color:${scoreColor};min-width:20px;text-align:right;">${s1!==''?s1:'—'}</span>
            <span class="score-separator">:</span>
            <span style="font-family:'Bebas Neue',sans-serif;font-size:18px;color:${scoreColor};min-width:20px;text-align:left;">${s2!==''?s2:'—'}</span>
          </div>
          <span class="match-team ${w2?'winner':''}">${m.t2} ${teamFlag(m.t2)}</span>
        </div>
        <span style="font-size:12px;color:${lockColor};">${lockIcon}</span>
      </div>`;
    });

    return html + '</div></div>';
  },

  toggleMatches(grp) {
    const section = document.getElementById(`matches-${grp}`);
    const icon    = document.getElementById(`toggle-icon-${grp}`);
    section.classList.toggle('open');
    icon.textContent = section.classList.contains('open') ? '▲' : '▼';
  }
};
