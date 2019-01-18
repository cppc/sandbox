function fibonacci(n) {
    const fib = new Array(n + 2).fill(0);
    fib[1] = 1;
    for (let i = 2; i < n + 1; ++i) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

console.log(fibonacci(7));