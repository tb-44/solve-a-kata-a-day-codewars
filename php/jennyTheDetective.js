// Jenny is 9 years old. She is the youngest detective in North America. Jenny is a 3rd grader student, so when a new mission comes up, she gets a code to decipher in a form of a sticker (with numbers) in her math notebook and a comment (a sentence) in her writing notebook. All she needs to do is to figure out one word, from there she already knows what to do. And here comes your role - you can help Jenny find out what the word is!

// In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from the comment (string) that create the word.

// Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
// Spaces are not places, you need the actual letters. No spaces.
// The returned word should be all lowercase letters.
// if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(
// Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")

//php solution
function missing($nums, $str) {
    $result = "";
    sort($nums);
    $temp = implode("", (explode(" ", $str)));
    for ($x = 0; $x < 3; $x++) {
        if ($nums[$x] >= strlen($temp)) {
            return "No mission today";
        }
        $result.= strtolower($temp[$nums[$x]]);
    }
    return $result;
}

//others 
function missing($nums, $str) {
    sort($nums);
    $c = str_split(str_replace(' ', '', strtolower($str)));
    return max($nums) > count($c) ? 'No mission today' : implode('', array_map(function ($n) use($c) { return $c[$n]; }, $nums));
}

function missing($nums, $str) {
    $str = str_replace(' ', '', strtolower($str));
    asort($nums);
    $return = "";

    if (max($nums) <= strlen($str)) {
        foreach($nums as $letter => $key) {
            $return.= substr($str, $key, 1);
        }
    } else {
        $return = "No mission today";
    }

    return $return;
}