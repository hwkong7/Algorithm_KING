function solution(n, computers) {
    let visited = Array(n).fill(false);
    let count = 0;

    // DFS 함수
    function dfs(i) {
        visited[i] = true;

        // 연결된 컴퓨터 탐색
        for (let j = 0; j < n; j++) {
            if (computers[i][j] === 1 && !visited[j]) {
                dfs(j);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);      // 하나의 네트워크 탐색
            count++;     // 네트워크 개수 증가
        }
    }

    return count;
}