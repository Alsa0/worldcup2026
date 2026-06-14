const ChampionView = {
  render(knockout) {
    const section = document.getElementById('championSection');
    const finale  = knockout['f']?.[0];

    if (finale && finale.done && finale.winner) {
      const runner  = finale.winner === finale.t1 ? finale.t2 : finale.t1;
      const penNote = finale.pen1 !== null && finale.pen1 !== undefined
        ? ` (${finale.pen1} — ${finale.pen2} t.a.b.)` : '';
      section.innerHTML = `
        <div class="champion-display visible">
          <div class="champion-trophy">🏆</div>
          <div class="champion-label">Champion du Monde 2026</div>
          <div class="champion-name">${teamFlag(finale.winner, 48)} ${teamName(finale.winner)}</div>
          <div style="color:var(--text2);font-size:13px;font-family:'Barlow Condensed',sans-serif;letter-spacing:2px;margin-top:8px;">
            ${finale.t1} ${finale.s1} — ${finale.s2} ${finale.t2}${penNote}
          </div>
          <div style="margin-top:24px;">
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:16px 24px;text-align:center;">
              <div style="font-size:10px;color:var(--text2);letter-spacing:2px;font-family:'Barlow Condensed',sans-serif;text-transform:uppercase;margin-bottom:4px;">Finaliste</div>
              <div>${teamFlag(runner, 36)}</div>
              <div style="font-family:'Barlow Condensed',sans-serif;font-weight:600;margin-top:4px;">${teamName(runner)}</div>
            </div>
          </div>
        </div>`;
    } else {
      section.innerHTML = `
        <div style="color:var(--text2);font-family:'Barlow Condensed',sans-serif;letter-spacing:2px;font-size:14px;padding:40px;">
          🏆 Terminez la phase finale pour voir le champion !
        </div>`;
    }
  }
};
