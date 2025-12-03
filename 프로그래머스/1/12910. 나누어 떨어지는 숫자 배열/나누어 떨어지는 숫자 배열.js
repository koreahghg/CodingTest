function solution(arr, divisor) {
    var answer = [];
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%divisor == 0){
            answer.push(arr[i]);
            count++;
        }
    }
    answer.sort((a,b)=> a-b);
    if(count == 0){
        answer.push(-1);
        return answer;
    }
    return answer;
}