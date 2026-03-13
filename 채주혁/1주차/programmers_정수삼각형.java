class Solution {
    public int solution(int[][] triangle) {
        int answer = 0;
        int n = triangle.length;
        int[][] dp = new int[n+1][n+1];

        dp[1][1] = triangle[0][0];
        for(int i=2; i<=triangle.length; i++) {
            for(int j=1; j<=i; j++) {
                if(j==1) {
                    dp[i][j] = dp[i-1][j] + triangle[i-1][j-1];
                }
                else if(j==i) {
                    dp[i][j] = dp[i-1][j-1] + triangle[i-1][j-1];
                }
                else {
                    dp[i][j] = Math.max(dp[i-1][j-1],dp[i-1][j])+triangle[i-1][j-1];
                }
            }
        }
        for(int i=1; i<=n; i++) {
            answer = Math.max(answer,dp[n][i]);
        }

        return answer;
    }
}