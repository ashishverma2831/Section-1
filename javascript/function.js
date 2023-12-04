function addNumber(a,b){
    return a+b;
    // console.log(a+b);
}

addNumber(5,6)

const getAvg = function(m,n,o,p){
    return (m+n+o+p)/4;
}

getAvg(45,23,45,67)
console.log(getAvg(4,5,23,4))




// check prime
let num =5;
function checkPrime(num){
    if(num===0 || num===1){
        return false;
    }
    for(let i=2;i<=num/2;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
console.log(checkPrime(num))

function checkSquare(num){
    if(Math.sqrt(num)%1===0){
        return true;
    }
    return false;
}
console.log(checkSquare(num))

// 0 1 1 2 3 5 8
function fibonacciSeries(num){
    let a=0;
    let b=1;
    if(num==1)
        return a;
    else if(num == 2)
        return a+" "+b;
    else{
        console.log(a+" "+b);
        let j=0;
        while(j<num-2){
            let c=a+b;
            console.log(c);
            a=b;
            b=c;
            j++;
        }
    }
}
console.log(fibonacciSeries(num))
