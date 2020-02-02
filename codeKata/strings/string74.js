
function string(str) {

    var newstring = "";

    for (let i = 0; i < str.length; i++) {

        newstring = str[i] + newstring;

        newstrings = Array.from(newstring)
    }

    let vowel = newstring.replace(/[aeiou]/g, "")
    if (vowel.length != 0) {
        console.log(vowel)
    }
    else {
        console.log(-1);
    }

}
string("codekata");