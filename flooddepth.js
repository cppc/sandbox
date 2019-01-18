

// function solution(A) {
//     const n = A.length;
//
//     let altitude = A[0];
//     let depth = 0;
//     let left = 0;
//
//     while (left < n) {
//         let right = left + 1;
//         let bottom = A[left];
//         while (right < n) {
//             if (A[right] >= A[left]) {
//                 depth = Math.max(depth, Math.min(A[left], A[right]) - bottom);
//                 left = right;
//                 break;
//             } else {
//                 bottom = Math.min(bottom, A[right]);
//                 ++right;
//             }
//         }
//     }
//
//     for (let i = 1; i < n; ++i) {
//         if (A[i] < altitude) {
//             depth = Math.max(depth, altitude - A[i]);
//         } else if (A[i] >= altitude) {
//             altitude =
//         }
//     }
// }

function nextDrop(A, n, i) {
    let r = n;
    while (A[r] <= A[r + i]) {
        r += i;
    }
    return r;
}


function solution2(A) {
    const n = A.length;

    if (n < 3) return 0;

    let altitude = A[0];
    let depth = 0;
    let left = 0;
    let right = n - 1;


    right = nextDrop(A, right, -1);
    left = nextDrop(A, left, 1);

    while (left < right) {
        let height = A[left];
        let bottom = 100000000;
        while (A[++left] < height) {
            bottom = Math.min(bottom, A[left]);
        }
        console.log(Math.min(height, A[left]));
        console.log(Math.floor(depth));
        console.log(Math.min(height, A[left]) - bottom);

        depth = Math.max(depth, Math.min(height, A[left]) - bottom);
        left = nextDrop(A, left, 1);
        if (left < right) {
            height = A[right];
            bottom = 1000000000;
            while (A[--right] < height) {
                bottom = Math.min(bottom, A[right]);
            }
            depth = Math.max(depth, Math.min(height, A[right]) - bottom);
        }
    }

    return depth;
}

function solution3(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxH = 0;
    let minH = 0;
    let maxDepth = 0;

    for (let i=0; i<A.length; i++) {
        let diff = 0;

        if (A[i] > maxH) {
            diff = maxH - minH;
            maxH = A[i];
            minH = A[i];
        } else if (A[i] < minH) {
            minH = A[i];
        } else {
            diff = A[i] - minH;
        }

        maxDepth = Math.max(diff, maxDepth);
        console.log(`i:${i} A[i]:${A[i]} maxDepth:${maxDepth} diff:${diff} minH:${minH} maxH:${maxH}`);
    }

    return maxDepth;
}

// console.log(solution2([1,3,2,1,2,1,5,3,3,4,2]));
// console.log(solution2([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));
// console.log(solution2([0]));
// console.log(solution2([1,3]));
// console.log(solution2([3,2,1]));
// console.log(solution2([3,2,1,1,2,3]));

const arr = [];

for (let d = 1; d <= 100000; ++d) arr.push(Math.floor(Math.random() * 1000000000));
console.log(solution2(arr));

console.log(solution3([1,2,3,4,5,6,7,1,1]));
console.log(solution3([1,2,3,4,5,4,4,6,1,6,3]));
