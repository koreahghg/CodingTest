function solution(numbers) {
    let a = 0;
    for (let i = 0; i <= 9; i++) {
        if (!numbers.includes(i)) {
            a += i;
        }
    }
    return a;
}
