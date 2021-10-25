// Function declarations

function greeting() {
  console.log(`Hello!`); // everything inside the braces is the function scope
}
/**
 * so far we only declared the function, in order for the function to
 * actually be executed, we need to call it
 *
 * to call the function we write the name of the function and add parethesis() after the name
 */

greeting(); // now in the console we can see the log!

/**
 * we usally do not declare functions just to log something but to return something usefull
 * so let's rewrite the top example with a return and then log that to the console
 */

function greet() {
  return `Hey there!`;
}
// now if we just call the greet() function, it will not print anything in the console
// in order the return to the console, we need to wrap it in the console.log() function

console.log(greet());

// Adding parameters to functions
function newGreetingWithName(firstName = 'John', lastName = 'Doe') {
  // here we add 2 parameters to the function and declare the default values
  return `Hello ${firstName} ${lastName}!`;
}
console.log(newGreetingWithName('John', 'Malkovich')); // by passing parameters here, we overwrite the default values

/** if we delete the parameters here, the function will fall back
 * to the default values and print 'Hello John Doe!' to the console
 */
