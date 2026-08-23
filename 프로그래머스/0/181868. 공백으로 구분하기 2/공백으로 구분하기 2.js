function solution(my_string) {
    var answer = [];
    answer = my_string.split(" ")
    answer = answer.filter((answer) => answer != "")
    
    return answer;
}