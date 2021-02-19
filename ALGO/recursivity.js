function factorial(num) {
  if (num in [0, 1]) return 1;
  return num * factorial(num - 1);
}

function fibonnaci(ord) {
  if (ord < 1) return 0;
  if (ord === 1) return 1;
  return fibonnaci(ord - 1) + fibonnaci(ord - 2);
}

function all_palindroms(str) {}

function delete_k_from_ll(k) {}

function tower_of_hanoi() {}

module.exports = {
  factorial,
  fibonnaci,
  all_palindroms,
  delete_k_from_ll,
  tower_of_hanoi,
};
