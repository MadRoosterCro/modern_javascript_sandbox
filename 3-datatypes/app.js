// PRIMITIVE TYPES

// String
const name = 'John Doe';
// Number
const age = 40; // notice how we do not use quotes on numbers, if we did it would be a string
// Boolean
const isTrue = true; // also no quotes
// Null
const car = null;
// Undefined
let something; // remember, we have to use let when initializing a variable without a value
// Symbol
const sym = Symbol();

console.log(typeof name);
console.log(typeof age);
console.log(typeof isTrue);
console.log(typeof car); // funny thing, console will say it's an object, that is a bug
console.log(typeof something);
console.log(typeof sym);

// REFERENCE TYPES - these will all return objects
// Array
const activites = ['running', 'flying', 'swimming'];
// Object literal
const address = {
  city: 'Zagreb',
  country: 'Croatia',
};
// Dates
const today = new Date(); // ==> using the constructor here, will get to that later
console.log(typeof activites);
console.log(typeof address);
console.log(today); // see what the date looks like in the console
console.log(typeof today);