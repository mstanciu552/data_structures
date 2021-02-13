/*
 * TODO: Set up testing instead...maybe with JEST
 * */

// const LinkedList = require("./DS/linked_list");
// const Stack = require("./DS/stack");
const { Queue } = require("./DS/queue");

// Queue Testing
let queue = new Queue();

queue.add(1);
queue.add(2);
queue.add(3);

console.log(`Queue first element: ${queue.getFirst()}`);
console.log(`Queue first element: ${queue.getFirst()}`);
