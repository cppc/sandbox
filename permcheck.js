
const solution = (A) => {
    let found = new Array(A.length).fill(false);
    for (var x of A) {
        if (x <= 0 || x > A.length)
            return 0;
        if (found[x])
            return 0;
        found[x] = true;
    }
    return 1;
};

const another = A => {
    let s = new Set();
    for (var x of A) {
        if (x <= 0 || x > A.length)
            return 0;
        if (s.has(x))
            return 0;
        s.add(x);
    }
    return 1;

};

console.log(solution([4, 1, 3, 2]));
console.log(solution([4, 1, 3, 1]));
console.log(solution([4, -1, 3, 2]));
console.log(solution([4, 5, 3, 2]));

console.time("solution");
for (var i = 0; i < 10000; ++i)
    solution([4, 1, 3, 2]);
console.timeEnd("solution");
console.time("another");
for (var i = 0; i < 10000; ++i)
    another([4, 1, 3, 2]);
console.timeEnd("another");
