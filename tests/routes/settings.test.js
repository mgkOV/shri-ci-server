const data = require("../test-data")();

const app = require("../../server");
const request = require("supertest");

describe("Settings routes", () => {
  test("GET /api/settings should return settings", (done) => {
    request(app).get("/api/settings").expect(200).expect(data.settings.data).end(done);
  });

  test("POST /api/settings should return settings", (done) => {
    request(app)
      .post("/api/settings")
      .send(data.settings.data)
      .expect(200)
      .expect(data.settings.data)
      .end(done);
  });

  test("DELETE /api/settings should return status 200", (done) => {
    request(app).delete("/api/settings").expect(200).end(done);
  });
});
