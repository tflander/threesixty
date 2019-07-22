const axios = require('axios');

var base_url = "http://localhost:3000/"

describe("server", () => {

  describe("GET /command", () => {

    it("responds with 200 status", async () => {
      let response = await axios.get(`${base_url}command`);
      expect(response.status).toBe(200);
    });
  });

  describe("POST /command", () => {

    it("responds with 200 status", async () => {
      let response = await axios.post(`${base_url}command`);
      expect(response.status).toBe(200);
    });

  });

  describe("storing a turn command", () => {
    it("stores a left turn command", async () => {
      await axios.post(`${base_url}command`,
        {
          direction: 'left'
        });

      let { data } = await axios.get(`${base_url}command`);

      expect(data).toBe('left');

    });

    it("stores a right turn command", async () => {
      await axios.post(`${base_url}command`,
        {
          direction: 'right'
        });
      let { data } = await axios.get(`${base_url}command`);
      expect(data).toBe('right');
    })
  });

  it('clears after one call', async() => {
    await axios.post(`${base_url}command`,
      {
        direction: 'right'
      });
    await axios.get(`${base_url}command`);
    let { data } = await axios.get(`${base_url}command`);

    expect(data).toBe('');
  });
});
