/*
- BFS(너비우선탐색) => Queue(큐) 자료구조를 이용하여 탐색하는 방법
=> 가까운 노드부터 탐색 => 최단거리 문제
- source에서 시작하면 BFS를 많이 사용하기 때문에
- destination에서 시작하여 BFS를 한번만 사용
- dist[i] = destination에서 i까지의 최단거리
- dist[i] = -1 => 방문하지 않은 노드
- dist[i] = 0 => destination 노드
- dist[i] > 0 => 방문한 노드
*/
function solution(n, edges, source, destination) {
    // 그래프 초기화
    let graph = [];
    // n개의 노드에 대한 빈 배열 생성
    for (let i = 0; i < n; i++) {
        graph.push([]);
    }

    for (let road of roads) {
        let a = road[0];
        let b = road[1];

        graph[a].push(b);
        graph[b].push(a);
    }
    // 거리 배열 초기화
    let dist = [];

    for (let i = 0; i < n; i++) {
        dist.push(-1);
    }

    // BFS 탐색
    let queue = [];
    queue.push(destination); // 시작점
    dist[destination] = 0; // 자기 자신 거리

    // 큐가 빌 때까지 반복
    while (queue.length > 0) {
        let cur = queue.shift(); // 큐에서 현재 노드 꺼내기

        for (let next of graph[cur]) { //next는 cur과 인접한 노드
            if (dist[next] === -1) { // 방문안했으면
                dist[next] = dist[cur] + 1; // 거리 갱신
                queue.push(next); // 큐에 다음 노드 추가
            }

        }
    }
    let answer = [];
    for (let s of sources) {
        answer.push(dist[s]);
    }

    return answer;

}