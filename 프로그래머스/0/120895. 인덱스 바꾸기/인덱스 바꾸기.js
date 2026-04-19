function solution(my_string, num1, num2) {
  const a = [...my_string];
  [a[num1], a[num2]] = [a[num2], a[num1]];
  return a.join('');
}