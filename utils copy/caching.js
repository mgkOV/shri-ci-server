const cache = {
  _data: {},

  addLog({ buildId, log }) {
    this._data[buildId] = { buildId, log, cacheDate: new Date() };
  },

  delete(buildId) {
    delete this._data[buildId];
  },

  // Вызываем этот метод при изминении настроек
  deleteOldCash() {
    this._data = {};
  },

  fetchLog(buildId) {
    if (!this._data[buildId]) return null;

    return this._data[buildId].log;
  }
};

module.exports = {
  fetchLog: cache.fetchLog.bind(cache),
  addLog: cache.addLog.bind(cache),
  deleteOldCash: cache.deleteOldCash.bind(cache)
};
