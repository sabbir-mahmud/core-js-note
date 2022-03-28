// JavaScript Objects
let person = {
    name:'Sabbir Mahmud',
    age: 23,
    isPaid: true,
}

console.log(person); // print the object
console.log(person.name); // print objects property
console.log(person.age); // print object property
delete person.age // remove object property
console.log(person); // print the object
person.age = 24; // update object property
console.log(person); // print the object

// Nested Objects
let person1 = {
    name:'Sabbir Mahmud',
    age: 23,
    isPaid: true,
    address:{
        city:'Sirajganj',
        country:'Bangladesh',
    }
}

console.log(person1); // print the object
console.log(person1.address); // print objects property
console.log(person1.address.city); // print nested object property
for(let item in person1){
    console.log(item);
}