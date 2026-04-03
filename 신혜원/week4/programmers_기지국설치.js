function solution(n, stations, w) {
    let answer = 0;
    let position = 1; // 현재 검사 위치
    const range = 2 * w + 1; // 한 기지국이 커버하는 구간의 길이

    for (let station of stations) {
        let left = station - w; // 기지국이 커버하는 구간의 왼쪽 끝

        // 빈 구간이 있다면
        if (position < left) {
            let gap = left - position; // 빈 구간의 길이
            answer += Math.ceil(gap / range); // 필요한 기지국 수 계산
        }

        // 현재 위치를 커버된 끝으로 이동
        position = station + w + 1;
    }

    // 마지막 기지국 이후 남은 구간 처리
    if (position <= n) {
        let gap = n - position + 1;
        answer += Math.ceil(gap / range); // 필요한 기지국 수 계산
    }

    return answer;
}