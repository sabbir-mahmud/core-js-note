// Javascript for loop, for in loop, for of loop, while loop, do while loop
// for loop
for (var a = 1; a < 20; a++) {
    console.log(a);
}

// for in loop
// used for objects
var sabbir = {
    x: 5,
    c: 10,
}
for (props in sabbir) {
    console.log(props);
}

// for of loop
// used for arrays
var cars = ['bmw', 'Audi', 'lamborgini']
for (let x of cars) {
    console.log(x);
}

// while loop
var d = 1;
while (d < 15) {
    console.log(d);
    d++
}

// do while loop
var e = 1;
do {
    console.log(e);
    e++;
} while (e < 9)