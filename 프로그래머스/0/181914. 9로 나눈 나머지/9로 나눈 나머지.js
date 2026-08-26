function solution(number) {
    let a = number.split("")
    let b = 0;
    for(let i = 0; i < number.length; i++){
        let c = Number(number[i])
        b += c
    }
    b %= 9
    return b;
}