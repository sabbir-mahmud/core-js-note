// string data and string methods
let names = 'Sabbir';
let lastName = 'Mahmud';
console.log(`Sabbir Mahmud`); // Print the string with the backicks
console.log(names); // Print the value of the variable names
console.log(names.length); // Print the length of the string
console.log(names.toUpperCase()); // convert string to Uppercase
console.log(names.toLowerCase()); // Convert string to lowercase
console.log(names.concat(lastName)) // Concatenate two strings
console.log(names.substring(0, 3)); // Print the string from 0 to 3
console.log(names.indexOf('b')); // find index of letter
console.log(names.lastIndexOf('b')); // find last index of letter
console.log(names.charAt(0)); // Print the first letter of the string
console.log(names.charAt(names.length -1)); // Print the last letter of the string
console.log(names.includes('b')); // check if the string contains
console.log(names.startsWith('S')); // check if the string starts with
console.log(names.endsWith('m')); // check if the string ends with
console.log(names.replace('b', 'a')); // Replace the letter b with the letter a
console.log(names.split('b')); // Split the string into an array
console.log(names.split('b').join('a')); // Split the string into an array and join the array into a string
console.log(`Hello ${names}`); // String interpolation
console.log('Sabbir '.repeat(3)); // Repeat the string 3 times