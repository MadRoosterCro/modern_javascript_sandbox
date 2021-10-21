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
