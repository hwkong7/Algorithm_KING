const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const s = input[i].trim();
  const regex = /^(100+1+|01)+$/; // 정규 표현식: 100+1+ 또는 01이 반복되는 패턴
  console.log(regex.test(s) ? "YES" : "NO"); // 패턴이 일치하면 "YES", 그렇지 않으면 "NO" 출력
}