// Creating some arrays
const numbers = [54, 87, 65, 54, 12, 32, 22, 5];

// we can create arrays in multiple ways
const numbers2 = new Array(22, 33, 44, 55, 66);

// arrays do not have to be just numbers
const fruit = ["Apple", "Orange", "Pear", "Fig", "Kiwi", "Avocado"];

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

// adding something at the front of the array
let valueWeWantToAddAtTheBeginning = 111; // pick a value we want to add at the start
let val6 = numbers.unshift(valueWeWantToAddAtTheBeginning); // we use .unshift() to add the value
console.log(
  `We can se we added ${valueWeWantToAddAtTheBeginning} to the start of our array`,
  numbers
);

// take stuff from the end of the array
let val7 = numbers.pop(); // .pop() will remove the last member of the array
console.log(
  `We can see that we removed ${valueWeWantToAddAtTheEnd} from the end of the array`,
  numbers
);

// take stuff from the beginning of the array
let val8 = numbers.shift();
console.log(
  `We can see that we removed ${valueWeWantToAddAtTheBeginning} from the start of the array`,
  numbers
);

// we can also take out values from any place in the array
let indexOfStartValue = 5;
let howManyValuesToRemove = 1;
let val9 = numbers.splice(indexOfStartValue, howManyValuesToRemove);
// first value here is the index from which we want to start removing
// second value is the number of values we want to remove, if we say 1, it will remove just the value at the given index
// if we say 2 it will remove the value at the given index and the next one
console.log(
  `We started from index ${indexOfStartValue} and from there we removed ${howManyValuesToRemove} value(s), we can confirm this by looking at the numbers array ==>`,
  numbers
);

// we can reverse the array
let val10 = numbers.reverse(); // .reverse() reverses the array
console.log(`We can see that the array is in reverse order`, numbers);

// Array concatenation
let joinedArray = numbers.concat(numbers2); // we added numbers2 array to the numbers array
console.log(`We concatenated 2 arrays and now it looks like this`, joinedArray);

// sorting arrays
console.log(fruit); // first lets see the array
let val11 = fruit.sort(); // since this is an array of strings, it will sort it in alphabetical order
console.log(`Array fruit is now sorted alphabetically, look ==>`, val11);

// you might wonder what happens when we sort number arrays so let's see
let sortedJoinedArray = joinedArray.sort();
console.log(sortedJoinedArray);
/**
 * we see that numbers are not sorted from lowest to highest, so what happened?
 * the array is in fact sorted, it is sorted by the first number of each member!
 * that is probably not what we want to do so to fix it we can use a compare function
 */

// use the compare function to sort number arrays
let properlySortedJoinedArray = joinedArray.sort(function (x, y) {
  return x - y;
});
// this is just a small function to sort the numbers from lowest to highest
// we will cover functions in a separate lesson
console.log(
  `Now the joined numbers array is sorted properly ==>`,
  properlySortedJoinedArray
);
// if we want to sort the numbers from highest to lowest, a reverse sorted
let reverseSortedJoinedArray = joinedArray.sort(function (x, y) {
  return y - x;
});
console.log(
  `Now the joined numbers array is sorted from highest to lowest number ==>`,
  reverseSortedJoinedArray
);

// find method
// we will create a new array of numbers since we mutated the last one
const newNumbers = [51, 54, 77, 34, 55, 789, 2];
console.log(newNumbers);
// lets make a very simple function which returns if parameter is less than 50
function under50(x) {
  return x < 50;
}
let val12 = newNumbers.find(under50);
console.log(`The first value under 50 that our function found is`, val12);

// if we want to find numbers over 50, we just change that sign
function over50(x) {
  return x > 50;
}
let val13 = newNumbers.find(over50);
console.log(`The first value over 50 that our function found is`, val13);


// as I said, do not worry about the functions for now, we will talk about them in a separate lesson