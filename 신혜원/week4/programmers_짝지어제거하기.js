function solution(s)
{
    let stack = [];
    for (let char of s){
        if (stack.length > 0 && stack[stack.length-1] === char) {
            //같으면 제거
            stack.pop();
        } else //다르면 추가
            stack.push(char);
    }
     return stack.length === 0 ? 1 : 0;
}