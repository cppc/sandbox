function solution(A) {
    let east = 0;
    let passing = 0;
    for (i = 0; i < A.length; ++i) {
        if (A[i] == 0) {
            east++;
        } else {
            passing += east;
            if (passing > 1000000000) return -1;
        }
    }
    return passing;
}

console.log(solution([0,1,0,1,1]));