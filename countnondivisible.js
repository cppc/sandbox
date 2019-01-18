

function solution(A) {
    const max = Math.max(...A);
    const n = A.length;
    const elemCount = new Map();
    const divisorsOf = new Map();
    const counts = new Array(n).fill(0);

    for (i = 0; i < n; ++i) {
        const elem = A[i];
        if (elemCount.has(elem)) {
            elemCount.set(elem, elemCount.get(elem) + 1);
        } else {
            elemCount.set(elem, 1);
        }
        divisorsOf.set(elem, new Set([1, elem]));
    }

    for (divisor = 2; divisor*divisor <= max; ++divisor) {
        for (possible = divisor; possible <= max; possible += divisor) {
            if (divisorsOf.has(possible)) {
                const divs = divisorsOf.get(possible);
                if (!divs.has(divisor)) {
                    divs.add(divisor);
                    divs.add(Math.floor(possible / divisor));
                }
            }
        }
    }
    console.log(elemCount);
    console.log(divisorsOf);


    for (j = 0; j < n; ++j) {
        console.log("Counting: ", j, A[j]);
        let count = 0;
        divisorsOf.get(A[j]).forEach(div => {
            console.log("Adding: ", elemCount.get(div), " occurences of ", div);
            count += elemCount.get(div);
        });
        counts[j] = n - count;
    }

    return counts;

}

function better(A) {
    // const max = Math.max(...A);
    const n = A.length;

    const sorted = [...A];
    sorted.sort((a, b) => a - b);
    const max = sorted[n - 1];
    const counts = new Array(max + 1).fill(0);
    const isInA = new Array(max + 1).fill(false);

    for (i = 0; i < n; ++i) {
        isInA[A[i]] = true;
        ++counts[A[i]];
    }

    for (j = 0; j < n; ++j) {
        for (divisor = 2; A[j]*divisor <= max; ++divisor) {
            const val = A[j] * divisor;
            if (isInA[val]) {
                ++counts[val];
            }
        }
    }

//    const nonDivs = new Array(n).fill(0);
    const nonDivs = [];//new Array(n).fill(0);

    for (k = 0; k < n; ++k) {
        nonDivs.push(n - counts[A[k]]);
        // nonDivs[k] = n - counts[A[k]];
    }

    return nonDivs;

}

// console.log(solution([3,1,2,3,6]));
// console.log(solution([1]));
// console.log(solution([1, 5]));
// console.log(solution([1, 1,1,1,1,1,1,1,1,1]));

console.log(better([3,1,2,3,6]));
console.log(better([1]));
console.log(better([1, 5]));
console.log(better([1, 1,1,1,1,1,1,1,1,1]));

const t = [];
for (i = 1; i < 20001; ++i) {
    t.push(i);
}
console.time("range");
better(t);
console.timeEnd("range");

