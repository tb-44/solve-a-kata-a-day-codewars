// Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

function logs(x, a, b) {
    let logA = Math.log(a) / Math.log(x);
    let logB = Math.log(b) / Math.log(x);
    return logA + logB;
}