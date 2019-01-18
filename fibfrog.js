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

function solution(A) {

    A.push(1);
    const n = A.length;
    const fibJumps = jumps(n);

    if (fibJumps.includes(n)) return 1;

    const paths = [0];

    for (let i = 0; i < n; ++i) {
        const distance = i + 1;
//        console.log(i, A[i], distance);
        paths.push(n + 1);
//        console.log(paths);
        if (A[i] == 0) continue;

        for (let f = 0; f < fibJumps.length && fibJumps[f] <= distance; ++f) {
            const jump = fibJumps[f];
//            console.log("Check jump: ", jump, " to A[", i - jump, "]==", A[i - jump]);
            if (((i - jump) == -1) || (A[i - jump] == 1)) {
                paths[distance] = Math.min(paths[distance], paths[distance - jump] + 1);
            }
        }
    }

    if (paths[paths.length-1] <= n) {
        return paths[paths.length-1];
    }

    return -1;
}

// https://app.codility.com/demo/results/trainingHBGNUT-XF2/

console.log(solution([0,0,0,1,1,0,1,0,0,0,0]));
//console.log(solution([1,1,1,1,1,1,1,1,1,1,1]));
//console.log(solution([0,0,0,1,1,0,1,0,0,0,0,0]));
console.log(solution([0,0,0,0,0,0,0,0,0,0,0,0,0]));
//console.log(solution([]));

const bigrand = [];
for (let r = 0; r < 100001; ++r) {
    if (Math.random() <= 0.8) bigrand.push(0);
    else bigrand.push(1);
}

console.log(solution(bigrand));

let allones = [];
for (let r = 0; r < 100001; ++r) {
    allones.push(1);
}

console.log(solution(allones));

allones = [];
for (let r = 0; r < 100001; ++r) {
    allones.push(0);
}

console.log(solution(allones));

