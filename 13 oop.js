// JavaScript Class object oriented programming
class Person{
    // class constructor
    constructor(name, age, isPaid){
        this.name = name;
        this.age = age;
        this.isPaid = isPaid;

        
    }
    // class methods
    print(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.isPaid);
    }
}
// creating objects with class
const person = new Person('Sabbir Mahmud', 23, true);
console.log(person);
person.print();

const person1 = new Person('Sabbir', 24, false);
console.log(person1);
person1.print();
