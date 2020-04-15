const assert = require('assert');

describe('App', function () {
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
