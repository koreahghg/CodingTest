function solution(a, b) {
    let c = "" + a + b;
    c = Number(c);
    return (c < 2 * a * b) ? (2 * a * b) : (c)
}