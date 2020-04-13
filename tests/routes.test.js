const app = require('../server');
const request = require('supertest');

describe('Settings routes', () => {
  test('GET /api/settings should return settings', (done) => {
    request(app)
      .get('/api/settings')
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
      .post('/api/settings')
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

  test('DELETE /api/settings should return status 200', (done) => {
    request(app).delete('/api/settings').expect(200).end(done);
  });
});

describe('Build routes', () => {
  test('GET /api/builds should return build list', (done) => {
    request(app)
      .get('/api/builds')
      .expect(200)
      .expect([
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          buildNumber: 0,
          commitMessage: 'string',
          commitHash: 'string',
          branchName: 'string',
          authorName: 'string',
          status: 'Waiting',
          start: '13 апр, 22:32',
          duration: '-',
        },
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa9',
          configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          buildNumber: 0,
          commitMessage: 'string',
          commitHash: 'string',
          branchName: 'string',
          authorName: 'string',
          status: 'Waiting',
          start: '13 апр, 22:32',
          duration: '-',
        },
      ])
      .end(done);
  });
});
