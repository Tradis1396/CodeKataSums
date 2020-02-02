
function printAlphabets(strs) {

    var i = 65;
    var j = 91;
    var newarray = [];
    var strs = strs.toUpperCase()

    for (l = 0; l < strs.length; l++) {
        const element = strs[l];
        for (k = i; k < j; k++) {
            var str = String.fromCharCode(k);
            if (element == str) {
                newarray.push(String.fromCharCode(k + 3));
            }
        }
    }
    console.log(newarray.join(""));

}
printAlphabets("RADAR");  