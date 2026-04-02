function solution(strArr) {
    let a = [];
    for(let i = 0; i<strArr.length; i++){
        if(strArr[i].includes("ad")){
            continue;
        }
        a.push(strArr[i]);
    }
    return a;
}