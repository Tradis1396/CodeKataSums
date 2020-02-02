function string(str) {
    var match = false;
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        for (let j = i + 1; j < str.length - 1; j++) {
            const Jelement = str[j];
            if (element == Jelement) {
                match = true;
            }
            else {
                continue;
            }
        }
    }
    if (match) {
        console.log("yes");
    }
    else {
        console.log("no");

    }
}
string("25721");