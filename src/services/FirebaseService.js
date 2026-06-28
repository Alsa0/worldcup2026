const FirebaseService = {
  DB_URL: 'https://worldcup-2o26-default-rtdb.firebaseio.com',

  async getOfficialScores() {
    try {
      const res = await fetch(`${this.DB_URL}/officialScores.json`);
      const data = await res.json();
      return data || {};
    } catch (e) { return {}; }
  },

  listenOfficialScores(callback) {
    const poll = async () => {
      const scores = await this.getOfficialScores();
      callback(scores);
    };
    poll();
    setInterval(poll, 2 * 60 * 1000);
  },

  async getOfficialKnockout() {
    try {
      const res = await fetch(`${this.DB_URL}/officialKnockout.json`);
      const data = await res.json();
      return data || {};
    } catch (e) { return {}; }
  },

  listenOfficialKnockout(callback) {
    const poll = async () => {
      const knockout = await this.getOfficialKnockout();
      callback(knockout);
    };
    poll();
    setInterval(poll, 2 * 60 * 1000);
  }
};

