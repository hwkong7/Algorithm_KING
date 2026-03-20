const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let T = Number(input[0]);
let idx = 1;

// 점이 원 안에 있는지 확인
function inside(x, y, cx, cy, r) {
    return (x - cx) ** 2 + (y - cy) ** 2 < r ** 2; //원 안에 있으면 true, 원 밖에 있으면 false 반환
}

for (let t = 0; t < T; t++) {

    let [x1, y1, x2, y2] = input[idx++].split(" ").map(Number);
    // 시작점과 도착점의 좌표를 각각 x1, y1, x2, y2에 할당하기 위해 입력을 공백으로 분리하여 숫자로 변환하여 배열로 처리한 후 각각의 변수에 할당
    let n = Number(input[idx++]);

    let count = 0;

    for (let i = 0; i < n; i++) {

        let [cx, cy, r] = input[idx++].split(" ").map(Number);

        let startInside = inside(x1, y1, cx, cy, r);
        let endInside = inside(x2, y2, cx, cy, r);

        if (startInside !== endInside) {
            count++;
        }
        // 시작점과 도착점이 원 안에 있는지 여부가 다르면, 즉 하나는 원 안에 있고 다른 하나는 원 밖에 있는 경우, count를 1 증가시킴
    }

    console.log(count);
}