function array(N, K) {
    var count = 0;
    var N = N.split("");
    N.forEach(element => {
        if (element == K) {
            count += 1;
        }
    });
    console.log(count);
}
array("100000", "0");