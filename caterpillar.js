const arrmax = a => a.reduce((m, e) => Math.max(m, e), 0);

function caterpillar(A, s) {
    const n = A.length;
    let front = 0,
        total = 0,
        back = 0;
    for (back = 0; back < n; back++) {
        while (front < n && total + A[front] <= s) {
            total += A[front];
            front += 1;
        }
        if (total == s) return true;
        total -= A[back];
    }
    return false;
}

function solution(M, A) {
    const n = A.length;
    const max = arrmax(A);
    let front = 0,
        total = 0,
        back = 0;
    const elements = new Set();
    for (back = 0; back < n; back++) {
        front = back;
        elements.clear();
        while (front < n) {
            if (elements.has(A[front])) {
                break;
            }
            ++total;
            elements.add(A[front]);
            front += 1;
        }
    }

    return total;
}

function solutionMAST(A) {
    A.sort((a, b) => a - b);
    const n = A.length;
    let min = Number.MAX_SAFE_INTEGER,
        x = 0,
        y = n - 1;
    while (x <= y) {
        min = Math.min(min, Math.abs(A[x] + A[y]));
        if (Math.abs(A[x]) > Math.abs(A[y])) ++x;
        else --y;
    }
    return min;
}

console.log(solutionMAST([-8, 4, 5, -10, 3]));
const ks = new Array(20000000).fill(3);
console.time("mast");
solutionMAST(ks);
// for (let i = 0; i < 100000; ++i) solutionMAST(ks);
console.timeEnd("mast");


function solutionCT(A) {
    const N = A.sort((a, b) => a - b);
    const n = A.length;
    let z = 0,
        total = 0,
        x = 0,
        y = 0;
    for (x = 0; x < n - 2; x++) {
        y = x + 1;
        z = x + 2;
        while (z < n) {
            if ((N[x] + N[y] > N[z])) { //  && (A[y] + A[z] > A[x]) && (A[z] + A[x] > A[y])
                total += z - y;
                ++z;
            } else if (y < z - 1) {
                ++y;
            } else {
                ++z;
            }
        }
    }

    return total;
}

function solution2(M, A) {
    const n = A.length;
    const max = arrmax(A);
    let front = 0,
        total = 0,
        back = 0;
    const elements = new Array(max + 1).fill(false);
    for (back = 0; back < n; back++) {
        front = back;
        elements.fill(false);
        while (front < n) {
            if (elements[A[front]]) {
                break;
            }
            ++total;
            elements[A[front]] = true;
            front += 1;
        }
    }

    return total;
}

console.log(caterpillar([1, 5, 6, 2, 3, 7, 2, 9, 0, 4, 4, 4, 6, 1], 150));
console.log(solution(6, [3, 4, 5, 5, 2]));
console.log(solution2(6, [3, 4, 5, 5, 2]));
console.log(solutionCT([10, 2, 5, 1, 8, 12]));

console.time("solution 1");
for (let i = 0; i < 100000; ++i) solution(6, [3, 4, 5, 5, 2]);
console.timeEnd("solution 1");
console.time("solution 2");
for (let i = 0; i < 100000; ++i) solution2(6, [3, 4, 5, 5, 2]);
console.timeEnd("solution 2");
