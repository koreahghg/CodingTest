function solution(n) {
    let a = [n]; 
    let i = n;

    while (i !== 1) {
        if (i % 2 === 0) {
            i = i / 2;
        } else {
            i = 3 * i + 1;
        }
        a.push(i);
    }

    return a;
}
