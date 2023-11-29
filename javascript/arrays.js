const myArray = [24,'ashishVerma',true,console.log]
console.log(myArray);

const fruits = ['Apple','Orange','Banana','pineapple','lichi','mango']
console.log(fruits)

console.log(fruits[3])
console.log(fruits[1])
console.log(fruits[-1])
// wrong index -->> undefined
// no negative indexing
// want to use negative indexing
// use arrayName.at()
console.log(fruits.at(-1))
console.log(fruits.length)

console.log(fruits.slice(1,4))
console.log(fruits.slice(1,-2))
console.log(fruits.slice(1))
console.log(fruits.slice(1,80))
console.log(fruits.slice())
console.log(fruits.slice(0,60))
console.log('**************************************************************')
// adding elements to array
console.log(fruits);
fruits.push('guava'); 
//  adds element in the end
fruits.unshift('cherry')
console.log(fruits)

fruits.pop();
fruits.shift();

console.log(fruits)

// remove, replace and insert -->> splice
// fruits.splice(1,2); //remove elements
// fruits.splice(1,2,'kiwi','dragon fruit'); //remove and insert at position 1
// fruits.splice(1,2,'strawberry','dragon fruit','kiwi'); //insert at position 1 and add
// fruits.splice(1,0,'kiwi','dragon fruit,'strawberry') // insert at position 1 without removing anything
console.log(fruits)