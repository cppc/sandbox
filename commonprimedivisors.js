function sieve(n) {
    const s = new Array(n + 1).fill(true);
    s[0] = s[1] = false;
    let i = 2;
    while (i * i <= n) {
        if (s[i]) {
            let k = i * i;
            while (k <= n) {
                s[k] = false;
                k += i;
            }
        }
        ++i;
    }
    return s;
}

function divisors(n, s) {
    let i = 1;
    const divs = [];

    while (i * i < n) {
        if (n % i == 0) {
            if (s[i]) {
                divs.push(i);
                if (s[n / i])
                    divs.push(n / i);
            }
        }
        ++i;
    }

    return divs;
}

function eqArray(as, bs) {
    if (as.length !== bs.length) return false;
    if (as.length == 0) return false;
    for (let i = 0; i < as.length; ++i) {
        if (as[i] != bs[i]) {
            return false;
        }
    }
    return true;
}


function gcd(p, q) {
    while (q > 0) {
        const x = p;
        p = q;
        q = x % q;
    }
    return p;
}

function checkFactors(a, b) {
    let max = Math.max(a, b);
    const min = Math.min(a, b);

    let divisor = gcd(max, min);

    if (divisor == max) return true;
    if (divisor == 1) return false;

    max /= divisor;
    divisor = gcd(max, divisor);

    return checkFactors(max, divisor);
}

function sameFactors(a, b) {

    if (a == b) return true;

    const divisor = gcd(Math.max(a, b), Math.min(a, b));

    return (checkFactors(a, divisor) && checkFactors(b, divisor));
}

function solution(A, B) {

    let result = 0;
    for (i = 0; i < A.length; ++i) {
        const a = A[i], b = B[i];
        if (sameFactors(a, b)) ++result;
    }
    return result;
}

console.log(solution([15,10,3],[75,30,5]));
