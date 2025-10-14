function solution(num_list) {
    let a = 0;
    for (let i = 0; i < num_list.length; i++) {
        a += num_list[i];
    }
    let b = 1;
    for (let i = 0; i < num_list.length; i++) {
        b *= num_list[i];
    }
    if (b < a * a) return 1;
    else return 0;
}
