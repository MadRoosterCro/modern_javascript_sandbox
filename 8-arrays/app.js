// Creating some arrays
const numbers = [54, 87, 65, 54, 12, 32, 22, 5];

// we can create arrays in multiple ways
const numbers2 = new Array(22, 33, 44, 55, 66);

// arrays do not have to be just numbers
const fruit = ["Apple", "Orange", "Pear", "Fig"];

// we can also mix types in an array
const mixed = [22, "Hey", true, undefined, null, { a: 1, b: 2 }, new Date()];
console.log(`Our mixed array looks like this:`, mixed); // let's see what it looks like in the console

// we will play a bit with the numbers array
console.log(numbers);

// get array length
let val = numbers.length;

// check if is array
let val1 = Array.isArray(numbers); // a method to see if something is actually an array
console.log(val1);

// get single value
let indexValue = 3; // remember that index starts from 0, so index 3 is actually 4th position in the array
let val2 = numbers[indexValue]; // we pass the index value in the [] brackets
console.log(`The value on index ${indexValue} is`, val2); // and we confirm that 54 is on index 3

// insert something in the array
let newValueIndex = 2; // pick what index we want to change
let val3 = (numbers[newValueIndex] = 100); // set the value at index we picked to the new desired value
console.log(`We just set the value at index ${newValueIndex} to`, val3);
console.log(numbers); // in the console you can now see we changed the original array

// find index of a value
let findTheIndexOfThisValue = 12; // here we pick a value that we know it exists in our array numbers
let val4 = numbers.indexOf(findTheIndexOfThisValue); // find the index of the picked value
console.log(
  `We can now see that the index of value ${findTheIndexOfThisValue} is`,
  val4
);

// Array mutation
// adding something to the end of the array
let valueWeWantToAddAtTheEnd = 555; // pick a value we want to add at the end
let val5 = numbers.push(valueWeWantToAddAtTheEnd); // we use .push() to add the value
console.log(
  `We can se we added ${valueWeWantToAddAtTheEnd} to the end of our array`,
  numbers
);


