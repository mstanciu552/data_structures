import LinkedList from './DS/linked_list.js';
import Stack from './DS/stack.js';

// Linked List testing 
let list = new LinkedList(1);
list.setNext(2);

// console.log(`List head value: ${list.getData()}\nList next value: ${list.next.getData()}`);

// console.log(`Type of list head-> ${{list.head}} : ${typeof list.head}\nType of list next->${{list.next}} : ${typeof list.next}`)

// Stack testing
let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(`Stack elements: ${stack.getLast()}`);

stack.pop();

console.log(`Stack elements: ${stack.getLast()}`);
