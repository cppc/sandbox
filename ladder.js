// https://app.codility.com/demo/results/trainingM7WVUX-HU3/
function ff(n) {
    const sqr5 = Math.sqrt(5);
    const left = Math.pow((1 + sqr5) / 2, n);
    const right = Math.pow((1 - sqr5) / 2, n);

}
function jumps2(n) {
    if (n < 3) return n;
    let fib = 0, f1 = 2, f2 = 1;

    let i = 3;

    while (i <= n) {
        fib = f1 + f2;
        f2 = f1;
        f1 = fib;
        ++i;
    }
    return fib;
}

function jumps(n, m) {
    const fib = [0, 1];
    let i = 2;

    while (i < n) {
        fib.push((fib[i - 1] + fib[i - 2]) & ((1 << m) - 1));
        ++i;
    }
    return fib.splice(2);
}

const arrmax = a => a.reduce((m, e) => Math.max(m, e), 0);

function solution(A, B) {
    const amax = arrmax(A);
    const bmax = arrmax(B);
    console.log(amax, bmax);
    const rungs = jumps(amax + 2, bmax);
    console.log("rungs: ", rungs);
    const result = [];
    for (let i = 0; i < A.length; ++i) {
        const a = A[i], b = B[i];
        // console.log("mod: ", modulus);
        result.push(rungs[a - 1] & ((1 << b) - 1));
    }
    return result;
}

console.log(jumps(5));
console.log(jumps(4));
console.log(solution([4,4,5,5,1],[3,2,4,3,1]));

const gri = max=> Math.floor(Math.random() * Math.floor(max));
const rB = n => { const x = []; for (let i = 0; i <= n; ++i) x.push(gri(30) + 1); return x; };
const rA = n => { const x = []; for (let i = 0; i <= n; ++i) x.push(gri(50000) + 1); return x; };

console.log(rA(10));
console.log(rB(10));
console.log(solution(rA(100), rB(100)));