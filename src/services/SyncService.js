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
  }
};
