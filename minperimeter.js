
function solution(N) {
    let i = Math.floor(Math.sqrt(N));

    while (i > 0) {
        console.log("Check: ", i, N % i);
        if (N % i == 0) {
            return 2 * (i + N/i);
        }
        --i;
    }

}

console.log(solution(30));
console.log(solution(31));