
function solution(A) {
    if (A.length == 1) return A[0];
    let maxSlice = 0,
        maxEnd = 0,
        maxElem = Number.MIN_SAFE_INTEGER;
    for (i = 0; i < A.length; ++i) {
        console.log("*", maxSlice, maxEnd, A[i]);
        maxEnd = Math.max(0, maxEnd + A[i]);
        maxElem = Math.max(maxElem, A[i]);
        maxSlice = Math.max(maxEnd, maxSlice);
        console.log(maxSlice, maxEnd);
    }
    if (maxSlice == 0 && maxElem > Number.MIN_SAFE_INTEGER) return maxElem;
    return maxSlice;
}

console.log(solution([5,-7,3,5,-2,4,-1]));
console.log(solution([-10]));
console.log(solution([-10, -4]));
console.log(solution([-10, -4, -5]));