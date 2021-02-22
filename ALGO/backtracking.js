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
function perm(mul) {
  let solution = [];

  (function permutations(mul, start = 0, end = mul.length) {
    if (start === end) console.log(mul);
    for (let i = start; i < end; i++) {
      [mul[start], mul[i]] = [mul[i], mul[start]];
      permutations(mul, start + 1, end);
      [mul[start], mul[i]] = [mul[i], mul[start]];
    }
  })(mul)
  
  return solution;
}

module.exports = { queens, perm };
