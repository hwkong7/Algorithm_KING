function solution(priorities, location) {
    // 큐 생성 (중요도, 인덱스)
    let queue = priorities.map((priority, index) => [priority, index]);

    let count = 0;

    // 반복
    while (true) {
        let current = queue.shift(); // 맨 앞 꺼내기

        // 뒤에 더 중요한 프로세스 있는지 확인
        if (queue.some(v => v[0] > current[0])) {
            queue.push(current); // 있으면 뒤로 보내기
        } else {
            count++; // 출력

            // 내가 찾는 프로세스면 종료
            if (current[1] === location) {
                return count;
            }
        }
    }
}