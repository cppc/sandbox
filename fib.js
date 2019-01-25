function fibonacci(n) {
    const fib = new Array(n + 2).fill(0);
    fib[1] = 1;
    for (let i = 2; i < n + 1; ++i) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

console.log(fibonacci(7));

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

function testFibs() {
    const leaps = jumps(1000000);
    return leaps.length;
}

function testSums(f, n) {
    let found = 0;
    for (let i = 0; i < f.length; ++i) {
        for (let j = 0; j < f.length; ++j) {
            if (f[i] + f[j] > n) break;
            ++found;
        }
    }
    return found;
}

function solution(A) {

    A.push(1);
    const n = A.length;
    const fibJumps = jumps(n);

    if (fibJumps.includes(n)) return 1;

    const paths = [0];

    for (let i = 0; i < n; ++i) {
        const distance = i + 1;
        console.log(i, A[i], distance);
        paths.push(n + 1);
        console.log(paths);
        if (A[i] == 0) continue;

        for (let f = 0; f < fibJumps.length && fibJumps[f] <= distance; ++f) {
            const jump = fibJumps[f];
            console.log("Check jump: ", jump, " to A[", i - jump, "]==", A[i - jump]);
            if (((i - jump) == -1) || (A[i - jump] == 1)) {
                paths[distance] = Math.min(paths[distance], paths[distance - jump] + 1);
            }
        }
    }


    return paths[paths.length - 1];
}

console.log("There are ", testFibs(), "fibonacci numbers <= 100000");
console.log("There are ", testSums(jumps(1000000), 100000), "fibonacci sums <= 100000");

function isSum(n, sums) {

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


function distances(A) {
    const leaps = jumps(A.length + 1);
    console.log(leaps);
    const sums = getSums(leaps, A.length + 1);
    console.log(sums);
    const d = [];
    let fdist = 0;
    let sdist = 0;
    let total = 0;
    for (let i = 0; i < A.length; ++i) {
        if (A[i] == 1) {
            for (let j = 0; j < A.length; ++j) {
                if (A[j] == 1 && j != i) {
                    const dist = Math.abs(j - i) + 1;
                    if (leaps.includes(dist)) ++fdist;
                    else if (sums[dist]) ++sdist;
                    ++total;
                    d.push(dist);
                }
            }
        }
    }

    return [fdist, sdist, total, d];
}

// Fibonacci numbers are also sums of Fibonacci numbers (by definition). These will always have
// the first sum in the form [1, Fn]
const isFib = (n, s) => ((s[n - 1] != false) && ((s[n - 1][0][0] == 1) && (s[n-1][0][1] == n)));

const land = (A, d) => ((d === 0) || (A[d - 1] != 0));
const path = (A, p) => (land(A, p[0]) && land(A, p[0] + p[1]));

function fibspan(A, distance, leaps, sums) {
    // const n = A.length;
    if (distance === 0) return 0;
    if (isFib(distance, sums)) return 1;
    if (sums[distance] != false) {
        const pairs = sums[distance - 1];
        for (let p = 0; p < pairs.length; ++p) {
            if (path(A, pairs[p])) return 2;
        }
    }
    for (let l = leaps.length - 1; l >= 0; --l) {
        if (leaps[l] <= distance) {
            if (land(A, distance - leaps[l])) {
                const sub = fibspan(A, distance - leaps[l], leaps, sums);
                if (sub != -1) return sub + 1;
            }
        }
    }
    return -1;
}


function fibflat(A, distance, leaps, sums) {
    // const n = A.length;
    let count = 0;
    while (distance > 0) {
        if (isFib(distance, sums)) {
            ++count;
        } else if (sums[distance] != false) {
            const pairs = sums[distance - 1];
            for (let p = 0; p < pairs.length; ++p) {
                if (path(A, pairs[p])) {
                    return 2;
                }
            }
        }
        for (let l = leaps.length - 1; l >= 0; --l) {
            if (leaps[l] <= distance) {
                if (land(A, distance - leaps[l])) {

                    const sub = fibspan(A, distance - leaps[l], leaps, sums);
                    if (sub != -1) return sub + 1;
                }
            }
        }
    }
    return -1;
}

function solve(A) {
    A.push(1);
    const n = A.length;
    const leaps = jumps(n);
    const sums = getSums(leaps, n);

    return fibspan(A, n, leaps, sums);
}

console.log(solve([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]));

//console.log(solution([0,0,0,1,1,0,1,0,0,0,0]));
console.log(solve([1,1,1,1,1,1,1,1,1,1,1]));
console.log(solve([0,0,0,1,1,0,1,0,0,0,0,0]));
console.log(solve([0,0,0,0,0,0,0,0,0,0,0,0,0]));
//console.log(solution([]));
