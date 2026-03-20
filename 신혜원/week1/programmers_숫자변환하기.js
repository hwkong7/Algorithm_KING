/*
BFS 탐색 => Queue 자료구조 이용
*/
function solution(x, y, n) {
    let queue = [[x, 0]];
    let visited = new Set(); // BFS 탐색에서 방문한 숫자를 저장하는 Set 자료구조
    visited.add(x);

    let idx = 0;

    while (idx < queue.length) {
        let [cur, count] = queue[idx++];

        if (cur === y) return count;

        let next = [cur + n, cur * 2, cur * 3]; // 현재 숫자에서 다음에 올 수 있는 숫자들을 배열로 생성

        for (let num of next) {
            if (num <= y && !visited.has(num)) { // 다음 숫자가 목표 숫자 y보다 작거나 같고, 아직 방문하지 않은 경우
                visited.add(num); // 다음 숫자를 방문한 것으로 표시하여 Set에 추가
                queue.push([num, count + 1]); // 다음 숫자와 현재까지의 연산 횟수(count)에 1을 더한 값을 큐에 추가하여 BFS 탐색을 계속 진행
            }
        }
    }

    return -1; // 큐를 모두 탐색했음에도 목표 숫자 y에 도달하지 못한 경우 -1 반환
}