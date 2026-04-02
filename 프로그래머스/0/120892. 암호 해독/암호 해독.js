function solution(cipher, code) {
    let a = "";
    for(let i = 1; i<=cipher.length; i++){
        if(i%code == 0){
            a += cipher[i-1];
        }
    }
    return a;
}