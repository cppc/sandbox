const arrmax = a => a.reduce((m, e) => Math.max(m, e), 0);
const arrsum = a => a.reduce((m, e) => m + e, 0);

function check(A, B, C, nails) {
    let used = 0;
    let boards = A.length;
    const nailed = new Array(A.length).fill(false);

    for (let c = 0; c < nails; ++c) {
        for (let i = 0; i < A.length; ++i) {
            if (A[i] <= C[c] && C[c] <= B[i]) {
                if (!nailed[i]) {
                    nailed[i] = true;
                    --boards;
                }
            }
        }
    }

    return boards;
}

function search(A, B, C) {
    let minNails = 1;
    let maxNails = C.length;

    while (minNails <= maxNails) {
        const mid = Math.floor((minNails + maxNails) / 2);
        const nails = check(A, B, C, mid);
        if (nails < 0) {
            maxNails = mid - 1;
        } else if (nails > 0) {
            minNails = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

function solution(A, B, C) {
    return search(A, B, C);
}

console.log(solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]));
console.log(solution([1], [4], [4]));