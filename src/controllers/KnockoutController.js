const KnockoutController = {
  openModal(round, idx) {
    const m = App.state.knockout[round]?.[idx];
    if (!m) return;

    if ((!m.t1 || m.t1 === 'TBD') && (!m.t2 || m.t2 === 'TBD')) {
      App.showToast('Les équipes ne sont pas encore connues.');
      return;
    }

    if (m.official) {
      App.showToast('Ce résultat est officiel 🔒', 'error');
      return;
    }

    document.getElementById('modalTitle').textContent  = `${ROUND_LABELS[round]} — Match ${idx + 1}`;
    document.getElementById('modalTeam1').innerHTML    = `${teamFlag(m.t1, 24)} ${teamName(m.t1)}`;
    document.getElementById('modalTeam2').innerHTML    = `${teamFlag(m.t2, 24)} ${teamName(m.t2)}`;
    document.getElementById('modalScore1').value       = m.done ? m.s1 : 0;
    document.getElementById('modalScore2').value       = m.done ? m.s2 : 0;

    const penSec = document.getElementById('penaltySection');
    const hasPen = m.done && m.pen1 !== null && m.pen1 !== undefined;
    penSec.style.display = hasPen ? 'block' : 'none';
    document.getElementById('modalPen1').value         = m.pen1 ?? 0;
    document.getElementById('modalPen2').value         = m.pen2 ?? 0;
    document.getElementById('modalPenTeam1').innerHTML = teamFlag(m.t1, 16);
    document.getElementById('modalPenTeam2').innerHTML = teamFlag(m.t2, 16);

    App.currentModal = { type: 'knockout', round, idx };
    document.getElementById('scoreModal').classList.add('open');
    setTimeout(() => document.getElementById('modalScore1').focus(), 100);
  },

  confirmScore(round, idx, s1, s2, pen1, pen2) {
    if (s1 === s2 && pen1 === pen2) {
      App.showToast('Les tirs au but ne peuvent pas être à égalité !', 'error');
      return false;
    }
    const ok = Knockout.setResult(App.state.knockout, round, idx, s1, s2, pen1, pen2);
    if (!ok) { App.showToast('Erreur dans les tirs au but !', 'error'); return false; }
    Knockout.propagate(App.state.knockout);
    StorageService.save(App.state);
    KnockoutView.render(App.state.knockout, App.state.officialScores);
    ChampionView.render(App.state.knockout);
    App.showToast('Résultat enregistré dans votre simulation !');
    return true;
  }
};
