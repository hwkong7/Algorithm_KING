const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

let [N, a, b] = input;
let count = 0;

while (a !== b) {
  a = Math.ceil(a / 2);
  b = Math.ceil(b / 2);
  count++;
}

console.log(count);