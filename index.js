import LinkedList from './DS/linked_list.js';

let list = new LinkedList(1);
list.setNext(2);

console.log(`List head value: ${list.getData()}\nList next value: ${list.next.getData()}`);
