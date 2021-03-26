export default class Stack {
    constructor() {
        this.data = [];
    }

    push(element) {
        this.data.push(element);
    }

    pop() {
        this.data.pop();
    }

    getLast() {
        return this.data[this.data.length - 1];
    }
}

