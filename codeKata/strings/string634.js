const readline = require('readline');

const inp = readline.createInterface({
    input: process.stdin
});


inp.on("line", (data) => {
    Input = data.split(" ");
});

inp.on("close", () => {
let newarray = [];

for (let i = 0; i < Input.length; i++) {

    if (newarray[newarray.length - 1] == Input[i]) {
        newarray.pop();
    } else {
        newarray.push(Input[i]);
    };
};
console.log(...newarray);

});