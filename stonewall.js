
function solution(H) {
    let alt = Number.MAX_SAFE_INTEGER;
    const stack = [0];
    let count = 0;

    for (i = 0; i < H.length; ++i) {
        if (H[i] == alt) continue;

        while (H[i] < alt) {
            alt = stack.pop();
        }

        if (H[i] > alt) {
            ++count;
            stack.push(alt);
            alt = H[i];
        }
    }
    return count;
}

console.log(solution([8,8,5,7,9,8,7,4,8]));

console.time("solution");
for (z = 0; z < 1000; ++z) {
    solution([8,8,5,7,9,8,7,4,8]);
}
console.timeEnd("solution");

