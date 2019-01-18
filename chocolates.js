
function gcd(p, q) {
    while (q > 0) {
        const x = p;
        p = q;
        q = x % q;
    }
    return p;
}

function multiple(p, q) {
    return p * Math.floor(q / gcd(p, q));
}

function solution(N, M) {
    return multiple(N, M) / M;
}

function simple(N, M) {
    let eaten = 0;
    const visited = new Array(N).fill(false);
    for (i = 0; i < N; i = (i + M) % N) {
        if (visited[i]) {
            return eaten;
        }
        visited[i] = true;
        ++eaten;
    }
    return eaten;
}

console.log(simple(10, 4));
console.log(solution(10, 4));

console.time("simple");
for (c = 0; c <10000; ++c) {
    simple(10, 4);
}
console.timeEnd("simple");

console.time("better");
for (j = 0; j <10000; ++j) {
    solution(10, 4);
}
console.timeEnd("better");

