// Global Scope
// things we define here are available globally
var a = 1;
let b = 2;
const c = 3;

// Function Scope
// things we define inside a function is not available globally
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log(`Funciton Scope: ${a}, ${b}, ${c}`);
}
test();

// Block level Scope
if (true) {
  var a = 7;
  let b = 8;
  const c = 9;
  console.log(`If Scope: ${a}, ${b}, ${c}`);
}

// this is outside the function and outside the block scope
// this goes to show why we dont use var to declare variables anymore
// we see that value of a was overwritten by the block scope
console.log(
  `Global Scope overwrites the a variable declared with var in the global scope ===> ${a}, ${b}, ${c}`
);

// the conclusion, let&const have a block level scope and var has function scope