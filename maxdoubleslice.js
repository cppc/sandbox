
function solution(A) {
    const n = A.length;
    if (n < 3) return 0;
    let maxSliceXY = new Array(n),
        maxSliceYZ = new Array(n),
        maxSum = 0,
        maxDouble = 0;

    for (i = 1; i < n - 1; ++i) {
        maxSum = Math.max(0, maxSum + A[i]);
        maxSliceXY[i] = maxSum;
        console.log(maxSum, maxSliceXY);
    }
    maxSum = 0;

    for (j = n - 2; j > 0; --j) {
        maxSum = Math.max(0, maxSum + A[j]);
        maxSliceYZ[j] = maxSum;
        console.log(maxSum, maxSliceYZ);
    }

    maxSliceXY[0] = maxSliceYZ[n-1] = maxDouble = 0;

    for (k = 1; k < n - 1; ++k) {
        console.log(k, maxDouble, maxSliceXY[k - 1], maxSliceYZ[k + 1]);
        maxDouble = Math.max(maxDouble, maxSliceXY[k - 1] + maxSliceYZ[k + 1]);
        console.log(k, maxDouble);
    }

    return maxDouble;
}

console.log(solution([3,2,6,-1,4,5,-1,2]));
console.log(solution([-3,-2,-6,-1,-4,-5,-1,-2]));
