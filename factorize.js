
function arrayF(n) {
    const s = new Array(n + 1).fill(0);
    let i = 2;
    while (i * i <= n) {
        if (s[i] == 0) {
            let k = i * i;
            while (k <= n) {
                if (s[k] == 0) {
                    s[k] = i;
                }
                k += i;
            }
        }
        ++i;
    }
    return s;
}

function factorize(x, F) {
    const primeFactors = [];
    while (F[x] > 0) {
        primeFactors.push(F[x]);
        x /= F[x];
    }
    primeFactors.push(x);
    return primeFactors;
}

function factors(n) {
    return factorize(n, arrayF(n));
}

console.log(factors(17));
console.log(factors(35));
console.log(factors(30));