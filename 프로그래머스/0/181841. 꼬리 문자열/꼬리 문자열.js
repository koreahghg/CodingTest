function solution(str_list, ex) {
    let a = "";
    for(let i = 0; i<str_list.length; i++){
        if(str_list[i].includes(ex)){
           continue;
           }
        a += str_list[i];
    }
    return a;
}