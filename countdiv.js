
function solution(A, B, K) {
    // const bf = Math.floor(B / K);
    // const af = Math.floor(A / K);
    // const mult = (A % K) == 0;
    // console.log(bf, af, bf - af, mult);
    let count = Math.floor(B / K) - Math.floor(A / K);
    if ((A % K) == 0) ++count;
    return count;
}

console.log(solution(6, 11, 2));
console.log(solution(6, 11, 5));
console.log(solution(11, 345, 17));
