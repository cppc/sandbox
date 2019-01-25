function frog(S, k, q) {
    const n = S.length;
    const dp = new Array(k + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i < k + 1; ++i) {
        for (let j = 0; j < n; ++j) {
            if (S[i] <= j) {
                dp[i] = (dp[j] + dp[j - S[i]]) % q;
            }
        }
    }
    return dp[k];
}
