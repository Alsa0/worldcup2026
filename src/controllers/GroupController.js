const GroupController = {
  openModal(grp, idx) {
    const key = `${grp}_${idx}`;
    const isOfficial = SyncService.isOfficial(App.state.groupScores, key);

    if (isOfficial) {
      App.showToast('Ce résultat est officiel', 'error');
      return;
    }

    const m = GROUPS[grp].matches[idx];
    const sc = App.state.groupScores[key];

    document.getElementById('modalTitle').textContent = `Groupe ${grp} — ${m.d}`;
    document.getElementById('modalTeam1').innerHTML = `${teamFlag(m.t1, 24)} ${teamName(m.t1)}`;
    document.getElementById('modalTeam2').innerHTML = `${teamFlag(m.t2, 24)} ${teamName(m.t2)}`;
    document.getElementById('modalScore1').value = sc?.s1 ?? 0;
    document.getElementById('modalScore2').value = sc?.s2 ?? 0;
    document.getElementById('penaltySection').style.display = 'none';

    App.currentModal = { type: 'group', grp, idx, key };
    document.getElementById('scoreModal').classList.add('open');
    setTimeout(() => document.getElementById('modalScore1').focus(), 100);
  },

  confirmScore(s1, s2) {
    App.state.groupScores[App.currentModal.key] = { s1, s2, done: true, official: false };
    StorageService.save(App.state);
    GroupView.render(App.state.groupScores, App.state.officialScores);
    App.syncKnockout();
    App.showToast('Score enregistré dans votre simulation !');
  },

  toggleMatches(grp) {
    GroupView.toggleMatches(grp);
  }
};
