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

// STRICT comparison
const newId = 200; // this is a number

if (newId === 200) {
  // when we use triple equal sign, we compare value and the type, so it is more strict!
  console.log('CORRECT!');
} else {
  console.log('INCORRECT!');
}
