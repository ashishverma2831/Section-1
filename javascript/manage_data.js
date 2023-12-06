const phoneList = [
    {brand:'realme',colors:['red','blue','green'],price:1000,model:'9A'},
    {brand:'iphone',colors:['red','blue'],price:10000,model:'ultra pro max'},
    {brand:'nokia',colors:['white','black','gray'],price:1200,model:'9A'},
    {brand:'Xiaomi',colors:['red','blue','green','purple'],price:15000,model:'11i'},
    {brand:'oneplus',colors:['red','blue'],price:18000,model:'11R'},
    {brand:'oneplus',colors:['red','blue'],price:22000,model:'Nord 2'},
]

const budgetPhones = phoneList.filter((phone)=>{
    return phone.price <= 10000
})
console.log(budgetPhones);

const colorPhones = phoneList.filter((phone)=>{
    return phone.colors.includes('black')
})
console.log(colorPhones);


// important
const brandName = 'oneplus';
const result = phoneList.filter((phone)=>{
    return phone.brand.toLowerCase()===brandName.toLowerCase();
})
console.log(result);

const brandName2 = 'one';
const result2 = phoneList.filter((phone)=>{
    return phone.brand.toLowerCase().includes(brandName2.toLowerCase());
})
console.log(result2);