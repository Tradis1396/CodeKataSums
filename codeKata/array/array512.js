const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

 var MNC = {};
function salary(){
    
    for(let i = 0; i <Input2.length;i+=2){

            MNC[Input2[i]]=Input2[i+1];

             }
                console.log(MNC)
                
                console.log (Object.values(MNC).sort());
        }
    


salary();