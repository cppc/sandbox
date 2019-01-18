
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
    if (size == 0) return 0;

    candidate = value;

    for (i = 0; i < n; ++i) {
        if (A[i] == candidate) {
            ++count;
        }
    }
    if (count <= n / 2) {
        return 0;
    }
    let result = 0;
    let seen = 0;
    for (j = 0; j < n; ++j) {
        if (A[j] == candidate) {
            ++seen;
        }
        if ((seen > (j+1) / 2) && ((count - seen) > (n - j - 1) / 2)) {
            ++result;
        }
    }
    return result;
};

console.log(solution([4,3,4,4,4,2]));

console.time("solution");
for (z = 0; z < 1000; ++z) {
    solution([4,3,4,4,4,2]);
}
console.timeEnd("solution");
