// const { sudoku } = require('./ALGO/backtracking');

// sudoku();

const { LinkedList } = require('./DS/linked_list.js');
const { reverse_ll } = require('./ALGO/linked_list.js');

let ll = LinkedList.convertArray([1, 2, 3, 4, 5]);
console.log(reverse_ll(ll).getArray());
