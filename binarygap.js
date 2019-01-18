function solution(N) {
    let gap = 0;
    let max_gap = 0;
    let in_gap = false;

    while (N > 0) {
        if (N & 1) {
            if (in_gap) {
                max_gap = Math.max(max_gap, gap);
                gap = 0;
            } else {
                in_gap = true;
                gap = 0;
            }
        } else {
            ++gap;
        }
        N >>= 1;
    }

    return max_gap;
}

console.log(solution(1041));
console.log('------');
console.log(solution(2147483647));
console.log(solution(0));
console.log(solution(8193));
console.log(solution(32));