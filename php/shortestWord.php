<!-- Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. -->


function findShort(string $str){
  $lengths = array_map('strlen', explode(' ', $str));
  return min($lengths);
}