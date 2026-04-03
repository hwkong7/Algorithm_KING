function solution(sticker) {
    const n = sticker.length;
    
    if (n === 1) return sticker[0];
    if (n === 2) return Math.max(sticker[0], sticker[1]);
    
    // 1) 첫 번째 스티커를 뜯는 경우
    const dp1 = new Array(n).fill(0);
    dp1[0] = sticker[0];
    dp1[1] = sticker[0];
    
    for (let i = 2; i < n - 1; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    }
    
    // 2) 첫 번째 스티커를 안 뜯는 경우
    const dp2 = new Array(n).fill(0);
    dp2[0] = 0;
    dp2[1] = sticker[1];
    
    for (let i = 2; i < n; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
    }
    
    return Math.max(dp1[n - 2], dp2[n - 1]);
}