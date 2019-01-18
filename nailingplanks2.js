const arrmax = a => a.reduce((m, e) => Math.max(m, e), 0);
const arrsum = a => a.reduce((m, e) => m + e, 0);

function findNail(p, n, r) {
    let idx = -1,
        pos = -1;

    let lower = 0,
        upper = n.length - 1;

    while (lower <= upper) {
        let mid = Math.floor((lower + upper) / 2);
        if (n[mid][1] < p[0]) {
            lower = mid + 1;
        } else if (n[mid][1] > p[1]) {
            upper = mid - 1;
        } else {
            upper = mid - 1;
            pos = n[mid][0];
            idx = mid;
        }
    }

    while (++idx < n.length && n[idx][1] <= p[1]) {
        pos = Math.min(pos, n[idx][0]);
        if (pos <= r) return pos;
    }

    return pos;
}

function countNails(p, n) {
    let last = 0;
    for (let i = 0; i < p.length; ++i) {
        let count = findNail(p[i], n, last);
        if (count < 0) return -1;
        last = Math.max(count, last);
    }
    return last + 1;
    // return p.reduce((x, m) => Math.max(m, findNail(x, n, m)));
}

function solution(A, B, C) {
    const boards = A.map((a, i) => [A[i], B[i]]);
    const nails = C.map((n, i) => { return [i, n] }).sort((a, b) => a[1] - b[1]);
    console.log(boards);
    console.log(nails);
    return countNails(boards, nails);
}

console.log(solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]));
console.log(solution([1], [4], [4]));