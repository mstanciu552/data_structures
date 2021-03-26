class Heap {
  constructor(capacity, len) {
    this.arr = [];
    this.capacity = capacity;
    this.len = len;
  }
  insert() {}
  delete() {}
  extractMin() {}
}

export class MinHeap extends Heap {}

export class MaxHeap extends Heap {}
