// JavaScript Objects Destructuring
const person = {
    name:'Sabbir Mahmud',
    age: 23,
    isPaid: true,
    address:{
        city:'Sirajganj',
        country:'Bangladesh',
    }
}
const {name, age, isPaid} = person;
const {city, country} = person.address;
console.log(name);
console.log(age);
console.log(isPaid);
console.log(city);
console.log(country);

// JavaScript Array Destructuring
const numbers = [11, 12, 121, 1, 2, 33, 3, 54, 4, 35, 5, 6, 7, 8, 9, 10];
const [a, b, c, d] = numbers;
console.log(a);
console.log(b);