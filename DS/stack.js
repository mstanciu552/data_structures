class Stack {
    static #data;
    constructor() {
        this.data = [];
    }

    push(element) {
        this.data.push(element);
    }

    pop() { 
        this.data.pop();
    }

    // TODO: Have to change this
    getLast() {
        return this.data[this.data.length - 1];
    }
}

module.exports = { Stack };
