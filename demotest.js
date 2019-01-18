function bad(A) {

    let s = A.sort((a, b) => a > b);

    var lowest = 1;

    for (var z = 0; z < s.length; z++) {
        if (s[z] > lowest + 1) {
            return lowest + 1;
        }
        if (s[z] > 0) {
            lowest = s[z];
        }
    }
    if (s[s.length - 1] <= 0) {
        return 1;
    }

    return s[s.length - 1] + 1;
}

function solution(A) {
    const set = new Set(A);
    let i = 1;

    while (set.has(i)) {
        i++;
    }

    return i;
}

let t = [];
for (var i = -1000000; i < 1000001; i++) t.push(i);
console.time("P test");
console.log("Found: " + solution(t));
console.timeEnd("P test");

console.time("P test");
console.log("Found: " + bad(t));
console.timeEnd("P test");

console.log("Found: " + solution([1, 6, 3]));
console.log("Found: " + solution([0]));
console.log("Found: " + solution([1, 3, 6, 4, 1, 2]));
console.log("Found: " + solution([1, 2, 3]));
console.log("Found: " + solution([-11, -2, -3]));