const caching = require('../../utils/caching');

describe('Cachin', () => {
  test('Caching should cache string', () => {
    caching.addLog({ buildId: '12345', log: 'My test log' });
    expect(caching.fetchLog('12345')).toBe('My test log');
  });
});
