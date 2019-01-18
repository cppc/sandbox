function jumps(n) {
    const fib = [0];
    let lastFib = 0;
    let i = 1;

    while (lastFib <= n) {
        if (i == 1) fib.push(1);
        else fib.push(fib[i - 1] + fib[i - 2]);
        lastFib = fib[i];
        ++i;
    }
    if (lastFib > n) fib.splice(-1);
    return fib.splice(2);
}

function getSums(f, n) {
    const sums = new Array(n + 1).fill(false);
    for (let i = 0; i < f.length; ++i) {
        for (let j = 0; j < f.length; ++j) {
            if (f[i] + f[j] > n) break;
            if (sums[f[i] + f[j]]) {
                sums[f[i] + f[j]].push([f[i], f[j]]);
            } else {
                sums[f[i] + f[j]] = [[f[i], f[j]]];
            }
        }
    }
    return sums;
}

// Fibonacci numbers are also sums of Fibonacci numbers (by definition). These will always have
// the first sum in the form [1, Fn]
const isFib = (n, s) => ((s[n - 1] != false) && ((s[n - 1][0][0] == 1) && (s[n-1][0][1] == n)));

const land = (A, d) => ((d === 0) || (A[d - 1] != 0));
const path = (A, p) => (land(A, p[0]) && land(A, p[0] + p[1]));

function fibspan(A, distance, leaps, sums) {
    if (distance === 0) return 0;
    if (isFib(distance, sums)) return 1;
    if (sums[distance] != false) {
        const pairs = sums[distance - 1];
        for (let p = 0; p < pairs.length; ++p) {
            if (path(A, pairs[p])) return 2;
        }
    }
    let min = Number.MAX_SAFE_INTEGER;
    for (let l = leaps.length - 1; l >= 0; --l) {
        if (leaps[l] <= distance) {
            if (land(A, distance - leaps[l])) {
                const sub = fibspan(A, distance - leaps[l], leaps, sums);
                if (sub != -1) min = Math.min(sub, min);
            }
        }
    }
    return (min <= distance) ? min + 1 : -1;
}

function solution(A) {
    A.push(1);
    const n = A.length;
    const leaps = jumps(n);
    const sums = getSums(leaps, n);

    return fibspan(A, n, leaps, sums);
}

console.log(solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]));

//console.log(solution([0,0,0,1,1,0,1,0,0,0,0]));
console.log(solution([1,1,1,1,1,1,1,1,1,1,1]));
console.log(solution([0,0,0,1,1,0,1,0,0,0,0,0]));
console.log(solution([0,0,0,0,0,0,0,0,0,0,0,0,0]));
console.log(solution([]));

const bigrand = [];
for (let r = 0; r < 100001; ++r) {
    if (Math.random() <= 0.5) bigrand.push(0);
    else bigrand.push(0);
}

console.log(solution(bigrand));

const allones = [];
for (let r = 0; r < 100001; ++r) {
    allones.push(1);
}

console.log(solution(allones));
//console.log(solution([]));
