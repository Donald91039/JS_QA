'use strict';
alert("We are LIVE");

for(let i = 0; i < 10; i++){
    for(let n = 1; n < 11; n++){
    console.log(n);
    }
}

let b = 100;
while(b <= 200){
    console.log(b);
    b++;
}
for(let c = 100; c <= 200; c++){
    console.log("for " + c);
}

let a = 100;
while(a <= 200){
    if (a % 2 == 0){
        console.log("+");  
    }else{
        console.log("-");
    }
    a++;
}
for(let d = 100; d <= 200; d++){
    if (d % 2 == 0){
        console.log("for +");  
    }else{
        console.log("for -");
    }
}

let now = new Date(); 
let day = now.getDay();
switch(day) {
    case 0:
        console.log(`It's Sunday`);
        break;
    case 6:
        console.log(`It's Saturday`);
        break;
    case 1:
        console.log(`It's Monday`);
        case 2:
        case 3:
        case 4:
        case 5:
            console.log(`It's a weekday`);
            break;
        default:
            console.log(`Excuse me?`);
            break;
        }





