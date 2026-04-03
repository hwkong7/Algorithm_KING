/*
힙으로 구현하는 것이 효율적이지만 간단히 배열로 구현할 수도 있을거 같아서 배열로 구현.
다음번에는 힙으로 구현할 예정.
*/
function solution(operations) {
    let queue = [];

    for (let op of operations) {
        let [command, value] = op.split(' ');
        value = parseInt(value);

        if (command === 'I') {
            queue.push(value);
        } 
        else if (command === 'D') {
            if (queue.length === 0) continue;

            queue.sort((a, b) => a - b); // 정렬

            if (value === 1) {
                queue.pop();     // 최대값
            } else {
                queue.shift();   // 최소값
            }
        }
    }

    if (queue.length === 0) return [0, 0];

    queue.sort((a, b) => a - b);
    return [queue[queue.length - 1], queue[0]];
}