class Heap {
    constructor(capacity) {
        if (this.constructor === Heap)
            throw new TypeError('Abstract class Heap cannot be instanciated!')
        this.arr = []
        this.capacity = capacity
        this.len = 0
    }

    balance() {}

    insert(val) {
        this.len++
        this.arr[this.len] = val
        this.balance()
    }
    delete(val) {}
}

const fun = el => {}

export class MinHeap extends Heap {
    constructor(capacity) {
        super(capacity)
    }
    balance() {}
    extractMin() {}
}

export class MaxHeap extends Heap {
    constructor(capacity) {
        super(capacity)
    }
    balance() {}
    extractMax() {}
}
