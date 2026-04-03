function solution(A, B) {
    A.sort((a,b) => a-b); // A를 오름차순으로 정렬
    B.sort((a,b) => a-b); // B를 오름차순으로 정렬
 
    let answer = 0; // 점수
    let i = 0, j = 0;

    while (i < A.length && j < B.length) { 
        if (B[j] > A[i]) { // B[j]가 A[i]보다 클때
            answer++; // B가 이겼으므로 점수 1점 추가
            i++; // A의 다음 요소로 이동
            j++; // B의 다음 요소로 이동
        }
        else if (B[j] <= A[i]) { // B[j]가 A[i]보다 작거나 같을 때
            j++; // B의 다음 요소로 이동하여 더 큰 값을 찾기
        }
    }
    return answer;
}