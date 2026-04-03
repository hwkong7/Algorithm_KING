function solution(n, s) {
    if (n > s) return [-1];

    let base = Math.floor(s / n);
    let remainder = s % n;

    let answer = Array(n).fill(base);

    for (let i = n - 1; i >= n - remainder; i--) {
        answer[i]++;
    }

    return answer;
}