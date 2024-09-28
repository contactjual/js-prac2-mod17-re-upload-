
// Let's make a BMI calculator

var weight = 70; // in kilograms
var height = 1.5; // in meters
var BMI = weight / (height * height);

if (BMI < 18.5){
    console.log("You are underweight");
    console.log(BMI);
}
else if (BMI >= 18.5 && BMI <= 29.9){
    console.log('You are normal');
    console.log(BMI);
}
else if (BMI >= 25 && BMI <= 29.9){
    console.log('You are overweight');
    console.log(BMI);
}
else {
    console.log("You are obese")
}


// Okay let's check the output

// THANKS for Watching