function solution(s) {
    s = s.split(" ").map(Number);
    let max = s[0], min = s[0]; // [최댓값, 최솟값]
    for (let i = 0; i < s.length; i++) {
        if (s[i] > max) max = s[i];
        if (s[i] < min) min = s[i];
    }
    var answer = min + " " + max; // 최솟값과 최댓값을 문자열로 이어붙여서 반환
    return answer;
}