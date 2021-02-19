const { factorial, fibonnaci } = require('../ALGO/recursivity');

test('Recursivity behaviour', () => {
  // Factorial
  (function () {
    for (let i = 1; i < 10; i++) {
      let fact = 1;
      for (let j = 1; j <= i; j++) fact *= j;
      expect(factorial(i)).toBe(fact);
    }
  })();
  (function () {
    // Base cases
    expect(fibonnaci(0)).toBe(0);
    expect(fibonnaci(1)).toBe(1);
  })();
});
