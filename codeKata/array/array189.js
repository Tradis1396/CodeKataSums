// function array(data) {
//     data = data.toString();
//     data = data.split("");
//     var newarray = []
//     console.log(data);

// }
// array(52413);


const bubbleSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let change = false;
        for (let j = 0; j < arr.length - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                change = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (!change) break;
    }
    return arr;
};
console.log(bubbleSort([4, 3, 2, 1, 5]));