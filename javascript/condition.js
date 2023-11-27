// even or odd

let num = 11;

if(num%2 === 0){
    console.log("Even Number");
}
else{
    console.log("Odd Number");
}

const num1 = 100;

if(num1%7===0 && num1%11==0){
    console.log('Number is divisible by both 7 and 11');
}
else if(num1%7==0){
    console.log('Number is divisible by 7');
}else if(num1%11==0){
    console.log('Number is divisible by 11');
}
else {
    console.log('Number is not divisible by any of them')
}
