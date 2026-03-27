function solution(n, edge) {
    // 그래프 만들기 (인접 리스트)
    let graph = Array.from({ length: n + 1 }, () => []);

    for (let [a, b] of edge) {
        graph[a].push(b);
        graph[b].push(a);
    }

    // 거리 배열 (방문 여부 + 거리)
    let dist = Array(n + 1).fill(-1);

    // BFS 준비
    let queue = [];
    queue.push(1);
    dist[1] = 0;

    // BFS 실행
    while (queue.length > 0) {
        let now = queue.shift();

        for (let next of graph[now]) {
            if (dist[next] === -1) { // 방문 안했으면
                dist[next] = dist[now] + 1;
                queue.push(next);
            }
        }
    }

    // 가장 먼 거리 찾기
    let max = Math.max(...dist);

    // 그 거리 개수 세기
    return dist.filter(v => v === max).length;
}