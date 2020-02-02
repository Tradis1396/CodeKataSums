function array(N, Narray) {
    if (N == Narray.length) {
        var res = Narray.reduce((acc, cv) => {
            return acc * cv;
        })
        if (res < 0) {
            console.log((-1 * res));
        }
        else{
            console.log(res);
        }
    }
}
array(5, [2, 3, 4, -5, 1])