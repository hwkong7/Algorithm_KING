function solution(triangle) {
    // 깊은 복사
    let dp = triangle.map(row => [...row]);

    // 아래에서부터 올라가며 최대 경로 합 계산
    for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = 0; j < dp[i].length; j++) {
            dp[i][j] += Math.max(
                dp[i + 1][j],
                dp[i + 1][j + 1]
            );
        }
    }

    return dp[0][0];
}