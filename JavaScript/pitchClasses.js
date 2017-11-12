//CODEWARS MUSICAL PITCH CLASSES
//In music, each note is named by its pitch class (e.g., C, E♭, F♯), and each pitch class can alternatively be expressed as an integer from 0 to 11. Your task will be to write a method called pitch_class (JS: pitchClass ) that, when given a letter-based pitch class, returns the corresponding integer.
//Only seven letters are used to name the notes: "A" through "G." These letter names are cyclical, just like the days of the week. The notes corresponding to those letters are called the "natural notes." Here are the numbers corresponding to each of them:

// C : 0
// D : 2
// E : 4
// F : 5
// G : 7
// A : 9
// B : 11

//solution
function pitchClass(note){
    var value = 0;
    
      switch(note.charAt(0).toUpperCase())  {
        case 'C': value += 0;
        break;
        case 'D': value += 2;
        break;
        case 'E': value += 4;
        break;
        case 'F': value += 5;
        break;
        case 'G': value += 7;
        break;
        case 'A': value += 9;
        break;
        case 'B': value += 11;
        break;
        default : 
        return null;
      }
      
      switch(note.charAt(1)){
        case '#': value += 1;
        break;
        case 'b': value -= 1;
        break;
        case '' : value;     
        break;
        default :   
        return null;
      }
      
      if(value > 11)  {
        value = 12 - value;

      } else if(value < 0) {
        value = value + 12;
      }
      return value;
    }

    //other's solutions
    function pitchClass(note) {
        if (!/^[A-G][#b]?$/.test(note)) return null
        
        var pitch = {C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11}
        var accidental = {'#': 1, 'b': -1}
        
        return (12 + pitch[note[0]] + (accidental[note[1]] || 0)) % 12
      }

      const notes = {'C':0, 'D':2, 'E':4, 'F':5, 'G':7, 'A':9, 'B':11};
      
      function pitchClass(note){  
        number = notes[note.charAt(0)];
        
        if (number == null) { return null }
        
        if (note.charAt(1) == '#') {
          number++;
        } else if (note.charAt(1) == 'b') {
          number--;
        } else if (note.charAt(1) != 0) {
          return null;
        }
        
        return ((number+12) % 12);
      }