const fs = require("fs");
const [N, L] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

let found = false;

for (let len = L; len <= 100; len++) {
    // 공식의 뒤쪽 부분
    const temp = N - (len * (len - 1)) / 2;

    // temp가 음수면 시작값 x가 0 이상일 수 없으므로 더 볼 필요 없음
    if (temp < 0) break;

    // temp를 len으로 나눴을 때 나누어떨어져야 x가 정수
    if (temp % len === 0) {
        const x = temp / len;

        // 시작값이 0 이상이면 조건 만족
        if (x >= 0) {
            let result = [];

            for (let i = 0; i < len; i++) {
                result.push(x + i);
            }

            console.log(result.join(" "));
            found = true;
            break;
        }
    }
}

if (!found) {
    console.log(-1);
}