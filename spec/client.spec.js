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
        let {data} = await axios.get(`${base_url}command`);
        expect(data).toBe('something');
    });
});

describe('The user interaction handler', () => {
    it('should return the buttons direction', () => {
        expect(client.getDirectionPayload(fakeEvent).direction, 'left');
    });
    it('should return a string.', () => {
        expect(typeof client.getZoomMeetingID({
            'value': '123456789'
        })).toBe('string');
        expect(client.getZoomMeetingID({
            'value': '123456789'
        })).toBe('123456789');
    });
    it('should return a valid meeting URL', () => {
        let meetingID = '123456789';
        const validURL = `https://zoom.us/wc/${meetingID}/join`;
        expect(client.getZoomMeetingURL(meetingID)).toBe(validURL);
    });
});


const fakeEvent = {
    preventDefault: () => {
    },
    target: {
        'dataset': {
            'action': 'left'
        }
    }
};

const mockPost = (message) => {
    return axios.post(`${base_url}command`, {
        direction: message
    });
}