import ActionBuffer from '../views/util/ActionBuffer';

describe('The Action Buffer Class', () => {
    it('Should have a default maxSize of 3', () => {
        const buffer = new ActionBuffer();
        expect(buffer.getMaxSize()).toBe(3);
    })
});