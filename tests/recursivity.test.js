import {factorial, fibonnaci, palindrome} from '../ALGO/recursivity';

test('Recursivity behaviour', () => {
    // Factorial
    (function factor() {
        for (let i = 1; i < 10; i++) {
            let fact = 1;
            for (let j = 1; j <= i; j++) fact *= j;
            expect(factorial(i)).toBe(fact);
        }
    })();
    (function fib() {
        let fibRes = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
        // Base cases
        for (let i = 0; i < 10; i++) expect(fibonnaci(i)).toBe(fibRes[i]);
    })();

    (function palind() {
        let stringsTrue = [
            'malam',
            'malayalam',
            '',
            'mm',
            'MmmM',
            'mMMm',
            '1221',
            'mMmM',
            'I am mai',
        ];
        let stringsFalse = [
            'pumba',
            'Mm',
            'not a palindrome',
            'test',
            'palindrome',
            'false',
        ];
        for (let str in stringsTrue) expect(palindrome(str)).toBe(true);
        for (let i = 0; i < stringsFalse.length; i++) {
            expect(palindrome(stringsFalse[i])).toBe(false);
        }
    })();
});
