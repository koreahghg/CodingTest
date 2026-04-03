function solution(phone_number) {
    let r = "";
    let a = phone_number.length;
    let b = phone_number.slice(0, a-4);
    let c = phone_number.slice(a-4, a+1);
    let d = b.length;
    for(let i = 0; i<b.length; i++){
        r += "*";
    }
    r += c;
    return r;
}