const id = '100'; // notice that this is a string!

// equality comparison with abstract equality

if (id == 100) {
  // dobule equal sign signifies comparrison, not assignment like just 1 equal sign
  console.log('CORRECT!'); // the console will print correct because we are comparing the 100 to our id
} else {
  console.log('INCORRECT!');
}

// inequality comparison with abstract equality
if (id != 101) {
  console.log(`Comparison is not equal to ${id}`);
}

// STRICT equality comparison - means that we will compare value and the type
const newId = 200; // this is a number
const newIdString = '200'; // this is a number

if (newId === 200) {
  // when we use triple equal sign, we compare value and the type, so it is more strict!
  console.log('CORRECT!');
} else {
  console.log('INCORRECT!');
}

// STRICT inequality comparison
// we will compare number to a string, so we expect it to not be equal
if (newIdString === 200) {
  console.log(`Comparison is equal to ${newIdString}!`); // this is not correct, so we move to forward to the else part
} else {
  console.log(`Comparison is not equal to ${newIdString}!`);
}

// it is always better to use triple equality

// Testing if a variable is defined

if (typeof id !== 'undefined') {
  console.log(`The ID is defined and it is: ${id}`);
} else {
  console.log(`The ID is not defined!`);
}

// Greater or less than comparison
if (id >= 200) {
  // >= greater or equal operator, we can obviously use less or equal operator <=
  console.log(`Id is greater than 200`);
} else {
  console.log(`Id is less than 200`);
}

// If else operator is
// we can chain conditions with else if
const color = 'red'; // try changing this value and see the outcomes in the browser console

if (color === 'red') {
  console.log(`Color is red`);
} else if (color === 'green') {
  console.log(`Color is green`);
} else if (color === 'yellow') {
  console.log(`Color is yellow`);
} else {
  // we use else for the final statement
  console.log(`Color is not red, green or yellow`);
}

// Logical operators

const name = 'John';
const age = 67; // try changing the age to see the differences in console

// and &&
if (age > 0 && age < 12) {
  // && operator makes sure that both conditions are true
  console.log(`${name} is a child!`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager!`);
} else {
  console.log(`${name} is an adult!`);
}

const newName = 'Glenne';
const newAge = 62;

// or ||
// example if we have a competiton where only people from 18-65 can participate
if (newAge < 18 || newAge > 65) {
  // || operator checks if either one of the conditions are true
  console.log(`${newName} can not participate!`);
} else {
  console.log(`${newName} can participate!`);
}
