const cache = {
  _data: {},

  addLog({ buildId, configurationId, log }) {
    this._data[buildId] = { buildId, configurationId, log, cacheDate: new Date() };
  },

  delete(buildId) {
    delete this._data[buildId];
  },

  // deleteOld(configurationId) {
  //   for (let log in this._data) {

  //   }
  // }

  fetchLog(buildId, configurationId) {
    if (!this._data[buildId]) return null;

    if (configurationId === this._data[buildId].configurationId) {
      return this._data[buildId].log;
    }
    // else {
    //   this.deleteOld(this._data[buildId].configurationId)
    // }
  }
};

module.exports = {
  fetchLog: cache.fetchLog.bind(cache),
  addLog: cache.addLog.bind(cache)
};
