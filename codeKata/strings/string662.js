// function string(str) {
//     var newarticle = "";
//     var newstring = str.split(" ");
//     var count = 0;

//     for (let i = 0; i < newstring.length; i++) {
//         const element = newstring[i];
//         if (["the", "an", "a", "A", "An", "The", "AN", "THE"].indexOf(element) > -1) {
//             newarticle += newstring[i + 1] + " ";
//             console.log(newarticle);
//         } else {
//             count += 1;
//         }
//     }
//     if (count == newstring.length) {
//         console.log(-1);
//     }

// }
// string(" sun is in  east")

function string(str) {
    var newarticle = "";
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (["the", "an", "a", "A", "An", "The", "AN", "THE"].indexOf(element) > -1) {
            newarticle += str[i + 1] + " ";
        }
        else {
            count += 1;
        }
    }
    if (count == str.length || str.length == 0) {
        console.log(-1);
    }
    else {
        console.log(newarticle = newarticle.replace(newarticle[0], newarticle[0].toUpperCase()));
    }
}
string([]);

// let str = "an sun Rises the in east";
// str = str.toLowerCase();
// // console.log(str);
// let arr = str.split(" ");
// // console.log(arr);
// let fstr = "";
// let valchk = false;
// for (let i = 0; i < arr.length; i++) {
//     if (i > 0 && (arr[i - 1] == "the" || arr[i - 1] == "an" || arr[i - 1] == "a")) {
//         valchk = true;
//         if (fstr == "") {
//             fstr = arr[i];
//         } else {
//             fstr = fstr + " " + arr[i];
//         }
//     }
// }
// //console.log(fstr);

// //console.log(y);
// if (valchk == true && str != "") {
//     //let y= fstr[0].toUpperCase()+fstr.substr(1);
//     console.log(fstr);
// } else {
//     console.log(-1);
// }