//Create a function that accepts dimensions, of Rows x Columns, 
//as parameters in order to create a multiplication table sized according to the given dimensions. 
//**The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

//solution
function multiplicationTable(row, col) {
    let i = 0;
    let result = [];

    while (i < row) {
        let j = 0;
        let arr = [];

        while (j < col) {
            arr.push((i + 1) * (j + 1));
            j++;
        }
        result.push(arr);
        i++;
    }

    return result;
}

//others solutions
function multiplicationTable(row,col){
    var timesTable = [];
      for(var i = 1; i < row + 1; i++){
      var timesRow = [];
        for(var t = 1; t < col + 1; t++){    
          timesRow.push(t * i);    
        }
        timesTable.push(timesRow);
      }  
      return timesTable;
    }

    function multiplicationTable(row,col) {
        return Array(row).fill().map((outerValue, outerIndex) => {
          return Array(col).fill().map((innerValue, innerIndex) => {
            return (outerIndex + 1) * (innerIndex + 1);
          });
        });
      }

