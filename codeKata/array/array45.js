// const readline = require('readline');

// const inp = readline.createInterface({
//   input: process.stdin
// });


// inp.on("line", (data) => {
// Input = data.split(" ");
// });

// inp.on("close", () => {
// console.log(Input);
// });

function array(data) {
    [N, k] = data.split(" ");
    console.log(N, k);
    datas = "2 3 1 4 5"
    opArray = datas.split(" ");
    if (N == opArray.length) {
        for (let i = 0; i < opArray.length; i++) {
            const element = opArray[i];
            if (element < k) {
                console.log(element);
            }
        }
    }
}
array("5 3");