/*
모든 구간 다 검사해야하기 때문에 이중 for문으로 풀이해도 되지만 시간 복잡도가 O(n²)이므로
투 포인터 (슬라이딩 윈도우)로 풀이
sequence = [1, 2, 3, 4, 5] , k = 7
처음 1부터 시작해서 2,3,4,5를 더해가면서 k와 비교
이때 포인터를 L, R로 지정
*/
function solution(sequence, k) {
    let left = 0;
    let sum = 0;

    let answer = [0, sequence.length - 1];

    for (let right = 0; right < sequence.length; right++) {
        sum += sequence[right];

        // sum이 k보다 크면 
        // left 포인터를 오른쪽으로 이동시키면서 sum에서 sequence[left] 값을 빼줌
        while (sum > k) {
            sum -= sequence[left];
            left++;
        }

        // sum이 k와 같으면 
        // 현재 구간의 길이(right - left)가 기존에 저장된 구간의 길이(answer[1] - answer[0])보다 작은지 비교하여 더 짧은 구간을 answer에 저장
        if (sum === k) {
            if (right - left < answer[1] - answer[0]) {
                answer = [left, right];
            }
        }
    }

    return answer;
}