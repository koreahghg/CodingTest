function solution(myString) {
    let a = myString.replaceAll(/[a-l]/g, "l")
    return a;
}