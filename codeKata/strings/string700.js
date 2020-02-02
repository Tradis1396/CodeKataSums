function string(str) {
    str = str.split(" ");
    var newarray = [];
    var forCount = {};
    var count = 0;
    for (let i = 0; i < str.length; i++) {

        if (newarray[i] == str[i]) {
            forCount[str[i]] = count + 1;
        } else {
            newarray.push(str[i]);
        }
    }
    console.log(...newarray);
    console.log(forCount);

}
string("john johnny jackie johnny john jackie jamie jamie john johnny jamie johnny john");