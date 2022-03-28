// comments: This is a comment
// JavaScript Variables
// var is used to declare a variable
var firstName = 'Sabbir';
// let is used for block scope variable you can change the value
let lastName = 'Mahmud';
// const is used for constant variable you can't change the value
const nickName = 'Zim';


// JavaScript Data Types
let num = 1; // integer number
let strNum = '1'; // string number
let float = 1.1; // float number
let bool = true; // boolean


// JavaScript strings
let names = 'Sabbir'; // string
console.log(names);
let str = "Hello World";
console.log(str);
let str2 = `Hello World`;
console.log(str2);
// Template strings
let greeting = `Hello ${names}`;
console.log(greeting);

// Objects
let people = {
    firstName: 'Jho',
    lastName: 'Due',
    age: 24
};
console.log(people);

// nested objects
let people2 = {
    firstName: 'Jho',
    lastName: 'Due',
    age: 24,
    address: {
        street: '123 Main St',
        city: 'Boston',
    }
};
console.log(people2);

// Array
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Nested Array
let arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arr2);

// boolean
true / false