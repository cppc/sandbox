
function solution(A) {
    let peaks = [];
    console.log("A length: ", A.length);
    for (i = 1; i < A.length - 1; ++i) {
        if (A[i] > A[ i - 1] && A[i] > A[i + 1]) {
            console.log("Add: ", i);
            peaks.push(i);
        }
    }

    if (peaks.length == 0) return 0;

    for (numBlocks = peaks.length; numBlocks > 0; --numBlocks) {
        console.log("Size: ", numBlocks);
        if (A.length % numBlocks == 0) {
            const blockSize = A.length / numBlocks;
            console.log("Block size: ", blockSize);
            const hasPeak = new Array(numBlocks).fill(false);
            let blockCount = 0;
            for (k = 0; k < peaks.length; ++k) {
                const block = Math.floor(peaks[k] / blockSize);
                console.log("Peak: ", k, peaks[k], "Block: ", block);
                if (!hasPeak[block]) {
                    hasPeak[block] = true;
                    ++blockCount;
                }
                if (blockCount == numBlocks)
                    return blockCount;
                console.log("Found: ", blockCount, hasPeak);
            }
        }
    }
    return 0;
}

console.log(solution([1,2,3,4,3,4,1,2,3,4,6,2]));
