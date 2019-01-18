
function solution(A) {
    const ranges = A.map((s, c) => [c-s, c+s]).sort((a, b) => a[0] - b[0]);
    // const sranges = ranges.sort((a, b) => a[0] - b[0]);
    console.log(ranges);
    let count = 0;
    for (let i = 0; i < ranges.length - 1; ++i) {
        let j = 1;
        console.log(i, j);
        while ((i+j) < ranges.length && (ranges[i][1] >= ranges[i+j][0])) {
            console.log(ranges[i], ranges[i+j]);
            ++count;
            ++j;
            console.log(i, j);
        }
    }
    return count;
}

console.log(solution([1,5,2,1,4,0]));