// Problem 1
let carName = 'Volvo';
console.log(carName);


// Problem 2
let firstName = "John", lastName = "Doe", age = 35;
console.log(firstName);
console.log(lastName);
console.log(age);


// Problem 3
let x = 10;
const y = 5;
x = x * y;
console.log(x); // now x = 50;


// Problem 4
let length = 16; // data type = Number
let lastName = "Johnson"; // data type = String
console.log(typeof length);
console.log(typeof lastName);

const x = {
    firstName: "John",
    lastName: "Doe"
};    // data type Object
console.log(typeof x);


// Problem 5
function myFunction() {
    alert("Hello World!");
}

myFunction();


// Problem 6
const person = {
    name: 'John',
    age: 50
}
alert(`${person.name} is ${person.age}`)


// Problem 7
function showAlert() {
    alert("Button was clicked!");
}



// Problem 8

// 1. Alert the number of items in an array, using the correct Array property:
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

// // 2. Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = 'Ford';
console.log(Brand);




// Problem 9

// 1. Use the correct Math method to create a random number.
let randomNumber = Math.random();
console.log(randomNumber);

// 2. Use the correct Math method to return the largest number of 10 and 20.
let largestNumber = Math.max(10, 20);
console.log(largestNumber);

// 3. Use the correct Math method to get the square root of 9.
let squareRoot = Math.sqrt(9);
console.log(squareRoot);



// problem 10
// 1. Choose the correct comparison operator to alert true, when x is greater than y.
let x = 10;
let y = 5;
alert(x > y); // This will alert true

// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let age = 16;
alert(age < 18 ? "Too young" : "Old enough");
