
function solution(A) {
    const x = new Set(A.map(a => Math.abs(a)));
    return x.size;
}

function faster(A)

console.log(solution([1,-5,6,-2,3,7,2,9,0,4,-4,4,6,1]));
console.log(solution([-5,-3,-1,0,3,6]));