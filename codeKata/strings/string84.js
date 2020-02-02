function string(str) {
    if (typeof (str) === "string" && isNaN(parseInt(str)) == true) {
        console.log("no");
    }
    else {
        console.log("yes");
    }
}
string("5");