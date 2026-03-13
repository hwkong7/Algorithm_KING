import java.util.*;
class Solution {
    public int solution(int N, int number) {
        int answer = 0;
        Set<Integer>[] dp = new HashSet[9];
        for(int i=1; i<=8; i++) {
            dp[i] = new HashSet<>();
        }
        int repeat = 0;
        for(int i=1; i<=8; i++) {
            repeat = repeat *10 +N;
            dp[i].add(repeat);
            for(int j=1; j<i; j++) {
                for(int a: dp[j]) {
                    for(int b: dp[i-j]) {
                        dp[i].add(a+b);
                        dp[i].add(a-b);
                        dp[i].add(a*b);
                        if(b!=0)
                            dp[i].add(a/b);
                    }
                }
            }
            if(dp[i].contains(number))
                return i;
        }

        return -1;

    }
}