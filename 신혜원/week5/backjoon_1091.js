const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const P = input[1].split(" ").map(Number);
const S = input[2].split(" ").map(Number);

let cards = Array.from({ length: N }, (_, i) => i);
const start = cards.slice();

function check() {
  for (let i = 0; i < N; i++) {
    if (P[cards[i]] !== i % 3) return false;
  }
  return true;
}

function shuffle() {
  const next = new Array(N);
  for (let i = 0; i < N; i++) {
    next[S[i]] = cards[i];
  }
  cards = next;
}

let answer = 0;

while (true) {
  if (check()) {
    console.log(answer);
    break;
  }

  shuffle();
  answer++;

  let same = true;
  for (let i = 0; i < N; i++) {
    if (cards[i] !== start[i]) {
      same = false;
      break;
    }
  }

  if (same) {
    console.log(-1);
    break;
  }
}