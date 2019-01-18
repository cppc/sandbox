function solution(A) {
    const unpaired = new Set();

    for (i = 0; i < A.length; ++i) {
        if (unpaired.has(A[i])) {
            unpaired.delete(A[i]);
        } else {
            unpaired.add(A[i]);
        }
    }

    return unpaired.entries().next().value[0];
}

console.log(solution([9,3,9,3,9,7,9]));

console.time("solution");
for (z = 0; z < 10000; ++z) {
    solution([9,3,9,3,9,7,9]);
}
console.timeEnd("solution");
