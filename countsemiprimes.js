
function sieve(n) {
    const s = new Array(n + 1).fill(true);
    s[0] = s[1] = false;
    let i = 2;
    while (i * i <= n) {
        if (s[i]) {
            let k = i * i;
            while (k <= n) {
                s[k] = false;
                k += i;
            }
        }
        ++i;
    }

    const semis = new Set();

    for (j = 2; j * j <= n; ++j) {
        if (s[j]) {
            for (k = j * j; k <= n;++k) {
                if (k % j == 0) {
                    if (s[Math.floor(k / j)]) {
                        semis.add(k)
                    }
                }
            }
        }
    }
    return semis;
}

function sums(semis, Q) {
    const result = [];
    result.push(0, 0, 0, 0, 1);

    const maxQ = Math.max(...Q) + 1;
    let lastSum = 1;

    for (i = 5; i < maxQ; ++i) {
        if (semis.has(i)) {
            result.push(result[i - 1] + 1);
        } else {
            result.push(result[i - 1]);
        }
    }
    return result;
}

function solution(N, P, Q) {
    const semis = sieve(N);
    const n = Q.length;

    const psum = sums(semis, Q);

    const r = [];

    for (i = 0; i < n; ++i) {
        r.push(psum[Q[i]] - psum[P[i]-1])
    }

    return r;

}

console.log(solution(26, [1,4,16], [26,10,20]));
