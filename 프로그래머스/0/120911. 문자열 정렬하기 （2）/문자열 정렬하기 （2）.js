function solution(my_string) {
    let aaa = my_string.toLowerCase();
    let bbb = aaa.split('').sort().join('');
    return bbb;
}