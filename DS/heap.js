class Heap {
    constructor(arr, order = 0) {
        this.arr = arr;
        this.order = order;
    }
        
    getLength() {
        return this.arr.length;
    }

    findMin() {
        let min = Math.max(...this.arr);

        for (let i = 0; i < this.arr.length; i++) 
            if (min > this.arr[i])
                min = this.arr[i];
        
        return min;
    }
    findMax() {
        let max = Math.min(...this.arr);

        for (let i = 0; i < this.arr.length; i++)
            if (max < this.arr[i])
                max = this.arr[i];
        return max;
    }
    
    removeItem(element) {
        if (this.arr.length >= 0) {
            const index = this.arr.indexOf(element);
            if(index !== -1) this.arr.splice(index, 1);
        }
    }

    pop() {
        let first = this.order === 0 ? this.findMin() : this.findMax();
        
        this.removeItem(first);

        return first;
    }

    push(data) {
        this.arr.push(data);
    }
}

module.exports = { Heap }
