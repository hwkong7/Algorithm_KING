/*
문제: 피보나치 함수

fib(0) = 0
fib(1) = 1
fib(n) = fib(n-1) + fib(n-2) (n > 1)

재귀적으로 구현하면 중복 계산이 많아져서 비효율적
=> 동적 계획법(DP)을 사용하여 0과 1의 호출 횟수를 미리 계산해두고, 입력에 따라 바로 결과를 출력하는 방식으로 해결
*/

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
// 첫 번째 줄은 테스트 케이스의 수 T, 이후 T개의 줄에는 각각 n이 주어므로 입력을 배열로 처리하여 T와 n들을 쉽게 접근할 수 있도록 함

const T = Number(input[0]);

// 0과 1 호출 횟수 저장
let zero = Array(41).fill(0);
let one = Array(41).fill(0);

// 초기값
zero[0] = 1;
one[0] = 0;
// fib(0) 호출 시 0이 1번, 1이 0번 호출됨

zero[1] = 0;
one[1] = 1;
// fib(1) 호출 시 0이 0번, 1이 1번 호출됨

// DP(동적계획법) 계산
for (let i = 2; i <= 40; i++) {
    zero[i] = zero[i - 1] + zero[i - 2]; //피보나치 함수
    one[i] = one[i - 1] + one[i - 2]; //피보나치 함수
}

let result = [];

for (let i = 1; i <= T; i++) {
    const n = Number(input[i]);
    result.push(zero[n] + " " + one[n]);
}

console.log(result.join("\n"));