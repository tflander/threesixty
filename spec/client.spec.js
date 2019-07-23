import * as client from '../views/scripts/client';
const axios = require('axios');
var base_url = "http://localhost:3000/"

describe('The Client Javscript module', () => {
    it('logs a command', () => {
        let logger = (message) => expect(message).toBe('hello world');
        client.log(logger);
    });

    it('accepts a string command', async () => {
        const response = await client.post('moveLeft', mockPost);
        expect(response.status).toBe(200);
    });
    
    it('should do a post', async () =>  {
        const response = await client.post('something', mockPost);
        let { data } = await axios.get(`${base_url}command`);
        expect(data).toBe('something');
    });
});

const mockPost = (message) => {
    return axios.post(`${base_url}command`, {
        direction: message
      });
}