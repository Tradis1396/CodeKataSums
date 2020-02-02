function array(N, data) {
    if (N == data.length) {
        var newarray = data.sort();
        console.log(...newarray);
    }
}
array(8, [7000, 8000, 6500, 1200, 4000, 2800, 3000, 5230])