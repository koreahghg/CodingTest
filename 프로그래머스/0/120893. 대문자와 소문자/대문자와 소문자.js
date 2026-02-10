function solution(my_string) {
  let result = '';
  
  for (let char of my_string) {
    if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  
  return result;
}
