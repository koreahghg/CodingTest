function solution(n) {
    if(n%7==0){
        return n/7;
    }
    else if(n%7 == n){
        return 1;
    }
    else {
        return Math.floor(n/7)+1;
    }
}