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

  it('Build list screenshot must be identical on mobile screen', function () {
    return this.browser
      .setViewportSize(
        {
          width: 365,
          height: 865,
        },
        false
      )
      .url('/')
      .assertView('Build list mobile screen', 'body');
  });

  it('Settings screenshot must be identical', function () {
    return this.browser.url('/settings').assertView('Setting screen', 'body');
  });

  it('Settings screenshot must be identical mobile screen', function () {
    return this.browser
      .setViewportSize(
        {
          width: 365,
          height: 865,
        },
        false
      )
      .url('/settings')
      .assertView('Setting mobile screen', 'body');
  });
});
