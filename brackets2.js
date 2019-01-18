
function solution(S) {
    const stack = [];
    for (j = 0; j < S.length; ++j) {
        const c = S.charAt(j);
        if (c === '{' || c === '[' || c === '(') {
            stack.push(c);
        } else if (stack.length > 0) {
            const b = stack.pop();
            if (!((c === '}' && b === '{')
                || (c === ']' && b === '[')
                || (c === ')' && b === '('))) {
                return 0;
            }
        } else {
            return 0;
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
//console.log(s);
//for (z = 0; z < 100000; ++z) {
solution(s);
//}
console.timeEnd("deep");

