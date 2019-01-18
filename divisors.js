
function divisors(n) {
    let i = 1;
    let result = 0;

    while (i * i < n) {
        if (n % i == 0) {
            result += 2;
            console.log(i, n / i);
        }
        ++i;
    }

    if (i * i == n) {
        console.log(i * i);
        ++result;
    }

    return result;
}

console.log(divisors(36));
console.log(divisors(30));
console.log(divisors(15));