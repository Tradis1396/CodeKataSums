function array(N, data) {

    total = parseInt(N) * (parseInt(N) + 1) / 2;
    var sum = data.reduce((x, y) => {
        return parseInt(x) + parseInt(y);
    });
    var missing = total - sum;
    console.log(missing);

}
array("5", ["1", "3", "5", "2"]);