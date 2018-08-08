// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

// Examples
// balancedParens(0) => [""]
// balancedParens(1) => ["()"]
// balancedParens(2) => ["()()","(())"]
// balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

function balancedParens(n) {
    let balanced = [];
    function validCombos(opened, closed, c) {
        if (opened === 0 && closed === 0)
            balanced.push(c);
        if (opened > 0) {
            validCombos(opened - 1, closed + 1, c + "(");
        }
        if (closed > 0) {
            validCombos(opened, closed - 1, c + ")");
        }
    }
    validCombos(n, 0, "");
    return balanced;
}

//others
function balancedParens(n) {
    function recursion(index, sum) {
        if (sum === 2 * n - index + 1) {
            return [(')').repeat(sum)];
        } else {
            let left = recursion(index + 1, sum + 1).map(item => '(' + item);
            if (sum === 0) {
                return left;
            } else if (sum > 0) {
                let right = recursion(index + 1, sum - 1).map(item => ')' + item);
                return left.concat(right);
            }
        }
    }
    return recursion(1, 0);
}