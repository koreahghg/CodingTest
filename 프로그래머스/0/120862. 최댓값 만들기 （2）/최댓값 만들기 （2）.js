function solution(numbers) {
    let max = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j && numbers[i] * numbers[j] > max) {
                max = numbers[i] * numbers[j];
            }
        }
    }
    return max;
}
