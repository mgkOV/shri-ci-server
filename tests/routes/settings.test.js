jest.mock('../../middleware/downloader');

const app = require('../../server');
const request = require('supertest');
const downloader = require('../../middleware/downloader');
downloader.mockImplementation((req, res, next) => next());

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

  test('POST /api/settings should call downloader middleware', (done) => {
    downloader.mockClear();

    request(app)
      .post('/api/settings')
      .send({
        repoName: 'string',
        buildCommand: 'string',
        mainBranch: 'string',
        period: 0,
      })
      .expect(200)
      .expect(() => {
        expect(downloader).toHaveBeenCalled();
      })
      .end(done);
  });

  test('DELETE /api/settings should return status 200', (done) => {
    request(app).delete('/api/settings').expect(200).end(done);
  });
});
