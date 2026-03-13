function solution(plans) {

    // HH:MM 을 분으로 변환
    const toMin = (time) => { // HH:MM 형식의 문자열을 분으로 변환하는 함수
        const [h, m] = time.split(":").map(Number);
        // HH:MM 형식의 문자열을 ":" 기준으로 분리하여 각각을 숫자로 변환하여 h와 m에 할당
        return h * 60 + m;
    };

    // 시작시간 기준 정렬
    plans = plans
        .map(p => [p[0], toMin(p[1]), Number(p[2])]) // 각 계획의 시작 시간을 분으로 변환하여 새로운 배열로 매핑
        .sort((a, b) => a[1] - b[1]); // 시작 시간을 기준으로 오름차순 정렬

    const stack = [];
    const result = [];

    for (let i = 0; i < plans.length; i++) {

        let [name, start, playtime] = plans[i];
        // 과목이름, 시작 시간, 소요 시간을 각각 name, start, playtime에 할당

        // 마지막 과제
        if (i === plans.length - 1) {
            result.push(name);

            // stack 남은거 처리
            while (stack.length) {
                result.push(stack.pop()[0]);
            }
            break;
        }

        let nextStart = plans[i + 1][1];
        let time = nextStart - start; // 다음 과제 시작까지 남은 시간 계산

        // 현재 과제 다 못함
        if (playtime > time) { //playtime : 과제 소요 시간, time : 다음 과제 시작까지 남은 시간
            stack.push([name, playtime - time]); // 현재 과제를 stack에 남은 시간과 함께 저장
        }
        // 현재 과제 끝냄
        else {
            result.push(name);
            let remain = time - playtime; // 다음 과제 시작까지 남은 시간에서 현재 과제 소요 시간을 뺀 값 계산

            // 남은 시간으로 stack 처리
            while (remain > 0 && stack.length) { // 남은 시간이 0보다 크고 stack에 과제가 남아있는 동안 반복
                let [prevName, prevTime] = stack.pop(); // stack에서 마지막 과제를 꺼내어 prevName과 prevTime에 할당

                if (prevTime <= remain) { // 꺼낸 과제의 소요 시간이 남은 시간보다 작거나 같은 경우
                    remain -= prevTime; // 남은 시간에서 꺼낸 과제의 소요 시간을 뺌
                    result.push(prevName); // 꺼낸 과제의 이름을 결과에 추가
                } else {
                    stack.push([prevName, prevTime - remain]); // 꺼낸 과제의 소요 시간이 남은 시간보다 큰 경우, 남은 시간만큼 과제 소요 시간을 줄여서 다시 stack에 저장
                    remain = 0; // 남은 시간을 0으로 설정하여 더 이상 stack에서 과제를 처리하지 않도록 함
                }
            }
        }
    }

    return result;
}