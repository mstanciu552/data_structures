function factorial(num) {
  if (num in [0, 1]) return 1;
  return num * factorial(num - 1);
}

function fibonnaci(ord) {
  if (ord < 1) return 0;
  if (ord === 1) return 1;
  return fibonnaci(ord - 1) + fibonnaci(ord - 2);
}

function palindrome(str, start = 0, end = str.length - 1) {
  if (start === end) return true;
  if (str[start] !== str[end]) return false;
  if (start < end + 1) return palindrome(str, start + 1, end - 1);
  return true;
}

function delete_k_from_ll(ll, k) {
  if (k < 1) return ll.head;
  if (!ll) return null;
  if (k === 1) {
    ll.head = ll.next;
    return ll.head;
  }
  ll.next = delete_k_from_ll(ll.next, k - 1);
  return ll;
}

module.exports = {
  factorial,
  fibonnaci,
  palindrome,
  delete_k_from_ll,
};
