function array(N, K, Narray) {
    if (N == Narray.length && Narray.indexOf(K) > -1) {
        console.log("yes");
    }
    else {
        console.log("No");
    }
}
array(5, 3, [1, 2, 3, 4, 6]);