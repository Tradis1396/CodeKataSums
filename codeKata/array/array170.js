function array(N, Narray1, Narray2) {
    var newarray = [];
    if (N == Narray1.length) {
        Narray1.sort((a, b) => { return a - b });
        for (let i = 0; i < N; i++) {
            const element = Narray1[i];
            newarray.push(Narray2[element]);
        }
        console.log(newarray);
    }
}
array(5, [4, 2, 3, 5, 1], [4, 8, 3, 2, 1]);
