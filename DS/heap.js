class Heap {
    constructor(capacity) {
        if (this.constructor === Heap)
            throw new TypeError('Abstract class Heap cannot be instanciated!');
        this.arr = [];
        this.capacity = capacity;
        this.len = 0;
        this.balance();
    }

    balance() {}

    insert(val) {
        this.arr[this.len] = val;
        this.len++;
        this.balance();
    }
    delete(val) {
        let idx = this.arr.indexOf(val);
        if (idx === -1) return;
        this.arr.splice(idx, 1);
    }
}

export class MinHeap extends Heap {
    constructor(capacity) {
        super(capacity);
    }
    balance() {
        // TODO Implement heap balancing algorithm
        console.log('Balanced');
    }
    extractMin() {}
}

export class MaxHeap extends Heap {
    constructor(capacity) {
        super(capacity);
    }
    balance() {}
    extractMax() {}
}
