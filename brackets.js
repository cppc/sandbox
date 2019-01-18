const brackets = [
    [ '[', ']' ],
    [ '(', ')' ],
    [ '{', '}' ]
];

const stack = [];

function matchb(c) {
    if (c === '[') return 0;
    if (c === '(') return 1;
    if (c === '{') return 2;

    // for (i = 0; i < brackets.length; ++i) {
    //     if (c === brackets[i][0]) {
    //         // console.log("Found: ", c, i);
    //         return i;
    //     }
    // }
    return -1;
}

function matchc(c) {
    if (c === ']') return 0;
    if (c === ')') return 1;
    if (c === '}') return 2;
    // for (i = 0; i < brackets.length; ++i) {
    //     if (c === brackets[i][1]) {
    //         // console.log("Found: ", c, i);
    //         return i;
    //     }
    // }
    return -1;
}

function open(c) {
    if (c >= 0) {
        stack.push(c);
        // console.log("opened: ", c, stack);
        return true;
    }
    return false;
}

function close(c) {
    if (c >= 0) {
        const b = stack.pop();
        // console.log("test: ", c, b, stack);
        if (b != c) {
            return false;
        }
        // console.log("closed: ", c, stack);
    }
    return true;
}

function solution(S) {
    for (j = 0; j < S.length; ++j) {
        const c = S.charAt(j);
        if (!open(matchb(c))) {
            if (!close(matchc(c))) {
                return 0;
            }
        }
    }
    return stack.length == 0 ? 1 : 0;
}

console.log(solution("{[()()]}"));
console.log(solution("([)()]"));

console.time("solution");
for (z = 0; z < 1; ++z) {
    solution("{[()()]}");
}
console.timeEnd("solution");

console.time("longer");
for (z = 0; z < 100000; ++z) {
    solution("{[()()]}{[()()]}{[()()]}{[()()]}{[()()]}{[()()]}{[()()]}{[()()]}{[()()]}{[()()]}{[()()]}{[()()]}{[()()]}");
}
console.timeEnd("longer");

console.time("deep");
let s = "";
for (z = 0; z < 100000; ++z) {
    s = s.concat('{');
}
for (z = 0; z < 100000; ++z) {
    s = s.concat('}');
}
console.log(s);
//for (z = 0; z < 100000; ++z) {
    solution(s);
//}
console.timeEnd("deep");

