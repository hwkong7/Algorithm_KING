function solution(s){
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") { // 여는 괄호면 스택에 추가
            stack.push("(");
        } else { // 닫는 괄호면
            if (stack.length === 0) { // 스택이 비어있다면 false 반환
                return false;
            }
            stack.pop(); // 스택에서 () 제거
        }
    }

    return stack.length === 0; // 스택이 비어있으면 true, 그렇지 않으면 false 반환
}