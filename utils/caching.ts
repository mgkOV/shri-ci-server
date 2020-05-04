interface Cache {
  _data: {
    [key: string]: {
      buildId: string;
      log: string;
      cacheDate: Date;
    };
  };
  addLog({ buildId, log }: { buildId: string; log: string }): void;
  delete(buildId: string): void;
  deleteOldCash(): void;
  fetchLog(buildId: string): string | null;
}

const cache: Cache = {
  _data: {},

  addLog({ buildId, log }) {
    this._data[buildId] = { buildId, log, cacheDate: new Date() };
  },

  delete(buildId) {
    delete this._data[buildId];
  },

  // Вызываем этот метод при изминении настроек
  deleteOldCash(): void {
    this._data = {};
  },

  fetchLog(buildId) {
    if (!this._data[buildId]) return null;

    return this._data[buildId].log;
  },
};

export const fetchLog = cache.fetchLog.bind(cache);
export const addLog = cache.addLog.bind(cache);
export const deleteOldCash = cache.deleteOldCash.bind(cache);
