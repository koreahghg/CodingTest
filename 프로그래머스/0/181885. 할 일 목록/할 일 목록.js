function solution(todo_list, finished) {
    let a = [];
    for(let i = 0; i < todo_list.length; i++){
        if(finished[i] != true){
            a.push(todo_list[i])
        }
    }
    return a;
}