
function solution(S) {
    const stack = [];
    for (j = 0; j < S.length; ++j) {
        const c = S.charAt(j);
        if (c === '(') {
            stack.push(c);
        } else if (stack.length > 0) {
            stack.pop();
        } else {
            return 0;
        }
    }
    return stack.length == 0 ? 1 : 0;
}

function better(S) {
    left = 0;
    for (j = 0; j < S.length; ++j) {
        const c = S.charAt(j);
        if (c === '(') {
            ++left;
        } else if (left > 0) {
            --left;
        } else {
            return 0;
        }
    }
    return left == 0 ? 1 : 0;
}

console.log(solution("(()(())())"));
console.log(solution("())"));

console.time("solution");
for (z = 0; z < 1000; ++z) {
    solution("(()(())())");
}
console.timeEnd("solution");

console.log(better("(()(())())"));
console.log(better("())"));

console.time("better");
for (z = 0; z < 1000; ++z) {
    better("(()(())())");
}
console.timeEnd("better");
