const maxSizeSymbol = Symbol("Max Size");

export default class ActionBuffer {
    constructor() {
        this[maxSizeSymbol] = 3;
    }
    getMaxSize() {
        return this[maxSizeSymbol];
    }
    pop() {}
    peak() {}
    reset() {}
}