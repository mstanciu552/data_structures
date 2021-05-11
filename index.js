import Graph from './DS/graph.js';

let matrix = [
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 0],
];

let graph = new Graph(matrix);
console.log(graph.convertToPairs());
