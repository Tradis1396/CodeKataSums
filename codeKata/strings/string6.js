function string(str) {
    count = 0;
    for (const i of str) {
        if (["a", "e", "i", "o", "U"].indexOf(i) > -1) {
            console.log("yes");
            break
        }
        else {
            count += 1;
            continue;
        }
    }
    if (count == str.length) {
        console.log("no");
    }
}
string("cdktt");