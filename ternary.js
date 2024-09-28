
/** 
const age = 20;
if(age >= 18){
    console.log("you are eligible");
}
else{
    console.log('you are not eligible');
}
*/

// the short form of the upper code:

// age >= 18 ? console.log('you are eligible') : console.log('you are not eligible');





let payment = 500;
const isLeader = false;

// if(isLeader){
//     payment = 0;
// }
// else{
//     payment += 100;
// }
// console.log(payment);

// payment = isLeader === true ? 0 : payment + 100;









// OPTIONAL: semi-advanced ternary

// if(isLeader === true){
//     if(payment > 1000){
//         payment = payment / 2;
//     }
//     else{
//         payment = 0;
//     }
// }
// else {
//     payment = payment + 100;
// }

// console.log(payment);

// payment = isLeader === true ? payment > 1000 ? payment / 2 : 0 : payment + 100;



const isPassed = true;

// if(isPassed === false){
if(!isPassed){
    console.log('not allow')
}
else{
    console.log('allowed')
}