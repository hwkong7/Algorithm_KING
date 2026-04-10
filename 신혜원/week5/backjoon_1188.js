const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(" ");

const N = Number(input[0]);
const M = Number(input[1]);

function gcd(a, b) {
    while (b !== 0) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

console.log(M - gcd(N, M));