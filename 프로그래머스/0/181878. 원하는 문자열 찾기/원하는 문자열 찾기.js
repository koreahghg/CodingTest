function solution(myString, pat) {
    var answer = 0;
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();
    if(myString.includes(pat)){
        return 1;
    }
    return answer;
}