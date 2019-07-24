const maxSizeSymbol = Symbol('Max Size');
const queueSymbol = Symbol('queue')

export default class ActionBuffer {
    constructor(maxSize=3) {
        this[maxSizeSymbol] = maxSize;
        this[queueSymbol] = [];
    }

    getSize () {
        return this[queueSymbol].length;
    }

    getMaxSize() {
        return this[maxSizeSymbol];
    }
    pop() {}
    peak() {}
    reset() {}
}