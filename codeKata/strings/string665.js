function string(str) {
    str = str.split(" ");
    var newstring = "";
    for (let i = 0; i < str.length; i++) {
        newstring += str[i].replace(/["a" || "e" || "i" || "o" || "u"]/g, "") + " ";
    }
    var joinstring = str.join(" ");
    if (joinstring.length != newstring.length) {
        console.log(newstring);
    }
    else {
        console.log(-1);
    }
}
string("m shry");