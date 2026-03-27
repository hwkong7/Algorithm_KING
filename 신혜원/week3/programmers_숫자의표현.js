function solution(n) {
    let count = 0;

    for (let k = 1; k <= n; k++) { // k는 1부터 n까지의 자연수
        if ((2 * n) % k === 0) { // 2n이 k로 나누어 떨어지는 경우에만 계산
            let a = (2 * n / k - k + 1) / 2; // a를 계산하는 공식

            if (a > 0 && Number.isInteger(a)) { // a가 양수이면서 정수인 경우에만 count 증가
                count++;
            }
        }
    }

    return count;
}