function array(datas, arrays) {
    var swapArray = [];
    while (arrays.length != 0) {

        var newarray = arrays.splice(0, 2);
        [newarray[0], newarray[1]] = [newarray[1], newarray[0]];
        swapArray.push(newarray);
        arrays.length - 1;
    }
    console.log(...swapArray.flat());

}
array("5", [1, 2, 3, 4]);
