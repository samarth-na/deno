function isPerfectSquare(n) {
    if (n < 0) {
        return false;
    }
    Math.floor(Math.sqrt(n));
    let root = Math.floor(Math.sqrt(n));
    console.log(root * root === n);
    return root * root === n;
}
isPerfectSquare(90);
