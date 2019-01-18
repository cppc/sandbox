
function solution(A) {
    const n = A.length;

    let pos = A[0],
        neg = -A[0];

    for (let i = 1; i < n; ++i) {
        const temp = neg;
        neg = -A[i] + pos;
        pos = A[i] + temp;
    }
    return Math.min(Math.abs(pos), Math.abs(neg));
}

function solution2(A) {
    const n = A.length;
    const occ = new Array(101).fill(0);
    let highest = 0;
    let sum = 0;

    for (let i = 0; i < n; ++i) {
        const a = Math.abs(A[i]);
        highest = Math.max(highest, a);
        ++occ[a];
        sum += a;
    }

    const unused = new Array(sum + 1).fill(-1);
    unused[0] = 0;

    for (let j = 1; j <= highest; ++j) {
        if (occ[j] > 0) {
            for (let k = 0; k < sum; ++k) {
                if (unused[k] >= 0) {
                    unused[k] = occ[j];
                } else if (k >= j) {
                    if (unused[k - j] > 0) {
                        unused[k] = unused[k - j] - 1;
                    }
                }
            }
            console.log(unused);
        }
    }
    let r = sum;
    for (let s = 0; s < Math.floor(sum / 2) + 1; ++s) {
        if (unused[s] >= 0)
            r = Math.min(r, sum - 2 * s);
    }
    return r;
}

console.log(solution2([1,5,2,-2]));
console.log(solution2([2,3,2,2,3]));
console.log(solution2([]));
console.log(solution2([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));