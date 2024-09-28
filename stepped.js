

// const payment = 10000;
// const payment = 3000;
const payment = 1600;


if(payment >= 5000){
    // 10% discount
    const discount = payment * 10 / 100;
    const payAmount = payment - discount;
    console.log(payAmount);
}
else if(payment >= 2500){
    // 5% discount
    const discount = payment * 5 / 100;
    const payAmount = payment - discount;
    console.log(payAmount);
}
else if(payment >= 1500){
    // 2% discount
    const discount = payment * 2 / 100;
    const payAmount = payment - discount;
    console.log(payAmount);
}
else{
    console.log(payment);
}