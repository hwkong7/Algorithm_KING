function solution(begin, target, words) {
    // target이 words에 없으면 변환 불가
    if (!words.includes(target)) return 0;

    let visited = new Array(words.length).fill(false);
    let queue = [[begin, 0]]; // [현재 단어, 변환 횟수]

    // 한 글자 차이인지 확인
    function canChange(a, b) {
        let diff = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) diff++;
        }
        return diff === 1;
    }

    // BFS 탐색
    while (queue.length > 0) {
        let [current, count] = queue.shift();

        // target 도착하면 종료
        if (current === target) return count;

        for (let i = 0; i < words.length; i++) {
            if (!visited[i] && canChange(current, words[i])) {
                visited[i] = true;
                queue.push([words[i], count + 1]);
            }
        }
    }

    return 0;
}