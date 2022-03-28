// JavaScript Array
let numbers = [11, 12, 121, 1, 2, 33, 3, 54, 4, 35, 5, 6, 7, 8, 9, 10];

// Array methods
console.log(numbers[0]); // Print array element
console.log(Array.isArray(numbers)); // Check if the variable is an array
console.log(numbers.length); // find the length of the array
console.log(numbers.indexOf(1)); // find array index
console.log(numbers.sort((a,b)=> a-b)); // sort the array
console.log(numbers.pop()); // remove last element
console.log(numbers.push(11)); // add element to the end of the array
console.log(numbers.shift()); // remove first element
console.log(numbers.unshift(0)); // add element to the beginning of the array
console.log(numbers[1] = 1); // change array element
console.log(numbers.slice(2, 4)); // cut the array
numbers.forEach((a)=>{console.log(a)}); // forEach loop
console.log(numbers.map((a)=> a*2)); // map the array return a new array
console.log(numbers.filter((a)=> a%2==0)); // filter the array return a new array
console.log(numbers.find((a)=> a%2==0)); // find the first element that satisfy the condition




