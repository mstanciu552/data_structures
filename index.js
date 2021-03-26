import { MinHeap } from "./DS/heap.js";

let mh = new MinHeap(10);
mh.insert(11);
mh.insert(12);
mh.insert(40);
mh.insert(53);
mh.insert(21);
mh.insert(73);

console.log(mh.arr);
