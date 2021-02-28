class LinkedList {
    #ll;
    constructor(data, next = null) {
        this.data = data;
        this.next = next !== null ? new LinkedList(next) : null;
        this.#ll = this;
    }
    setNext(val) {
        this.#ll.next = new LinkedList(val);
        this.#ll = this.#ll.next; 
    }
    static convertArray(arr) {
        let res = new LinkedList(arr[0]);
        let ll = res;
        for (let i = 1; i < arr.length; i++) {
            ll.setNext(arr[i]);
            ll = ll.next;
        }
        return res;           
    }
    getArray(ll = this) {
        let arr = [];
        while(ll) {
            arr.push(ll.data);
            ll = ll.next;
        }
        return arr;
    }
}

module.exports = { LinkedList };
