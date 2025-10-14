function solution(array, height) {
    let a = 0;
    for(let i = 0; i<array.length; i++){
        if(height < array[i]) a++;
    }
    return a;
}