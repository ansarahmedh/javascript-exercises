let string = prompt("Lets repeat, What's your name?")
let string_appended = ""
let repetition = Number(prompt("How many times do you wanna repeat your name?"))
if (repetition>0){
for(i=0; i<repetition; i++){
        string_appended=string.concat(string_appended);
    }
console.log(string_appended);}
else {console.log("ERROR");}