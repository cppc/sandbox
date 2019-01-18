
function solution(N, A) {
    const counters = new Array(N).fill(0);
    var max = 0;
    var last_max = 0;

    for (i = 0; i < A.length; ++i) {
        const op = A[i] - 1;
        if (op == N)
            last_max = max;
        else {
            counters[op] = Math.max(counters[op], last_max) + 1;
            max = Math.max(counters[op], max);
        }
    }

    for (f = 0; f < N; ++f) {
        counters[f] = Math.max(counters[f], last_max);
    }

    return counters;
}

function faster(N, A) {
    const counters = new Array(N).fill(0);
    var max = 0;

    for (i = 0; i < A.length; ++i) {
        const op = A[i] - 1;
        if (op == N)
            counters.fill(max);
        else {
            const v = ++counters[op];
            max = (v > max) ? v : max;
//            max = Math.max(max, counters[op]);
        }
    }

    return counters;
}

console.log(solution(5, [3,4,4,6,1,4,4]));

console.time("solution");
for (z = 0; z < 10000; ++z) {
    solution(5, [3,4,4,6,1,4,4]);
}
console.timeEnd("solution");

console.time("faster");
for (z = 0; z < 10000; ++z) {
    faster(5, [3,4,4,6,1,4,4]);
}
console.timeEnd("faster");

console.time("solution");
for (z = 0; z < 10000; ++z) {
    solution(5, [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]);
}
console.timeEnd("solution");

console.time("faster");
for (z = 0; z < 10000; ++z) {
    faster(5, [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]);
}
console.timeEnd("faster");

