function solution(A, K) {
    const off = (K % A.length);
    if (K <= 0 || off == 0 || A.length < 2) return A;
    const sp = A.splice(-off);
    console.log(off, sp, A);
//    return A.splice((K % A.length)-1).concat(A);
//    return A.splice(off).concat(A);
    return sp.concat(A);
}

console.log(solution([1,2,3,4,5], 1));
console.log(solution([1,2,3,4,5], 6));
console.log(solution([1,2,3,4,5], 8));
console.log(solution([1,2,3,4,5], 3));
// console.log(solution([1,2,3,4,5], 5));
// console.log(solution([1,2,3,4,5], 239));
// console.log(solution([1,2,3,4,5], 2));
// console.log(solution([1,2,3,4,5], 0));
// console.log(solution([1,2], 1));
// console.log(solution([1], 0));
// console.log(solution([1], 1));
// console.log(solution([1], 2));
// console.log(solution([1], 3));
// console.log(solution([1], 4));
// console.log(solution([1], 5));
console.log(solution([5, -1000], 1));
//
// console.log(solution([3,8,9,7,6], 3));
// console.log(solution([0,0,0], 0));
//
// console.time("solution");
// for (z = 0; z < 10000; ++z) {
//     solution([1,2,3,4,5], 8);
// }
// console.timeEnd("solution");
