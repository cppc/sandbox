
function primality(n) {
    let i = 2;
    while (i * i <= n) {
        if (n % i == 0)
            return false;
        ++i;
    }
    return true;
}

console.log(primality(20));
console.log(primality(31));