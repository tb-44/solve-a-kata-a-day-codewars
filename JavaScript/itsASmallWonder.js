//Vicky is quite the small wonder. Most people don't even realize she's not a real girl, but a robot living amongst us. 
//Sure, if you stick around her home for a while you might see her creator open up her back and make a few tweaks 
//and even see her recharge in the closet instead of sleeping in a bed.

//In this kata, we're going to help Vicky keep track of the words she's learning.

//Write a function, learnWord(word) which is a method of the Robot object. 
//The function should report back whether the word is now stored, or if she already knew the word.

//solution

function Robot() {
    this.result = [];
}

Robot.prototype.learnWord = function (word) {
    var response;
    var arr = word.split(" ");
    if (arr.length === 1 && word !== '') {
        var words = word.toLowerCase();
        var know = ('thank you for teaching me i already know the word do not understand the input').split(" ");

        if (/^[a-zA-Z- ]*$/.test(words) === true) {
            if (this.result.indexOf(words) === -1 && know.indexOf(words) === -1) {

                this.result.push(words);
                response = 'Thank you for teaching me '.concat(word);
                return response;
            } else {
                response = 'I already know the word '.concat(word);
                return response;
            }

        } else {
            response = 'I do not understand the input';
            return response;
        }
    } else {
        response = 'I do not understand the input';
        return response;
    }
}

//other solutions
function Robot() {
    let store = 'I do not understand the input already know word Thank you for teaching me'.toLowerCase().split(' ');
    this.learnWord = word => {
      if (!word || /[^a-z]/i.test(word)) return 'I do not understand the input';
      return ~store.indexOf(word.toLowerCase()) ? `I already know the word ${word}` : (store.push(word.toLowerCase()), `Thank you for teaching me ${word}`);
    }
  }

  function Robot() {
    this.a=['thank','you','for','teaching','me','i','already','know','the','word','do','not','understand','input'];
  }
  
  Robot.prototype.learnWord = function(s) {
    if(/[^a-z]/i.test(s)||!s) return "I do not understand the input";
    if(this.a.includes(s.toLowerCase())) return 'I already know the word '+s;
    this.a.push(s.toLowerCase());
    return 'Thank you for teaching me '+s;
  }