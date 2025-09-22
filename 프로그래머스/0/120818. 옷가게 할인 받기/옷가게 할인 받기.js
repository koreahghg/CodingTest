function solution(price) {
    if (price >= 500000) {
        return Math.floor(price - price * 0.20);
    } else if (price >= 300000) {
        return Math.floor(price - price * 0.10);
    } else if (price >= 100000) {
        return Math.floor(price - price * 0.05);
    } else {
        return price;
    }
}
