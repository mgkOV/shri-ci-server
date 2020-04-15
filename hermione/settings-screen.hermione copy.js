const assert = require('assert');

describe('App', function () {
  xit('Settings screenshot must be identical', function () {
    return this.browser.url('/settings').assertView('Setting screen', 'body');
  });

  xit('Settings screenshot must be identical mobile screen', function () {
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

  it('Click on input cleaner should clear input', function () {
    return this.browser
      .url('/settings')
      .click('#repository-name + .FieldSuite-Cleaner')
      .getValue('#repository-name')
      .then((value) => {
        assert.strictEqual(value, '', 'Don clean input');
      });
  });
});
