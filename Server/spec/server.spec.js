var request = require("request");

var base_url = "http://localhost:3000/"

describe("server", function () {
  
  describe("GET /command", function () {
  
    it("responds with 200 status", function (done) {
  
      request.get(`${base_url}command`, function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("POST /command", function () {
  
    it("responds with 200 status", function (done) {
  
      request.post(`${base_url}command`, function (error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});
