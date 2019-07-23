import * as client from '../views/scripts/client';
import * as axios from 'axios';

var base_url = "http://localhost:3000/"

describe('The Client Javscript module', () => {
    it('accepts a string command', async () => {
        const response = await client.post('moveLeft', mockPost);
        expect(response.status).toBe(200);
    });

    it('should do a post', async () => {
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