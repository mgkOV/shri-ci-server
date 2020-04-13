const app = require('../server');
const request = require('supertest');

describe('/api/settings', () => {
  test('GET should return settings', done => {
    request(app)
      .get('/api/settings/')
      .expect(200)
      .expect({
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        repoName: 'string',
        buildCommand: 'string',
        mainBranch: 'string',
        period: 0
      })
      .end(done);
  });
});
