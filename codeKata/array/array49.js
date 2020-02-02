const input = require('readline-sync');
let N = input.question();
let Narray = input.question().split(" ");
var counts;
function array(n, narray) {
    if (n == narray.length) {
        var countsObj = narray.reduce((acc, ce) => {
            acc[ce] = (acc[ce] || 0) + 1;
            return acc;
        }, {});

        counts = Math.max(...Object.values(countsObj))
        if (counts > 1) {
            console.log(counts);
        }
        else {
            console.log(-1);
        }
    }
}
array(N, Narray);