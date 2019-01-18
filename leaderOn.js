
const solution = A => {
    let candidate = -1;
    let size = 0;
    let value = 0;
    const n = A.length;
    let leader = -1;
    let count = 0;

    for (i = 0; i < n; ++i) {
        if (size == 0) {
            ++size;
            value = A[i];
        } else if (value == A[i]) {
            ++size;
        } else {
            --size;
        }
    }
    if (size > 0) candidate = value;
    for (i = 0; i < n; ++i) {
        if (A[i] == candidate) {
            ++count;
        }
        if (count > n / 2) {
            leader = candidate;
            break;
        }
    }
    return leader;
};

console.log(solution([6,8,6,6,4,6,8,8]));

console.time("solution");
for (z = 0; z < 1000; ++z) {
    solution([6,8,6,6,4,6,8,8]);
}
console.timeEnd("solution");
