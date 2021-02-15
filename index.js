const { Heap } = require('./DS/heap');

let heap = new Heap([22, 22, 1, 11, 32, 10, 9]);

let arr = [22, 22, 1, 11, 32, 10, 9];

while (arr.length !== 0) {
    let heapMin = heap.pop();
    console.log(heapMin === Math.min(...arr));
    console.log(`${heapMin} === ${Math.min(...arr)}`);
    let index = arr.indexOf(Math.min(...arr));
    if (index !== -1) arr.splice(index, 1);
}

