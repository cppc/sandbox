const arrmax = a => a.reduce((m, e) => Math.max(m, e), 0);
const arrsum = a => a.reduce((m, e) => m + e, 0);

function check(A, bcount, bsize) {
    let calcSize = 0;
    let calcCount = 0;

    for (let i = 0; i < A.length; ++i) {
        if (calcSize + A[i] > bsize) {
            ++calcCount;
            calcSize = A[i];
        } else {
            calcSize += A[i];
        }
        if (calcCount >= bcount) return false;
    }
    return true;
}

function search(A, bcount) {
    let maxBlock = arrsum(A);
    let minBlock = arrmax(A);
    let result = -1;

    if (bcount == 1) return maxBlock;
    if (bcount > A.length) return minBlock;

    while (minBlock <= maxBlock) {
        const mid = Math.floor((minBlock + maxBlock) / 2);
        // const mid = minBlock + (maxBlock - minBlock) >>> 1;
        if (check(A, bcount, mid)) {
            maxBlock = mid - 1;
        } else {
            minBlock = mid + 1;
        }
    }
    return minBlock;
}

function solution(K, M, A) {
    return search(A, K);
}

console.log(solution(3, 5, [2,1,5,1,2,2,2]));