function solution(k, tangerine) {
    const count = new Map();

    // 1. 귤 크기별 개수 세기
    for (const size of tangerine) {
        count.set(size, (count.get(size) || 0) + 1);
    }

    // 2. 개수만 뽑아서 내림차순 정렬
    const arr = [...count.values()].sort((a, b) => b - a);

    // 3. 많이 나온 크기부터 담으면서 k개 채우기
    let sum = 0;
    let answer = 0;

    for (const num of arr) {
        sum += num;      // 현재 크기의 귤들을 전부 담음
        answer++;        // 종류 1개 사용

        if (sum >= k) {  // k개 이상 채웠으면 종료
            break;
        }
    }

    return answer;
}