function array(N, A, B) {
    var C = 0;
    N = parseInt(N);
    A = parseInt(A);
    B = parseInt(B);
    for (let i = 0; i < N; i++) {
        if (N != C) {
            C += A + B;
        }
    }
    if (C == N) {
        console.log("yes");
    }
    else {

        console.log("no");
    }
}
array("20", "2", "3");