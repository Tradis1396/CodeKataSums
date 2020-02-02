function array(N, data) {
    var match = false;
    if (N == data.length) {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (element == data[i + 1]) {
                match = true;
                break
            }
            else {
                continue;
            }
        }
        if (match) {
            console.log("yes");
        }
        else {
            console.log("no");
        }
    }
}
array(5, ["code", "load", "name", "names", "loads"]);