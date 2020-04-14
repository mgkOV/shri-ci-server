jest.mock('../../utils/build-runner');

const app = require('../../server');
const request = require('supertest');

describe('Builds routes', () => {
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
          commitHash: 'a1882dc9558cff2e4293b048256dc3a1850ec342',
          branchName: 'string',
          authorName: 'string',
          status: 'Waiting',
          start: '13 апр, 22:32',
          duration: '-',
        },
      ])
      .end(done);
  });

  test('GET /api/builds/:id should return build ', (done) => {
    request(app)
      .get('/api/builds/1234567')
      .expect(200)
      .expect({
        id: '1234567',
        configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        buildNumber: 0,
        commitMessage: 'string',
        commitHash: 'string',
        branchName: 'string',
        authorName: 'string',
        status: 'Waiting',
        start: '13 апр, 22:34',
        duration: '-',
      })
      .end(done);
  });

  test('GET /api/builds/:id/logs should return build log', (done) => {
    request(app)
      .get('/api/builds/1234567/logs')
      .expect(200)
      .expect('Test 1234567 log')
      .end(done);
  });

  test('POST /api/builds/:hash should return build', (done) => {
    request(app)
      .post('/api/builds/a1882dc9558cff2e4293b048256dc3a1850ec342')
      .expect(200)
      .expect({
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa9',
        configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        buildNumber: 0,
        commitMessage: 'string',
        commitHash: 'a1882dc9558cff2e4293b048256dc3a1850ec342',
        branchName: 'string',
        authorName: 'string',
        status: 'Waiting',
        start: '2020-04-13T19:32:03.668Z',
        duration: 0,
      })
      .end(done);
  });

  test('POST /api/builds/:hash should add build to queue', (done) => {
    const { addBuilds } = require('../../utils/build-runner');
    addBuilds.mockReset();

    request(app)
      .post('/api/builds/a1882dc9558cff2e4293b048256dc3a1850ec342')
      .expect(200)
      .expect(() => {
        expect(addBuilds).toHaveBeenCalledWith({
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa9',
          configurationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          buildNumber: 0,
          commitMessage: 'string',
          commitHash: 'a1882dc9558cff2e4293b048256dc3a1850ec342',
          branchName: 'string',
          authorName: 'string',
          status: 'Waiting',
          start: '2020-04-13T19:32:03.668Z',
          duration: 0,
        });
      })
      .end(done);
  });
});
