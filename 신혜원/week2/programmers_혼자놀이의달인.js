function solution(cards) {
    let visited = Array(cards.length).fill(false);
    let groups = [];

    for (let i = 0; i < cards.length; i++) {
        // 이미 방문한 카드면 건너뛰기
        if (visited[i]) continue;

        let count = 0;
        let cur = i;

        while (!visited[cur]) {
            visited[cur] = true;
            // cards[cur]는 1부터 시작하므로 인덱스에 맞게 -1 해줌
            cur = cards[cur] - 1;
            count++;
        }

        groups.push(count);
    }
    // 그룹 크기 내림차순 정렬
    groups.sort((a, b) => b - a);
    // 그룹이 2개 이상인 경우 가장 큰 두 그룹의 크기를 곱해서 반환
    if (groups.length < 2) return 0;
    // 가장 큰 두 그룹의 크기를 곱해서 반환
    return groups[0] * groups[1];
}
