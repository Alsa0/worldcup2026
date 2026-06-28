const App = {
  state: { groupScores: {}, knockout: {}, officialScores: {} },
  currentModal: null,

  async init() {
    const saved = StorageService.load();
    if (saved) this.state = { ...this.state, ...saved };

    const official = await FirebaseService.getOfficialScores();
    const officialKnockout = await FirebaseService.getOfficialKnockout();
    this.state.officialScores = official;
    this.state.officialKnockout = officialKnockout;
    this.state.groupScores = SyncService.mergeIntoState(official, StorageService.load()?.groupScores || {});

    this.syncKnockout();
    GroupView.render(this.state.groupScores, this.state.officialScores);
    KnockoutView.render(this.state.knockout, this.state.officialScores);
    ChampionView.render(this.state.knockout);
    this._bindEvents();

    FirebaseService.listenOfficialScores(scores => {
      this.state.officialScores = scores;
      const local = StorageService.load()?.groupScores || {};
      this.state.groupScores = SyncService.mergeIntoState(scores, local);
      this.syncKnockout();
      GroupView.render(this.state.groupScores, this.state.officialScores);
      KnockoutView.render(this.state.knockout, this.state.officialScores);
      ChampionView.render(this.state.knockout);
    });

    FirebaseService.listenOfficialKnockout(knockout => {
      this.state.officialKnockout = knockout;
      this.syncKnockout();
      KnockoutView.render(this.state.knockout, this.state.officialKnockout);
      ChampionView.render(this.state.knockout);
    });
  },

  syncKnockout() {
    Knockout.updateFromGroups(this.state.knockout, this.state.groupScores);
    this.state.knockout = SyncService.mergeKnockoutIntoState(
      this.state.officialKnockout || {},
      this.state.knockout
    );
    Knockout.propagate(this.state.knockout);
    StorageService.save(this.state);
  },

  showToast(msg, type = 'success') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.style.borderColor = type === 'error' ? 'var(--accent)' : 'var(--green)';
    t.style.color = type === 'error' ? 'var(--accent)' : 'var(--green)';
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
  },

  _bindEvents() {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'Enter' && this.currentModal) confirmModalScore();
    });
    document.getElementById('scoreModal').addEventListener('click', function (e) {
      if (e.target === this) closeModal();
    });
  }
};

function showTab(name) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`tab-${name}`).classList.add('active');
  document.querySelectorAll('.nav-tab').forEach(t => {
    if (t.getAttribute('onclick')?.includes(`'${name}'`)) t.classList.add('active');
  });
  if (name === 'finale') {
    App.syncKnockout();
    KnockoutView.render(App.state.knockout, App.state.officialScores);
  }
  if (name === 'champion') ChampionView.render(App.state.knockout);
}

function closeModal() {
  document.getElementById('scoreModal').classList.remove('open');
  App.currentModal = null;
}

function checkPenalty() {
  if (!App.currentModal || App.currentModal.type !== 'knockout') return;
  const s1 = parseInt(document.getElementById('modalScore1').value) || 0;
  const s2 = parseInt(document.getElementById('modalScore2').value) || 0;
  document.getElementById('penaltySection').style.display = s1 === s2 ? 'block' : 'none';
}

function confirmModalScore() {
  if (!App.currentModal) return;
  const s1 = parseInt(document.getElementById('modalScore1').value) || 0;
  const s2 = parseInt(document.getElementById('modalScore2').value) || 0;

  if (App.currentModal.type === 'group') {
    GroupController.confirmScore(s1, s2);
    closeModal();
  } else if (App.currentModal.type === 'knockout') {
    const pen1 = parseInt(document.getElementById('modalPen1').value) || 0;
    const pen2 = parseInt(document.getElementById('modalPen2').value) || 0;
    const ok = KnockoutController.confirmScore(App.currentModal.round, App.currentModal.idx, s1, s2, pen1, pen2);
    if (ok) closeModal();
  }
}

function autoSimulate() {
  Object.keys(GROUPS).forEach(grp => {
    GROUPS[grp].matches.forEach((_, idx) => {
      const key = `${grp}_${idx}`;
      if (!App.state.groupScores[key]?.done) {
        App.state.groupScores[key] = {
          s1: Math.floor(Math.random() * 5),
          s2: Math.floor(Math.random() * 5),
          done: true, official: false
        };
      }
    });
  });
  App.syncKnockout();
  GroupView.render(App.state.groupScores, App.state.officialScores);
  Knockout.simulateRandom(App.state.knockout);
  StorageService.save(App.state);
  KnockoutView.render(App.state.knockout, App.state.officialScores);
  ChampionView.render(App.state.knockout);
  App.showToast('Simulation complète !');
}

function resetAll() {
  if (!confirm('Réinitialiser votre simulation personnelle ?')) return;
  const official = App.state.officialScores;
  App.state = {
    groupScores: SyncService.mergeIntoState(official, {}),
    knockout: {},
    officialScores: official
  };
  StorageService.clear();
  App.syncKnockout();
  GroupView.render(App.state.groupScores, App.state.officialScores);
  KnockoutView.render(App.state.knockout, App.state.officialScores);
  ChampionView.render(App.state.knockout);
  App.showToast('Simulation réinitialisée !');
}

App.init();
