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

  it('Click on input cleaner should clear input', function () {
    return this.browser
      .url('/settings')
      .click('#repository-name + .FieldSuite-Cleaner')
      .getValue('#repository-name')
      .then((value) => {
        assert.strictEqual(value, '', 'Don clean input');
      });
  });

  it('Success submit form should redirect to build histroy screen', function () {
    return this.browser
      .url('/settings')
      .submitForm('.Form')
      .waitForExist('.History', 1500);
  });
});
