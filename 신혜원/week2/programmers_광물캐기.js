function solution(picks, minerals) {

    // 곡괭이 총 개수
    const totalPicks = picks[0] + picks[1] + picks[2];

    // 5개씩 그룹 만들기
    let groups = [];
    for (let i = 0; i < minerals.length; i += 5) {
        if (groups.length === totalPicks) break;
        groups.push(minerals.slice(i, i + 5));
    }

    // 그룹별 점수 계산
    let arr = [];
    for (let group of groups) {
        let score = 0;

        // 돌 곡괭이로 캘 때의 피로도 계산 (힘든 광물일수록 점수 높게)
        for (let m of group) {
            if (m === "diamond") score += 25;
            else if (m === "iron") score += 5;
            else score += 1;
        }

        arr.push({ group, score }); // 그룹과 점수를 객체로 저장
    }

    // 점수 기준 내림차순 정렬 (힘든 그룹 먼저)
    arr.sort((a, b) => b.score - a.score);

    // 곡괭이 펼치기
    let picksArr = [];
    for (let i = 0; i < picks[0]; i++) picksArr.push("diamond");
    for (let i = 0; i < picks[1]; i++) picksArr.push("iron");
    for (let i = 0; i < picks[2]; i++) picksArr.push("stone");

    // 피로도 계산
    let answer = 0;

    for (let i = 0; i < arr.length; i++) {
        let pick = picksArr[i];
        if (!pick) break; // 곡괭이 다 쓴 경우

        let group = arr[i].group; //

        for (let m of group) {
            if (pick === "diamond") {
                answer += 1;
            } else if (pick === "iron") {
                if (m === "diamond") answer += 5;
                else answer += 1;
            } else {
                if (m === "diamond") answer += 25;
                else if (m === "iron") answer += 5;
                else answer += 1;
            }
        }
    }

    return answer;
}