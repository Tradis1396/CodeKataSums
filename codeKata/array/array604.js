
function main(inp) {
    var count = 0;
    for (var i = 2; i <= 100000; i++) {
        if (isPrime(i)) count = count + 1;
        if (count == inp) return i;
    }
}
function isPrime(i) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            return false
        }
    }
    return true
}
console.log(main(3)); 