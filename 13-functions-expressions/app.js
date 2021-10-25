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

// Function expresions

// creating a function as a variable for assignment

const square = function (x = 2) {
  // again we set 2 as the default value
  return x * x;
};
console.log(square(5));

// Immediately invocable function expressions - IIFEs

(function (name) {
  console.log(`Hello ${name}!`);
})('Glenne');

// Property methods
// we can put functions inside of objects that

const todo = {
  add: function () {
    console.log(`Add todo..`);
  },
  edit: function (id) {
    // edit usually takes a param, commonly ID so we know what we want to edit
    console.log(`Edit todo ${id}`);
  },
};

// we can define methods outside of the object (not my favorite)

todo.delete = function (id) {
  console.log(`Delete todo ${id}`);
};

// we mentioned this before, now you can access the created method with .() at the end of the object!

todo.add();
todo.edit(22);
todo.delete(21);
