function solution(my_string, is_suffix) {
  const startIndex = my_string.length - is_suffix.length;
  
  if (startIndex < 0) return 0;
  
  return my_string.slice(startIndex) === is_suffix ? 1 : 0;
}