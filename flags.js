

function solution(A) {
    const n = A.length;

    if (n < 3) return 0;

    console.log("A length: ", A.length);

    let lastPeak = n;
    let peaks = 0;
    let nextA = A[n - 1];

    for (i = n - 2; i > 0; --i) {
        console.log("Checking: ", A[i-1], A[i], nextA);
        if (A[i] > A[i - 1] && A[i] > nextA) {
            console.log("Found peak: ", i);
            lastPeak = i;
            ++peaks;
        }
        nextA = A[i];
        A[i] = lastPeak;
    }
    A[0] = lastPeak;
    A[n - 1] = n;

    console.log(peaks, A);

    let maxFlags = Math.min(peaks, Math.floor(Math.sqrt(n)) + 2);

    console.log("Max flags: ", maxFlags);

    for (numFlags = maxFlags; numFlags > 0; --numFlags) {
        console.log("Size: ", numFlags);
        let pos = -numFlags;
        let k;
        for (k = 0; k < numFlags; ++k) {
            if (pos + numFlags > n - 1) {
                break;
            }
            pos = A[pos + numFlags];
        }
        if (k == numFlags) {
            return numFlags;
        }
    }
    return numFlags;
}

console.log(solution([1,2,3,4,3,4,1,2,3,4,6,2]));
console.log(solution([1,5,3,4,3,4,1,2,3,4,6,2]));
