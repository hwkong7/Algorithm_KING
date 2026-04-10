const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

a.sort((x,y)=> x-y);
b.sort((x,y)=> y-x);
let sum = 0;
for(let i = 0; i < a.length; i++){
    sum += a[i] * b[i];
} 
console.log(sum);