
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
    return s;
}

console.log(sieve(17));
console.log(sieve(35));
console.log(sieve(3));