jest.mock('../../utils/build-runner');
const data = require('../test-data')();

const app = require('../../server');
const request = require('supertest');

describe('Builds routes', () => {
  test('GET /api/builds should return build list', (done) => {
    request(app)
      .get('/api/builds')
      .expect(200)
      .expect(data.buildListWithFormatedData.data)
      .end(done);
  });

  test('GET /api/builds/:id should return build ', (done) => {
    request(app)
      .get('/api/builds/1234567')
      .expect(200)
      .expect(
        Object.assign({}, data.build.data, {
          id: '1234567',
          start: '06 апр, 18:03',
          duration: '1 мин 14 сек',
        })
      )
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
      .post('/api/builds/c7b8eb22c1e6134eb0d08dd4f878fcbfbb2e4865')
      .expect(200)
      .expect(
        Object.assign({}, data.build.data, {
          start: '06 апр, 18:03',
          duration: '1 мин 14 сек',
        })
      )
      .end(done);
  });

  test('POST /api/builds/:hash should add build to queue', (done) => {
    const { addBuilds } = require('../../utils/build-runner');
    addBuilds.mockReset();

    request(app)
      .post('/api/builds/c7b8eb22c1e6134eb0d08dd4f878fcbfbb2e4865')
      .expect(200)
      .expect(() => {
        expect(addBuilds).toHaveBeenCalledWith(
          Object.assign({}, data.build.data, {
            start: '06 апр, 18:03',
            duration: '1 мин 14 сек',
          })
        );
      })
      .end(done);
  });
});
