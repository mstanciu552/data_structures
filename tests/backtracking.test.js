const {queens, perm} = require('../ALGO/backtracking.js');

test('Backtracking behaviour', () => {
	(function () {
		
	    const board4 = [[0, 0, 1, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 1, 0, 0]];
	    const board5 = [[1, 0, 0, 0, 0], [0, 0, 0, 1, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 1, 0, 0]];

	    expect(queens()).toStrictEqual(board4);
	    expect(queens(5)).toStrictEqual(board5);
	})()
});
