
function solution(A) {
    const sorted = A.sort((a, x) => a - x);
    console.log(sorted);
    const l = sorted.length - 1;
    return(Math.max(sorted[0] * sorted[1] * sorted[l], sorted[l] * sorted[l-1] * sorted[l-2]));
}

function brute(A) {
    const mults = [];
    for (i = 0; i < A.length; ++i) {
        for (j = 0; j < A.length; ++j) {
            if (i != j) {
                for (k = 0; k < A.length; ++k) {
                    if (k != j && k != i) {
                        mults.push(A[i] * A[j] * A[k]);
                    }
                }
            }
        }
    }
    console.log(mults);
    const sm = mults.sort((a, x) => x - a);
    console.log(sm);
    return sm[0];
}

console.log(solution([-3,1,2,-2,5,6]));
console.log(solution([-3,-1,-2,-2,-5,6]));
console.log(solution([-3,-1,-2,-2,-5,-6]));
//console.log(brute([-3,-1,-2,-2,-5,-6]));

const tst = [-1,-2,-3,-4,-5,-200,-50];
console.log(tst.sort((a, x) => x - a));
console.log(-4 < -6);