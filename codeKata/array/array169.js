function array(N, K, data) {
    var count = 0;
    var match = false;
    if (N == data.length) {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            for (let j = 1; j <= K; j++) {
                const Jelement = data[j + 1];
                if (element == Jelement) {
                    count += 1;
                    console.log(count);
                    if (count == K) {
                        match = true;
                        // console.log("yes");
                        break;
                    }
                }
                // console.log(element, Jelement);
            }
        }
        if (match) {
            console.log("yes");
        }
    }
}
array(4, 3, ["code", "names", "names", "name"]);