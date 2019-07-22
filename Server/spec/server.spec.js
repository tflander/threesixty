var request = require("request");

var base_url = "http://localhost:3000/"

describe("server", () => {

  describe("GET /command", () => {

    it("responds with 200 status", done => {

      request.get(`${base_url}command`, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("POST /command", () => {

    it("responds with 200 status", done => {

      request.post(`${base_url}command`, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

  });

  describe("storing a turn command", () => {
    it("stores a left turn command", done => {
      request.post(`${base_url}command`,
        {
          json: {
            direction: 'left'
          }
        }, (error, response, body) => {
          request.get(`${base_url}command`, (error, response, body) => {
            expect(body).toBe('left');
            done()
          });
        })
    });

    it("stores a right turn command", done => {
      request.post(`${base_url}command`,
        {
          json: {
            direction: 'right'
          }
        }, (error, response, body) => {
          request.get(`${base_url}command`, (error, response, body) => {
            expect(body).toBe('right');
            done()
          });
        })
    });
  });
});
