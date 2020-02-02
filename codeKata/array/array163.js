function array(N, K, Narray) {
    count = 0;
    if (N == Narray.length && Narray.indexOf(K) > -1) {
        Narray.forEach(ele => {
            if (K == ele && Narray.indexOf(K) > -1) {
                count += 1;
            }
        })
        console.log("yes", count);
    }
    else {
        console.log("No");
    }
}
array(5, 3, [4, 3, 3, 4, 6]);