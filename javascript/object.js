const user = {
    name:'Raju',
    rollno:9899,
    email:'raju@mail.com'
};

console.log(user.name);
console.log(user['name']);

console.log(user.email);
console.log(user['email']);

user.location='Lucknow'
console.log(user.location);
console.log(user);

user.name = 'Raju Rastogi';

user.subjects = ['math','physics','chemistry','hindi','english']
console.log(user)
// assignment operator don't work



const smartphone = {
    brand:'realme',
    colors:['red','blue','green'],
    price:100,
    model:'9A'
}
smartphone.price=250; //assignment operator works here
smartphone.colors[1] = 'white'
// strings are immutable
console.log(smartphone);




const phoneList = [
    {brand:'realme',colors:['red','blue','green'],price:100,model:'9A'},
    {brand:'iphone',colors:['red','blue'],price:10000,model:'ultra pro max'},
    {brand:'nokia',colors:['white','black','gray'],price:1200,model:'9A'},
    {brand:'Xiaomi',colors:['red','blue','green','purple'],price:15000,model:'11i'},
    {brand:'oneplus',colors:['red','blue'],price:18000,model:'11R'},
]
// console.log(phoneList);
// console.log('----------------------------------------------------------');
// console.log(phoneList[0]);
// console.log(phoneList[0].colors[2]);

phoneList[2].colors[1] = 'Gold'
console.log(phoneList);

console.log('-----------------------------------------');

for(let phone of phoneList){
    console.log(phone);
    console.log(phone.brand);
    console.log(phone.colors);
}


const brands = phoneList.map((phone)=>{
    return phone.brand;
})
console.log(brands);

const colorList = phoneList.map((phone)=>{
    return phone.colors;
})
console.log(colorList);
// flat() => changes 2d or nd array into single 1d array
// Set() => set gives unique 
console.log(new Set(colorList.flat()));



// delete laptop.price
const laptop = {brand:'asus',price:20000,model:'vivobook'}
delete laptop.price;
console.log(laptop)