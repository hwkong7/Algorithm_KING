/*
두 원 사이의 정수 쌍
문제 설명
두 원이 평면 위에 있습니다. 두 원의 중심은 원점(0, 0)에 있고, 반지름이 각각 r1과 r2입니다. 이때, 두 원 사이에 있는 정수 쌍 (x, y)의 개수를 구하려고 합니다. 정수 쌍 (x, y)는 다음 조건을 만족해야 합니다.
r1^2 < x^2 + y^2 ≤ r2^2
즉, (x, y)가 원점에서 r1보다 멀리 떨어져 있고, r2보다 가까이 떨어져 있어야 합니다. x와 y는 모두 정수여야 합니다.
입력 형식
반지름 r1과 r2가 공백으로 구분되어 주어집니다. (1 ≤ r1 < r2 ≤ 10,000)
출력 형식
두 원 사이에 있는 정수 쌍 (x, y)의 개수를 출력합니다.
*/

function solution(r1, r2) {
    let answer = 0;

    // x가 r2보다 작거나 같은 경우 
    for (let x = 1; x <= r2; x++) {
        let outerY = Math.floor(Math.sqrt(r2 * r2 - x * x));
        // 원점에서 (x, y)까지의 거리가 r2보다 작거나 같은 정수 y의 최대값(floor)을 계산하여 outerY에 저장

        let innerY = 0;
        // x가 r1보다 큰 경우
        if (r1 * r1 - x * x > 0) {
            innerY = Math.ceil(Math.sqrt(r1 * r1 - x * x));
        }
        //원점에서 (x, y)까지의 거리가 r1보다 큰 정수 y의 최소값(ceil)을 계산하여 innerY에 저장

        // outerY에서 innerY를 빼고 1을 더한 값이 x에 대해 가능한 y의 개수가 된다.
        answer += outerY - innerY + 1;

    }

    return answer * 4;
}