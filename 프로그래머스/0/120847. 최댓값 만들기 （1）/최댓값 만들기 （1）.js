function solution(numbers) {
    let max = 0;
    for(let i = 0; i<numbers.length; i++){
        for(let j = 0; j<numbers.length; j++){
            if(max < numbers[i] * numbers[j] && i!=j){
              max = numbers[i] * numbers[j];  
            } 
        }
    }
    return max;
}