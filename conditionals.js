'use strict';
alert("Conditionals");

let age = 66;
if (age < 18){
    console.log("Underage");
}else if(age >= 18 && age <= 65){
    console.log("Age in range");
}else{
    console.log("Age Over 65");
}