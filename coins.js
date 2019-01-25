function coins(C, k) {
    const n = C.length;
    const dp = new Array(k + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let i = 1; i < n + 1; ++i) {
        for (let j = C[i - 1]; j < k + 1; ++j) {
            dp[j] = Math.min(dp[j - C[i - 1]] + 1, dp[j]);
        }
    }
    return dp;
}
