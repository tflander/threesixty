const maxSizeSymbol = Symbol("Max Size");

export default class ActionBuffer {
    constructor(maxSize=3) {
        this[maxSizeSymbol] = maxSize;
    }
    getMaxSize() {
        return this[maxSizeSymbol];
    }
    pop() {}
    peak() {}
    reset() {}
}