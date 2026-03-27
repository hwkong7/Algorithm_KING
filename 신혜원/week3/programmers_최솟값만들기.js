function solution(A, B) {
    A.sort((a,b) => a-b); // A를 오름차순으로 정렬
    B.sort((a,b) => b-a); // B를 내림차순으로 정렬

    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i] * B[i];
    }
    return sum;
}