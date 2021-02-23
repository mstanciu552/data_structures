function queens(n = 4) {
  function isSafe(board, row, col) {
    for (let i = 0; i < col; i++) if (board[row][i] === 1) return false;
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
      //for (let j = col; j > 0; j--)
      if (board[i][j] === 1) return false;
    for (let i = row, j = col; j >= 0 && i < n; i++, j--)
      //for (let j = col; j > 0; j--)
      if (board[i][j] === 1) return false;
    return true;
  }

  function solveCol(board, col) {
    if (col >= n) return true;
    for (let i = 0; i < n; i++) {
      if (isSafe(board, i, col)) {
        board[i][col] = 1;
        if (solveCol(board, col + 1)) return true;
      }
      board[i][col] = 0;
    }
    return false;
  }

  return (function solve() {
    let board = Array(n)
      .fill(0)
      .map(el => Array(n).fill(0));
    if (!solveCol(board, 0)) return false;
    return board;
  })();
}
// Comb n/k
function perm(mul, s = 0, e = mul.length) {
  let solution = [];

  (function permutations(mul, start = s, end = e) {
    if (start === end) solution.push([...mul]);

    for (let i = start; i < end; i++) {
      [mul[start], mul[i]] = [mul[i], mul[start]];
      permutations(mul, start + 1, end);
      [mul[start], mul[i]] = [mul[i], mul[start]];
    }
  })(mul);

  return solution;
}

function sudoku() {
  const WIDTH = 9;
  const HEIGHT = 9;
  const board = Array(HEIGHT)
    .fill(0)
    .map(el => Array(WIDTH).fill(0));
  const board_test = [
    [1, 0, 0, /**/ 0, 0, 0, /**/ 0, 0, 0],
    [0, 0, 0, /**/ 0, 0, 0, /**/ 0, 0, 0],
    [0, 0, 0, /**/ 0, 0, 0, /**/ 0, 0, 0],
    // ---------------------------------
    [0, 0, 0, /**/ 0, 0, 0, /**/ 0, 0, 0],
    [0, 0, 0, /**/ 0, 0, 0, /**/ 0, 0, 0],
    [0, 0, 0, /**/ 0, 0, 0, /**/ 0, 0, 0],
    // ---------------------------------
    [0, 0, 0, /**/ 0, 0, 0, /**/ 0, 0, 0],
    [0, 0, 0, /**/ 0, 0, 0, /**/ 0, 0, 0],
    [0, 0, 0, /**/ 0, 0, 0, /**/ 0, 0, 0],
  ];

  function print_board(bd, val) {
    const colors = require('colors/safe');

    // Clear the screen
    console.clear();
    // Upper border
    console.log('    1   2   3     4   5   6     7   8   9');
    console.log('  ------------- ------------- -------------');
    for (let i = 0; i < WIDTH; i++) {
      // Left border
      process.stdout.write(`${i + 1} | `);

      for (let j = 0; j < HEIGHT; j++) {
        // TODO Find the bug that makes is_valid return false
        // console.log(
        //   `Validity of ${[i, j, bd[i][j]]} is ${is_valid(bd, i, j, bd[i][j])}`
        // );
        process.stdout.write(
          `${
            bd[i][j] !== 0
              ? is_valid(bd, i, j, bd[i][j])
                ? colors.green(bd[i][j])
                : colors.red(bd[i][j])
              : ' '
          } | `
        );
        if ((j + 1) % 3 === 0 && j + 1 !== HEIGHT) process.stdout.write('| ');
      }

      // Check if it's a third row to make it double
      if ((i + 1) % 3 === 0 && i + 1 !== WIDTH)
        process.stdout.write('\n  ------------- ------------- -------------');
      console.log('\n  ------------- ------------- -------------');
    }
    console.log(colors.green(1));
  }

  function get_input(bd) {
    const prompt = require('prompt');
    const colors = require('colors/safe');

    const prompt_settings = {
      properties: {
        action: {
          description: 'Action[P(lay)/s(olve)](default=P(play))',
          pattern: /^[p|P|s|S| ]$/,
          message: "Please choose either 'p/P'(play) or 's/S'(solve)...",
          required: false,
        },
        row: {
          pattern: /^[1-9]$/,
          message:
            'The field can only contain a number that specifies the row or column of your choice',
          required: true,
        },
        col: {
          pattern: /^[1-9]$/,
          message:
            'The field can only contain a number that specifies the row or column of your choice',
          required: true,
        },
        value: {
          required: true,
          pattern: /^[0-9]$/,
          message:
            'The field can only contain a value to place at the specified position',
        },
      },
    };

    console.log(
      `Please input a position you want to replace(by a row and a column) and a value to be replaced with...`
    );

    // Prompt handling
    prompt.message = colors.magenta('Sudoku');
    prompt.delimiter = colors.green(' > ');
    prompt.start();

    prompt.get(prompt_settings, (err, result) => {
      if (err) {
        return (err => {
          console.error(err);
          return 1;
        })(err);
      }

      const { action, row, col, value } = result;
      if (action === ' ') action = 'p';

      bd[row - 1][col - 1] = value;

      console.clear();
      game_loop(bd);
    });
  }

  function get_square(row, col) {
    const square_pointers = [1, 4, 7];
    let min_row = 10,
      index_row = 0,
      min_col = 10,
      index_col = 0;
    for (let i = 0; i < square_pointers.length; i++) {
      let row_dist = row - square_pointers[i];
      if (row_dist >= 0 && min_row > row_dist) {
        min_row = row_dist;
        index_row = i;
      }
      let col_dist = col - square_pointers[i];
      if (col_dist >= 0 && min_col > col_dist) {
        min_col = col_dist;
        index_col = i;
      }
    }

    return index_row * 3 + index_col + 1;
  }

  function iterate_square(bd, square) {
    let square_definitions = [
      { rows: [1, 2, 3], cols: [1, 2, 3] },
      { rows: [4, 5, 6], cols: [1, 2, 3] },
      { rows: [7, 8, 9], cols: [1, 2, 3] },
      { rows: [1, 2, 3], cols: [4, 5, 6] },
      { rows: [4, 5, 6], cols: [4, 5, 6] },
      { rows: [7, 8, 9], cols: [4, 5, 6] },
      { rows: [1, 2, 3], cols: [7, 8, 9] },
      { rows: [4, 5, 6], cols: [7, 8, 9] },
      { rows: [7, 8, 9], cols: [7, 8, 9] },
    ];

    const { rows, cols } = square_definitions[square - 1];
    let sq = [];

    for (let i in rows) {
      let arr = [];
      for (let j in cols) {
        arr.push(bd[i][j]);
      }
      sq.push(arr);
    }
    return sq;
  }

  function is_valid(bd, row, col, value) {
    for (let i = 0; i < WIDTH; i++) {
      if (row !== i) if (bd[row][i] === value) return false;
      if (col !== i) if (bd[i][col] === value) return false;
    }
    const square = iterate_square(bd, get_square(row, col));
    if (square.map(r => r.includes(value)).includes(true)) return false;

    return true;
  }

  console.log(is_valid(board_test, 0, 0, 1));

  function game_logic() {}

  function game_loop(bd) {
    while (bd.map(row => row.includes(0)).includes(true)) {
      print_board(bd);
      get_input(bd);
      break;
    }
  }
  game_loop(board_test);
}

module.exports = { queens, perm, sudoku };
