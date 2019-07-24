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
    push(actionValue) {
        if (this.getMaxSize() > this.getSize()) {
            this[queueSymbol].push(actionValue);
        }
    }
}