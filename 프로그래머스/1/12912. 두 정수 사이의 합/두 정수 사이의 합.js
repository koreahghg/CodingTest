function solution(a, b) {
    let c = 0;
    if(a<b){
        for(let i = a; i<=b; i++){
            c += i;
        }
    }
    else{
        for(let i = b; i<=a; i++){
            c += i;
        }
    }
    return c;
}