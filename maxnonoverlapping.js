
function solution(A, B) {
    const n = A.length;

    if (n == 0) return 0;

    segs = 1;
    lastEnd = B[0];

    for (let i = 1; i < n; ++i) {
        if (A[i] > lastEnd) {
            ++segs;
            lastEnd = B[i];
        }
    }

    return segs;
}

function adj(X, Y) {
    return Math.abs(X[0] - Y[0]) == 1;
}

function ropes(A) {
    const AS = A.map((a, i) => [i, a]);
    AS.sort((a, b) => b[1] = a[1]);
    const n = A.length;

    if (n == 0) return 0;

    let ropes = 1;
    let rope = AS[0];

    for (let i = 1; i < n; ++i) {
        if (A[i] > lastEnd) {
            ++segs;
            lastEnd = B[i];
        }
    }

    return segs;
}

function ropes2(K, A) {
    const n = A.length;

    let rope = 0;
    let count = 0;

    for (let i = 0; i < n; ++i) {
        rope += A[i];
        if (rope >= K) {
            ++count;
            rope = 0;
        }
     }

    return count;
}

//console.log(solution([1,3,7,9,9],[5,6,8,9,10]));
console.log(ropes2(4, [1,2,3,4,1,1,3]));
console.log(ropes2(1, [1]));