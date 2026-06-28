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
    return officialKnockout?.[round]?.[idx]?.official === true;
  },

  mergeKnockoutIntoState(officialKnockout, localKnockout) {
    const merged = JSON.parse(JSON.stringify(localKnockout));
    Object.entries(officialKnockout).forEach(([round, matches]) => {
      if (!merged[round]) merged[round] = {};
      Object.entries(matches).forEach(([idx, val]) => {
        merged[round][idx] = { ...val, official: true };
      });
    });
    return merged;
  }
};
