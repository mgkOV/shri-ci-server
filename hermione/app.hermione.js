const assert = require('assert');

describe('App', function () {
  it('must be exist', function () {
    return this.browser
      .url('/')
      .isExisting('.App')
      .then((exist) => {
        assert.ok(exist, 'App is NOT exist');
      });
    //   .assertView('start page', '.App');
  });
});
