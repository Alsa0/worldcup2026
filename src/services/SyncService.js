const SyncService = {
  mergeIntoState(officialScores, localScores) {
    const merged = { ...localScores };
    Object.entries(officialScores).forEach(([key, val]) => {
      merged[key] = { ...val, official: true };
    });
    return merged;
  },

  isOfficial(groupScores, key) {
    return groupScores[key]?.official === true;
  },

  isKnockoutOfficial(officialKnockout, round, idx) {
    return officialKnockout?.[round]?.[idx]?.official === true && officialKnockout?.[round]?.[idx]?.done === true;
  },

  mergeKnockoutIntoState(officialKnockout, localKnockout) {
    const merged = JSON.parse(JSON.stringify(localKnockout));
    Object.entries(officialKnockout).forEach(([round, matches]) => {
      if (!merged[round]) merged[round] = {};
      Object.entries(matches).forEach(([idx, val]) => {
        if (val.done) {
          merged[round][idx] = { ...val, official: true };
        } else {
          if (!merged[round][idx]) merged[round][idx] = { ...val };
          else {
            merged[round][idx].t1 = val.t1;
            merged[round][idx].t2 = val.t2;
          }
        }
      });
    });
    return merged;
  },
};
