/*
!!! 가로 X 세로
=> 좌표 , 문제에서 주어진 웅덩이
!!! 행 X 열
=> 2차원 배열, 행렬, 코드
=> 문제에서는 웅덩이가 좌표로 주어졌기 때문에 코드에서는 y,x 자리를 바꾸어 계산해야함.
*/
function solution(m, n, puddles) {
    const MOD = 1000000007;
    
    // 2차원 배열을 미리 만들고 0으로 초기화
    const dp = Array.from({ length: n + 1 }, () => new Int32Array(m + 1));

    // 웅덩이 위치를 -1로 표시
    for (const [px, py] of puddles) {
        dp[py][px] = -1; // y,x 자리 바꾸기!!!
    }

    dp[1][1] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // 시작점은 이미 1이므로 건너뛰기
            if (i === 1 && j === 1) continue;
            
            // 웅덩이라면 0으로 바꾸고 다음 칸으로 이동
            if (dp[i][j] === -1) {
                dp[i][j] = 0;
                continue;
            }

            // 위쪽(i-1)과 왼쪽(j-1) 값을 더함
            dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
        }
    }

    return dp[n][m];
}