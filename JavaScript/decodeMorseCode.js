const decodeMorse = (morseCode) => {
  return morseCode
    .trim()
    .split("  ")
    .map((x) => {
      return x
        .split(" ")
        .map((a) => {
          return MORSE_CODE[a];
        })
        .join("");
    })
    .join(" ");
};

// MORSE_CODE ->

//ANOTHER
// const decodeMorse = function (morseCode) {
//     return morseCode.trim().split(' ').map(x => MORSE_CODE[x] || ' ').join('').replace(/\s+/g, ' ');
// }

// const decodeMorse = function (morseCode) {
//     function decodeMorseLetter(letter) {
//         return MORSE_CODE[letter];
//     }
//     function decodeMorseWord(word) {
//         return word.split(' ').map(decodeMorseLetter).join('');
//     }
//     return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
// }

// var message = ".... .- .-.. .--. -·-·--     -- --- .-. ... .     -.-. --- -.. .     .. ...     -.. .-. .. ...- .. -. --.     -- .     -. ..- - ... -·-·--";
// var alphabet = {
//     "-----": "0",
//     ".----": "1",
//     "..---": "2",
//     "...--": "3",
//     "....-": "4",
//     ".....": "5",
//     "-....": "6",
//     "--...": "7",
//     "---..": "8",
//     "----.": "9",
//     ".-": "a",
//     "-...": "b",
//     "-.-.": "c",
//     "-..": "d",
//     ".": "e",
//     "..-.": "f",
//     "--.": "g",
//     "....": "h",
//     "..": "i",
//     ".---": "j",
//     "-.-": "k",
//     ".-..": "l",
//     "--": "m",
//     "-.": "n",
//     "---": "o",
//     ".--.": "p",
//     "--.-": "q",
//     ".-.": "r",
//     "...": "s",
//     "-": "t",
//     "..-": "u",
//     "...-": "v",
//     ".--": "w",
//     "-..-": "x",
//     "-.--": "y",
//     "--..": "z",
//     "/": " ",
//     "-·-·--": "!",
//     "·-·-·-": ".",
//     "--··--": ","
// };
// var messageConverted = [];

// message.split("   ").map(function (word) {
//     word.split(" ").map(function (letter) {
//         messageConverted.push(alphabet[letter]);
//     });
//     messageConverted.push(" ");
// });

// console.log(messageConverted.join(""));

// JAVA SOLUTION
// public class MorseCodeDecoder {
//   public static String decode(String morseCode) {
//     String result = new String();

//     for (String word : morseCode.trim().split("   ")) {
//       for (String w : word.trim().split(" ")) {
//         result = result.concat(MorseCode.get(w));
//       }
//       result = result.concat(" ");
//     }
//     return result.substring(0, result.length() - 1);
//   }
// }

// public class MorseCodeDecoder {
//   public static String decode(String morseCode) {
//     String[] words = morseCode.trim().split("   ");
//     StringBuilder sb = new StringBuilder();
//     for (String word: words) {
//       String[] scode = word.split(" ");
//       for (String sc: scode) {
//         sb.append(MorseCode.get(sc));
//       }
//       sb.append(" ");
//     }
//     return sb.toString().trim();
//   }
// }
