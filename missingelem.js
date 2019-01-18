function solution(A) {
    const vals = new Set(A);

    let i = 1;

    while (i < A.length+1 && vals.has(i)) ++i;

    return i;
}

console.log(solution([2,3,1,5]));
console.log(solution([2,3,4]));
console.log(solution([1,2,3,4]));