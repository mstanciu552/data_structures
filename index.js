// import { MinHeap } from "./DS/heap.js";

// let mh = new MinHeap(10);
// mh.insert(11);
// mh.insert(12);
// mh.insert(40);
// mh.insert(53);
// mh.insert(21);
// mh.insert(73);

// console.log(mh.arr);

// mh.delete(73);
// mh.delete(11);
// mh.delete(12);

// console.log(mh.arr);

import Tree from './DS/tree.js';
import { preOrderTraversal } from './ALGO/tree.js';

let tree = new Tree(1);
tree.addChild(2);
tree.addChild(3);
tree.addChild(4);
tree.addChild(5);
tree.children[0].addChild(6);
tree.children[1].addChild(7);
tree.children[2].addChild(8);
tree.children[3].addChild(9);

console.log(preOrderTraversal(tree));
