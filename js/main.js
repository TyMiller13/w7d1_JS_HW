console.log("Hello from the main.js file!");


// BASICS of JS

// comment using "//"

/* multi line
comment in JS */

/* ~~ Variable Declaration in JS ~~
Primitive Data Types: String, Number, Boolean, Undefined, Null
Object Types: Objects, Array, Function
*/
//Variable Declaration --use camelCase to name variables
var myName;
console.log(myName);

//String Declaration
var myName = 'Tyler';
console.log(myName);
console.log(typeof myName);

// Strings can be created by using '', "", `` --ticks have special behavior to format string
// Tick Marks + ${} is equiv to f"{}"

console.log("My name is ${myName}");
console.log('My name is ${myName}');
console.log(`My name is ${myName}`); //-- back tick, format string

// INTEGER
var myAge = 99;

console.log(myAge);
console.log(typeof myAge);

// FLOAT
var pi = 3.14;
console.log(pi);
console.log(typeof pi);

//BOOLEAN
var boolTrue = true;
console.log(boolTrue);
console.log(typeof boolTrue);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolTrue);

// UNDEFINED 
var something;
console.log(something);
console.log(typeof something);

// NULL
var someNull = null;
console.log(someNull);
console.log(typeof someNull); // A bug in the code

// Object Data Types

//OBJECT
var myObject = {
    a: 123,
    test: 'Hello World'
};

console.log(myObject);
console.log(typeof myObject)

//ARRAY
var myArr = ['Tyler', 'Miller', 'Sioux Falls'];
console.log(myArr);
console.log(typeof myArr)

//FUNCTION
function abc(){

};
console.log(abc)
console.log(typeof abc)

// Accessing properties from an object

var person = {
    first: 'Tyler',
    last: 'Miller',
    languages: ['Python', 'JavaScript']
};

console.log(person);

//BRACKET NOTATION
console.log(`My first name is ${person["first"]}`);
// DOT NOTATION
console.log(`My last name is ${person["last"]}`);

console.log(person.languages);

// When accessing properties in an array(aka indices), use bracket notation
console.log(`My favorite language is ${person.languages[0]}`);

// Arrays have a 'length' property
var myNewArr = ['red', 'white', 'blue'];

console.log(myNewArr, myNewArr.length);

// Clear our console
console.clear();

// var vs let vs const

// let -- allows us to declare a variable similar to var 
 // *let is block-scope, var is global scope*

let myCountry = 'United States'

if (true){
    var myState = 'South Dakota';
    let myCity = 'Sioux Falls';
    console.log(myCity, myState, myCountry);
}
// console.log(myCity); //ReferenceError: myCity is not defined
console.log(myState);
 {
    let test1 = 123;
    {
        let test2 = 456;
        {
            let test3 = 789;
            console.log(test1, test2, test3);
        }
    }
 }

 // const -- similar to let (block scoped)
 // 2 differences: 1. Needs a value when declared 2. Cannot be reassigned

 {
    let myAge = 31;
    console.log(myAge);
    myAge = 32;
    console.log(myAge);

    const myHeight = 10;
    console.log(myHeight);
    // myHeight = 11; //TypeError: Assignment to constant variable.
    console.log(myHeight);
 }

 // Be careful when using const with an object!

 const cities = ['Chicago', 'New York', 'Sioux Falls', 'Denver', 'Dallas'];

 console.log(cities);

 cities[1] = 'San Diego';

 console.log(cities);

//  cities = ['Kansas City', 'Buffalo', 'Cleveland']; // TypeError: Assignment to constant variable.

//  console.log(cities);

const president = {
    first: 'Abe',
    last: 'Lincoln'
};

console.log(president);

president.first = 'Abraham';
console.log(president);

// president = {
//     first: 'George',
//     last: 'Washington'
// }

console.clear();

// Basic Math Operation

//Addition
let sum = 5 + 5;
console.log(sum);
sum += 5;
console.log(sum);
sum++; // sum += 1 // sum = sum + 1 
console.log(sum);

//Subtraction
let diff = 20 - 5;
console.log(diff);
diff -= 5;
console.log(diff);
diff--; // diff -= 1 // diff = diff - 1
console.log(diff);

//Multiplication
let prod = 8 * 5;
console.log(prod);
prod*=5;
console.log(prod);

//Division
let quotient = 40 / 5;
console.log(quotient);
quotient /= 2 // quotient = quotient / 2
console.log(quotient);

