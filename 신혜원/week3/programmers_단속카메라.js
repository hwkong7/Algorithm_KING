function solution(routes) {
    // 진출 지점 기준 정렬
    routes.sort((a, b) => a[1] - b[1]);

    let camera = -Infinity; // 카메라 위치 초기화(-무한대로)
    let count = 0;

    for (let [start, end] of routes) {
        // 현재 카메라로 못 찍는 경우
        if (start > camera) {
            count++;
            camera = end; // 카메라 설치
        }
    }

    return count;
}