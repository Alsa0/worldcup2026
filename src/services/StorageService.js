const StorageService = {
  KEY: 'wc2026_state',

  save(state) {
    try { localStorage.setItem(this.KEY, JSON.stringify(state)); } catch (e) {}
  },

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return null;
      const state = JSON.parse(raw);
      KNOCKOUT_ROUNDS.forEach(round => {
        if (state.knockout?.[round]) {
          Object.values(state.knockout[round]).forEach(m => {
            if (!m.done) { m.t1 = 'TBD'; m.t2 = 'TBD'; m.winner = null; }
          });
        }
      });
      return state;
    } catch (e) { return null; }
  },

  clear() {
    try { localStorage.removeItem(this.KEY); } catch (e) {}
  }
};
