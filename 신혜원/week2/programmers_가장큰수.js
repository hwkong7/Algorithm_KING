function solution(numbers) {
    let answer = numbers
        .map(String) // 숫자를 문자열로 변환
        .sort((a, b) => (b + a) - (a + b)) // a와 b를 이어붙인 문자열을 비교하여 정렬
        .join(""); // 이어붙이기

    // 예외: "000" 같은 경우
    return answer[0] === "0" ? "0" : answer;
}