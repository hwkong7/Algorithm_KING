function solution(n) {
    let countOne = (num) => num.toString(2).split("1").length - 1;
    let target = countOne(n);
    
    let next = n+1;
    
    while(true)
        {
            if (countOne(next) === target) {
                return next;
            }
            next++;
        }

}