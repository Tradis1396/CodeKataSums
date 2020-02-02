function getUnique(N, Narray) {
    var uniqueArray = [];
    if (Narray.length == N) {
        for (i = 0; i < Narray.length; i++) {
            if (uniqueArray.indexOf(Narray[i]) === -1) {
                uniqueArray.push(Narray[i]);
            }

        }
        return uniqueArray;
    }
    else {
        console.log(-1);
    }

}

var names = [2, 3, 5, 5];
var uniqueNames = getUnique("4", names);
console.log(uniqueNames);