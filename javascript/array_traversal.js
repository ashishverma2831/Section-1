const nums = [3,4,5,7,8,2,1]

for(let i=0;i<nums.length;i++){
    console.log(nums[i])
}
console.log('\n')
for(let e of nums){
    console.log(e)
}
console.log('\n')
// nums.forEach(element => {
//     console.log(element)
// });
nums.forEach((n)=>{
    console.log(n)
})


//let find 5
nums.forEach((n)=>{
    if(n===5){
        console.log('Found it')
    }
})


// filter
let newArray = nums.map((n)=>{
    return n*n;
})
console.log(newArray)



const prices = [20,46,600,7440,1800,2440,2840];
const newPrices = prices.map((price)=>{
    return price-price/10;
})
console.log(prices)
console.log(newPrices)


const names = ['raju','ramu','kaliya','shamu'];
const newNames = names.map((name)=>{
    return name.toUpperCase();
})
console.log(newNames)

//filter
const allPrices = [23000,4600,8570,1200,1433,649,4945,200];
const budgetPrices = allPrices.filter((p)=>{
    return p>2000 && p<5000;
})
console.log(budgetPrices);

//filter all even numbers from array
const array1 = [1,2,3,4,5,6,7,8,9,10]
const newArray1 = array1.filter((n)=>{
    if(n%2===0){
        return n;
    }
})
console.log(array1)
console.log(newArray1)

console.log('\n')

const names12 = ['katrina','kareena','deepika','ashi','ashu','anvu','abcde']
const newNames12 = names12.filter((name)=>{
    if(name.length>5){
        return name;
    }
})
console.log(names12)
console.log(newNames12)
console.log('\n')




const names123 = ['katrina kaif','kareena kapoor','deepika padukone','ashi sinha','ashu sharma','anvu verma','abcde xyz']
const newNames123 = names123.map((name)=>{
    let firstName = name.split(' ');
    // console.log(firstName[0])
    return firstName[0];
})
console.log(names123)
console.log(newNames123)