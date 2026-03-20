/*
      [i][j]
      /   \
[i+1][j], [i+1][j+1]

- 아래에서부터 올라가며 최대 경로 합 계산
*/



function solution(triangle) {
    // 깊은 복사로 tringle 배열의 값을 dp 배열로 복사
    let dp = triangle.map(row => [...row]);

    // 아래에서부터 올라가며 최대 경로 합 계산
    for (let i = dp.length - 2; i >= 0; i--) { // 마지막 행 바로 위부터 시작(dp.length-2)
        for (let j = 0; j < dp[i].length; j++) {
            dp[i][j] += Math.max(
                dp[i + 1][j],
                dp[i + 1][j + 1]
            );
        }
    }

    return dp[0][0];
}