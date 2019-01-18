
function solution(A) {
    let profit = 0,
        min = 200000;

    for (i = 0; i < A.length; ++i) {
        console.log("*", profit, min, A[i]);
        min = Math.min(min, A[i]);
        profit = Math.max(profit, A[i] - min);
        console.log("-", profit, min);
    }
    return profit;
}

console.log(solution([23171,21011,21123,21366,21013,21367]));
