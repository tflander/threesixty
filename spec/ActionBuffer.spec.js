const ActionBuffer = require('../util/ActionBuffer');

describe('The Action Buffer Class', function () {
    let buffer;

    beforeEach(() => {
        buffer = new ActionBuffer();
    });

    it('Should have a default maxSize of 3', () => {
        expect(buffer.getMaxSize()).toBe(3);
    });

    it('Should allow maxSize to be set in the constructor', () => {
        buffer = new ActionBuffer(5);
        expect(buffer.getMaxSize()).toBe(5);
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

    it('should replace the oldest value in the queue when more values are added than maxSize allows', () => {
        // default maxSize is 3
        buffer.push('throw-away value');
        buffer.push('expected value');
        buffer.push('newer value');
        buffer.push('newest value');

        expect(buffer.pop()).toBe('expected value');
    });
});

describe('The Pop Method', function () {
    let buffer;

    beforeEach(() => {
        buffer = new ActionBuffer();
    });

    it('Should return the first oldest element in the queue', () => {
        buffer.push('oldest value');
        buffer.push('middle value');
        buffer.push('newest value');

        expect(buffer.pop()).toBe('oldest value');
    });

    it('should adjust the length of the queue', () => {
        buffer.push('oldest value');
        buffer.push('middle value');
        buffer.push('newest value');
        buffer.pop();

        expect(buffer.getSize()).toBe(2);
    });
});


describe('The reset method', function () {
    let buffer;

    beforeEach(() => {
        buffer = new ActionBuffer();
        buffer.push('some value');
        buffer.push('some value');
        buffer.push('some value');
        buffer.reset();
    });

    it('Should still have a default maxSize of 3', () => {
        expect(buffer.getMaxSize()).toBe(3);
    });

    it('should reset to an empty queue', () => {
        expect(buffer.getSize()).toBe(0);
    });
});