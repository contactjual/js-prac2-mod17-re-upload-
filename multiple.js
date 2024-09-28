
/**
------------------------------------------------
const salary = 25000;
const isBCS = true;

if(salary > 20000){
    console.log('accepted')
}
else{
    console.log("try others")
}

*/

// -------------------------------------------------
const salary = 25000;
const isBCS = true;
const height = 61;

// if(salary > 20000 &&  height > 66){
//     console.log("accepted")
// }
// else{
//     console.log('see others')
// }


// ---------------------------------------
// if(salary > 20000 || height > 72){
//     console.log('accepted');
// }
// else{
//     console.log('see me')
// }



// --------------------------------------------
if((salary > 20000 && height > 72) || isBCS == true){
    console.log('accepted');
}
else{
    console.log('see me')
}


// --------------------------------------------
if((salary > 20000 || height > 72) && isBCS == true){
    console.log('accepted');
}
else{
    console.log('see me')
}