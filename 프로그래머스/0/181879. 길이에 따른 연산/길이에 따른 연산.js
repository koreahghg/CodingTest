function solution(num_list) {
    let result;
    if(num_list.length >= 11){
        result = 0;
        for(let i of num_list){
            result += i;
        }
    }
    else {
        result = 1;
        for(let i of num_list){
            result *= i;
        }
    }
    return result;
}