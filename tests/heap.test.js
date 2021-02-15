const {Heap} = require('../DS/heap');
const { merge_sort } = require('../ALGO/sort');

let arrays = [];
let sorted = [];

for (let i = 0; i < 10; i++) {
    let array = [];
    for (let j = 0; j < 10; j++) {
        array.push(Math.floor(Math.random() * 10));
    }
    arrays.push(array);
    sorted.push(merge_sort(array));
}

test('Heap behaviour', () => {
    for (let i = 0; i < 10; i++) {
        let heap = new Heap(arrays[i]);
        let arrLength = arrays[i].length;
        let ansArr = [];
        
        while (arrLength !== 0) {
            ansArr.push(heap.pop());
            arrLength --;
        }
        console.log("Sorted: "+ sorted[i])
        expect(ansArr).toBe(sorted[i]);
    }
})
