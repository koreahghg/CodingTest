function solution(num) {
    for(let i = 1; i<=500; i++){
        if(i==1 && num==1){
            return 0;
        }
        if(num % 2 == 0){
            num /= 2;
        }
        else num = num*3 + 1;
        
        if(num == 1) return i;
    }
    return -1;
}