const KnockoutView = {
  render(knockout, officialScores = {}) {
    const container = document.getElementById('knockoutBracket');
    container.innerHTML = '';

    const bracket = document.createElement('div');
    bracket.className = 'bracket';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'bracket-svg');
    bracket.appendChild(svg);

    KNOCKOUT_ROUNDS.forEach((round, ri) => {
      bracket.appendChild(this._buildColumn(round, ri, knockout, officialScores));
    });

    container.appendChild(bracket);
    setTimeout(() => this._drawLines(knockout), 50);
  },

  _buildColumn(round, ri, knockout, officialScores) {
    const size = KNOCKOUT_SIZES[ri];
    const col = document.createElement('div');
    col.className = 'bracket-round';

    const title = document.createElement('div');
    title.className = 'bracket-round-title';
    title.textContent = ROUND_LABELS[round];
    col.appendChild(title);

    const matchesDiv = document.createElement('div');
    matchesDiv.className = 'bracket-matches';

    for (let i = 0; i < size; i++) {
      matchesDiv.appendChild(this._buildMatch(round, ri, i, knockout, officialScores));
    }

    col.appendChild(matchesDiv);
    return col;
  },

  _buildMatch(round, ri, i, knockout, officialScores) {
    const raw = knockout[round]?.[i];
    const m = raw || { t1: 'TBD', t2: 'TBD', s1: null, s2: null, pen1: null, pen2: null, done: false, winner: null };
    const isOfficial = m.official === true;
    const card = document.createElement('div');
    card.className = 'bracket-match';
    card.id = `match-${round}-${i}`;

    if (isOfficial) card.style.borderColor = 'var(--green)';

    const dates = ROUND_DATES[round];
    const dateStr = dates[Math.floor(i / (KNOCKOUT_SIZES[ri] / dates.length))] || '';
    const label = round === 'r16' && R16_PAIRS[i] ? R16_PAIRS[i].label : '';
    const lock = '';

    const score1 = m.done && m.s1 !== null ? (m.pen1 !== null ? `${m.s1} <small>(${m.pen1})</small>` : m.s1) : '';
    const score2 = m.done && m.s2 !== null ? (m.pen2 !== null ? `${m.s2} <small>(${m.pen2})</small>` : m.s2) : '';
    const w1 = m.done && m.winner === m.t1 ? 'winner' : '';
    const w2 = m.done && m.winner === m.t2 ? 'winner' : '';
    const cursor = isOfficial ? 'default' : 'pointer';

    card.innerHTML = `
      <div class="bracket-match-meta">
        <span>${dateStr}</span>
        <span style="font-size:8px;opacity:0.7;">${label}${lock}</span>
      </div>
      <div class="bracket-team ${w1}" onclick="KnockoutController.openModal('${round}',${i})" style="cursor:${cursor}">
        <span class="bracket-team-flag">${teamFlag(m.t1)}</span>
        <span class="bracket-team-name">${m.t1 || 'TBD'}</span>
        <span class="bracket-team-score">${score1}</span>
      </div>
      <div class="bracket-team ${w2}" onclick="KnockoutController.openModal('${round}',${i})" style="cursor:${cursor}">
        <span class="bracket-team-flag">${teamFlag(m.t2)}</span>
        <span class="bracket-team-name">${m.t2 || 'TBD'}</span>
        <span class="bracket-team-score">${score2}</span>
      </div>`;

    return card;
  },

  _drawLines(knockout) {
    const bracket = document.querySelector('.bracket');
    if (!bracket) return;
    const svg = bracket.querySelector('.bracket-svg');
    if (!svg) return;
    svg.innerHTML = '';

    const rect = bracket.getBoundingClientRect();

    for (let ri = 0; ri < KNOCKOUT_ROUNDS.length - 1; ri++) {
      const round = KNOCKOUT_ROUNDS[ri];
      const nextRound = KNOCKOUT_ROUNDS[ri + 1];
      const size = KNOCKOUT_SIZES[ri];

      for (let i = 0; i < size; i++) {
        const c1 = document.getElementById(`match-${round}-${i}`);
        const c2 = document.getElementById(`match-${nextRound}-${Math.floor(i / 2)}`);
        if (!c1 || !c2) continue;

        const r1 = c1.getBoundingClientRect();
        const r2 = c2.getBoundingClientRect();
        const x1 = r1.right - rect.left;
        const y1 = r1.top + r1.height / 2 - rect.top;
        const x2 = r2.left - rect.left;
        const y2 = r2.top + r2.height / 2 - rect.top;
        const midX = x1 + (x2 - x1) / 2;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`);
        path.setAttribute('class', 'bracket-path');

        const m1 = knockout[round]?.[i];
        const m2 = knockout[nextRound]?.[Math.floor(i / 2)];
        if (m1?.done && m1.winner && m1.winner !== 'TBD') {
          const ok = (i % 2 === 0 && m2?.t1 === m1.winner) || (i % 2 === 1 && m2?.t2 === m1.winner);
          if (ok) path.classList.add('highlighted');
        }

        svg.appendChild(path);
      }
    }
  }
};

window.addEventListener('resize', () => {
  if (document.getElementById('tab-finale')?.classList.contains('active')) {
    KnockoutView._drawLines(App.state.knockout);
  }
});
