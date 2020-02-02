function array(datas, arrays) {
    const [N, K] = datas.split(" ");
    if (N == arrays.length) {
        for (let i = 0; i < K; i++) {
            arrays.pop();
        }
        console.log(...arrays);
    }
}
array("5 3", [4, 2, 3, 4, 1])