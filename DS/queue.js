export default class Queue {
    constructor() {
        this.data = [];
    }

    getFirst() {
        try {
            const res = this.data[0];

            // Change this to a hand-written algorithm
            this.data.shift();

            return res;
        } catch {
            return `Queue is empty!`;
        }
    }

    add(data) {
        this.data.push(data);
    }
}

