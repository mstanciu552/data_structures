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

  function print_board() {
    // Upper border
    console.log('    1   2   3     4   5   6     7   8   9');
    console.log('  ------------- ------------- -------------');
    for (let i = 0; i < WIDTH; i++) {
      // Left border
      process.stdout.write(`${i + 1} | `);

      for (let j = 0; j < HEIGHT; j++) {
        process.stdout.write(`${board[i][j] !== 0 ? board[i][i] : ' '} | `);
        if ((j + 1) % 3 === 0 && j + 1 !== HEIGHT) process.stdout.write('| ');
      }

      // Check if it's a third row to make it double
      if ((i + 1) % 3 === 0 && i + 1 !== WIDTH)
        process.stdout.write('\n  ------------- ------------- -------------');
      console.log('\n  ------------- ------------- -------------');
    }
  }

  function get_input() {
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
          pattern: /^[1-9]$/,
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

      board[row - 1][col - 1] = value;

      console.clear();
      game_loop();
    });
  }

  function game_logic() {}

  function game_loop() {
    while (board.map(row => row.includes(0))) {
      print_board();
      get_input();
      break;
    }
  }
  game_loop();
}

module.exports = { queens, perm, sudoku };
