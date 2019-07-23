import * as client from '../views/scripts/client';

describe('The Client Javscript module', () => {
    it("It logs a command", () => {
        let logger = (message) => expect(message).toBe('hello world');
        client.log(logger);
    });
});