import ActionBuffer from '../views/util/ActionBuffer';

describe('The Action Buffer Class', () => {
    let buffer;
    beforeEach(() => {
        buffer = new ActionBuffer();
    });

    it('Should have a default maxSize of 3', () => {
        expect(buffer.getMaxSize()).toBe(3);
    });

    it('should initialize with an empty queue', () => {
        expect(buffer.getSize()).toBe(0);
    });

    it('should allow items to be pushed to the queue', () => {
        buffer.push('some value');
        expect(buffer.getSize()).toBe(1);
    });
});