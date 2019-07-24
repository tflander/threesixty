import ActionBuffer from '../views/util/ActionBuffer';

describe('The Action Buffer Class', function () {
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
});

describe('The Push Method', function () {
    let buffer;
    beforeEach(() => {
        buffer = new ActionBuffer();
    });

    it('should allow items to be pushed to the queue', () => {
        buffer.push('some value');
        expect(buffer.getSize()).toBe(1);
    });

    it('should not have more than maxSize items in the queue', () => {
        // default maxSize is 3
        buffer.push('some value');
        buffer.push('some value');
        buffer.push('some value');
        buffer.push('some value');
        expect(buffer.getSize()).toBe(3);
    });
});