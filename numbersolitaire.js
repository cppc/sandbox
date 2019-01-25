function game(S) {
    const n = S.length;
    const dp = new Array(n).fill(Number.MIN_SAFE_INTEGER);
    dp[0] = S[0];
    for (let i = 1; i < n; ++i) {
        for (let j = 1; j <= 6; ++j) {
            if (j <= i) {
                if (S[i] + dp[i - j] > dp[i]) {
                    dp[i] = S[i] + dp[i - j];
                }
            } else {
                break;
            }
        }
    }
    return dp[n - 1];
}

console.log(game([1,-2,0,9,-1,-2]));