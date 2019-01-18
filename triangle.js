
function solution(A) {
    const s = A.sort((a, b) => a - b);

    for (i = 0; i < s.length; ++i) {
        if (s[i] + s[i+1] > s[i+2]) {
            return 1;
        }
    }
    return 0;
}

console.log(solution([10,2,5,1,8,20]));
console.log(solution([10,50,5,1]));