// Common denominators

// You will have a list of rationals in the form

//  { {numer_1, denom_1} , ... {numer_n, denom_n} } 
// or

//  [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
// or

//  [ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
// where all numbers are positive ints.

// You have to produce a result in the form

//  (N_1, D) ... (N_n, D) 
// or

//  [ [N_1, D] ... [N_n, D] ] 
// or

//  [ (N_1', D) , ... (N_n, D) ] 
// or

// {{N_1, D} ... {N_n, D}} 
// depending on the language (See Example tests)

// in which D is as small as possible and

//  N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
// Example:

// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
// Note:
// Due to the fact that first translations were written long ago - more than 4 years - these translations have only irreducible fractions. Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.

function convertFrac(lst) {
    let common = lst.reduce((acc, next) => leastCommonDenom(next[1], acc), 1);
    return lst.map(n => `(${n[0] * (common / n[1])},${n[1] * (common / n[1])})`).join("");
}

function greatestCommonDenom(a, b) {
    if (!b)
        return a;
    else
        return greatestCommonDenom(b, a % b);
}

function leastCommonDenom(x, y) {
    return x * y / greatestCommonDenom(x, y);
}
