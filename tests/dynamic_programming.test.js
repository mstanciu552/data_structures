const { fib_dynamic } = require('../ALGO/dynamic_programming.js');

test('Dynamic programming behaviour', () => {
    (function fib() {
        let fib_num = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
        for (let i = 0; i < fib_num.length; i++) 
            expect(fib_dynamic(i)).toBe(fib_num[i]);
    })()
});
