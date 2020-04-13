const app = require('../server');
const request = require('supertest');

describe('Routes', () => {
  test('GET /api/settings should return settings', (done) => {
    request(app)
      .get('/api/settings/')
      .expect(200)
      .expect({
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        repoName: 'string',
        buildCommand: 'string',
        mainBranch: 'string',
        period: 0,
      })
      .end(done);
  });

  test('POST /api/settings should return settings', (done) => {
    request(app)
      .post('/api/settings/')
      .send({
        repoName: 'string',
        buildCommand: 'string',
        mainBranch: 'string',
        period: 0,
      })
      .expect(200)
      .expect({
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        repoName: 'string',
        buildCommand: 'string',
        mainBranch: 'string',
        period: 0,
      })
      .end(done);
  });
});