// Floor Division -- use the .floor method from built-in Math Module
let floor = Math.floor(10/3);
console.log(floor);

// Exponent
let square = 5 ** 2
console.log(square)
square **=2 // square=square ** 2
console.log(square);

// Modulo
let remainder = 19%4;
console.log(remainder);
remainder %= 2; // remainder = remainder % 2
console.log(remainder);

let myString = 'My age is '
let myNewAge = 420

let addedstring = myString + myNewAge;
console.log(addedstring);
console.log(typeof addedstring);

console.log(square - '4');

console.clear();

//JAVASCRIPT COMPARISON 
console.log(5 == 5);
console.log(5 == 5.0);
console.log(5 == '5');
console.log(5 === '5');
// == --> check for equality while allowing for type conversion
// === --> check for equality but doen not allow for type conversion

console.log(1 == 'true');
console.log('10' > 9);

//be careful with type conversion

console.log('100' > '9') // Both values are already strings, no conversion needed - compare alphabetically
// When JavaScript compares object, it looks for REFERENCE ONLY!!
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

console.log(arr1 == arr2);
console.log(arr1 === arr2);

let animals = ['penguin', 'wolf', 'kangaroo'];
let newAnimals = animals;

console.log(animals === newAnimals);

// Greater Than (>), Greater Than or Equal (>=), Less Than (<), Less Than or Equal (<=)
// Equal allow type conversion (==), Equal no type conversion (===), 
// Not Equal yes conversion (!=), Not Eqaul no conversion (!==)

console.log(5 != '5');
console.log(5 !== '5');

console.clear();

// Control Flow

// If Condition

// Syntax: if (condition expression){ code to execute if true }

let randomDigit = 34;

console.log('Begin');
if (randomDigit > 20){
    console.log('the condition was true!');
    console.log('Still in {}'); 
    console.log('Hey what is going on?');
};
console.log('End');

// If, Else If, Else

let randomInt = 75;

if (randomInt % 100 === 0){
    console.log('The number is divisble by 100');
} else if (randomInt % 10 === 0){
    console.log('The number is divisble by 10');
} else {
    console.log('The number is not divisible by 100 or 10')
}

// Multiple Conditions
// && - and
// || - or

// T && T = T
// T && F = F
// F && T = F
// F && F = F
// T || T = T
// T || F = T
// F || T = T
// F || F = F

let personAge = 15

if (personAge > 18 && personAge < 40){
    console.log('Young Adult')
}

if (personAge < 18 || personAge > 65){
    console.log('You get a discount')
}


// JavaScript Loops
// for, for...in, for...of, while, do while


// Standard for loop
// Syntax: for (counter; expression/condition; increment/decrement for counter){ code to execute each loop }

console.log('Loop has started');

for (let i = 0; i < 20; i++){
    console.log(i);
};

console.log('Loop has ended');

let colors = ['orange', 'green', 'pink', 'yellow', 'black'];

for (let i = 0; i < colors.length; i++){
    console.log(i, colors[i])
};


// for...in - used to loop over properties of an object

let chiTeams = {
    mlb: 'White Sox',
    nba: 'Bulls',
    nfl: 'Bears',
    nhl: 'Blackhawks'
};

// Syntax - for (let variableName in object){ code to execute for each property in object }

for (let team in chiTeams){
    console.log(team);
    console.log(chiTeams[team]);
    console.log('================');
};

let planets = ['Mercury', 'Mars', 'Earth', 'Saturn', 'Uranus', 'Jupiter'];

for (let p in planets){
    console.log(p);
};

// for...of - used to loop over the elements in an iterable (Array, String, etc)
for (let p of planets){
    console.log(p);
};

let someString = 'Hello World';

for (let letter of someString){
    console.log(letter);
};


// While Loop - loop while a condition is true
// Syntax: while (condition){ code to execute while the condition is true }

console.log("WHILE LOOP:");
let startingNumber = 0;

console.log('Before:', startingNumber);

while (startingNumber < 500){
    console.log(startingNumber);
    startingNumber += Math.floor(Math.random() *100);
};

console.log('After:', startingNumber);


// Do While Loop - DO the first part AT LEAST ONCE
// If the condition is still true, continue the while loop

// Syntax: do { code to execute } while { condition }

console.log('Do While');
let x = 10000;

do {
    x = Math.floor(Math.random() * 100);
    console.log(x);
} while (x < 50);

console.log('Do While over x is', x);