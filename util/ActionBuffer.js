const maxSizeSymbol = Symbol('Max Size');
const queueSymbol = Symbol('queue')

module.exports = function ActionBuffer(maxSize = 3) {
    this[maxSizeSymbol] = maxSize;
    this[queueSymbol] = new Array();

    this.getSize = function () {
        return this[queueSymbol].length;
    }

    this.getMaxSize = function () {
        return this[maxSizeSymbol];
    }

    this.push = function (actionValue) {
        if (this.getMaxSize() <= this.getSize()) {
            this.pop(); // throw away the oldest value
        }
        this[queueSymbol].push(actionValue);
    }

    this.pop = function () {
        return this[queueSymbol].shift();
    }

    this.reset = function () {
        this[queueSymbol] = new Array();
    }
}