
let fib = [0, 1];

export function fib_dynamic(ord) {
    if (ord === 1 || ord === 0) return ord;
    if (!fib[ord])
        fib[ord] = fib_dynamic(ord - 1) + fib_dynamic(ord - 2);
    return fib[ord];
}

