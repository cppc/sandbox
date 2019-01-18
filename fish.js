
function solution(A, B) {
    const stack = [];
    let nfish = A.length;

    for (i = 0; i < A.length; ++i) {
        if (B[i] == 0) {
            while (stack.length > 0) {
                if (A[i] > stack[stack.length-1]) {
                    stack.pop();
                    --nfish;
                } else {
                    --nfish;
                    break;
                }
            }
        } else {
            stack.push(A[i]);
        }
    }
    return nfish;
}

console.log(solution([4,3,2,1,5], [0,1,0,0,0]));
console.log(solution([4,3,2,1,5], [1,0,0,0,0]));