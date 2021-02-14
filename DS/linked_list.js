
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }

    setNext(next) {
        this.next = next;
    }
}


class LinkedList {
    constructor(data) {
        this.head = new Node(data);
        this.next = null;
    }

    setNext(data) {
        this.next = new LinkedList(data);
        this.head.setNext(new Node(data));
    }

    getData() {
        return this.head.data;
    }
}

module.exports = { LinkedList };
