const assert = require('assert');

describe('App', function () {
  it('must be exist', function () {
    return this.browser
      .url('/')
      .isExisting('.App')
      .then((exist) => {
        assert.ok(exist, 'App is NOT exist');
      });
  });

  it('Build list screenshot must be identical', function () {
    return this.browser.url('/').assertView('Build list screen', 'body');
  });

  it('Settings screenshot must be identical', function () {
    return this.browser.url('/settings').assertView('Setting screen', 'body');
  });
});
