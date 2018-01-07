// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

// For C#: Use a Dictionary<char, int> for this kata!

//solution
function count(string) {
    let result = {};
    for (let i = 0; i < string.length; i++) {
        if (result[string[i]] == undefined) {
            result[string[i]] = 1;
        } else {
            result[string[i]] += 1;
        }
    }
    return result;
}