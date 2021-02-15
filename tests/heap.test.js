const { Heap } = require("../DS/heap");

let arrays = [];
let sorted = [];

for (let i = 0; i < 10; i++) {
  let array = [];
  for (let j = 0; j < 10; j++) {
    array.push(Math.floor(Math.random() * 10));
  }
  arrays.push(array);
  sorted.push([array.sort()]);
}

test("Heap behaviour", () => {
  for (let i = 0; i < 10; i++) {
    let heap = new Heap(arrays[i]);
    let arrLength = arrays[i].length;
    let ansArr = [];

    while (arrLength !== 0) {
      ansArr.push(heap.pop());
      arrLength--;
    }
    expect(ansArr).toBe(ansArr.sort());
  }
});
