function solution(a, b) {
    a = String(a);
    b = String(b);
    
    let temp1 = a + b;
    let temp2 = b + a;
    if(temp1 > temp2) {
        return Number(temp1);
    } else {
        return Number(temp2);
    }
}
