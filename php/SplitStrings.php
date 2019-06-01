<!-- Complete the solution so that it splits the string 
into pairs of two characters. If the string contains 
an odd number of characters then it should replace 
the missing second character of the final pair with an underscore ('_'). -->

<?php
function solution($str) { 
   return array_map(function($odd){ 
     if(strlen($odd) == 2){
        return $odd;
      }
      return $odd .= "_";
    
   },str_split($str , 2));
}