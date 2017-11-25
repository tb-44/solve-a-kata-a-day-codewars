//The code provided is supposed return a person's Full Name given their first and last names.

//But it's not working properly.

//solution

class Dinglemouse {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        if (!this.firstName) {
            return this.lastName;
        } else if (!this.lastName) {
            return this.firstName;
        }
        return this.firstName + " " + this.lastName
    }
}

//others solutions
function Dinglemouse(r, s) {
    this.getFullName = _ => (r + ' ' + s).trim();
  }

  class Dinglemouse{
      constructor( firstName, lastName ){
        this._firstName=firstName;
        this._lastName=lastName;
      }
      
      getFullName(){
        return `${this._firstName} ${this._lastName}`.trim();
      }
      
    }