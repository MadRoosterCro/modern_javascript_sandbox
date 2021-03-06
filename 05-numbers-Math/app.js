const num1 = 100;
const num2 = 50;
let val;

Math.

// Simple math with numbers
val = num1 + num2;
console.log(val);

// try it with different operators/operations written bellow

// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// Math Object
let val1 = Math.PI; // as you might guess, here we've set the value of the variable to pi!
console.log(`Variable was set to the vallue of ${val1}`);

/**
 * Since Math is an object and that means it has properties and some methods
 * Methods are some functions inside that Math object.
 * If you enter dot after Math, it will list all available methods!
 * Feel free to play around and explore different methods and see
 * what they output to the console!
 */

// rounding numbers
let val2 = Math.round(2.5); // numbers up to 2.49999.. would be rounded to 2, higher would be rounded to 3
console.log(`Number was rounded to ${val2}`); // we can confirm that 2.5 is rounded to 3

// we can specify which way we want to round numbers, up or down

// for rounding up we can do:
let val3 = Math.ceil(2.3); // ceil will round this number to 3
console.log(`Number was rounded up to ${val3}`);

// for rounding down we can do:
let val4 = Math.floor(2.9); // floor will round this number to 2
console.log(`Number was rounded down to ${val4}`);

// Basically, with the methods within the Math object we can:

// look for the power of something:

let val5 = Math.pow(5, 2); // where the first parameter is the number we want to look the power of, and second parameter is the power
console.log(`Result of power is ${val5}`); // would print 25 to console, since we are looking for 5 to the power of 2

// look for the square root of some number
let val6 = Math.sqrt(16);
console.log(`Square root is ${val6}`);

// look for minimum or maximum value:
let val7 = Math.min(2, 55, 12, 3255, -21, 2, -2);
console.log(`Minimum value is ${val7}`);
let val8 = Math.max(2, 55, 12, 3255, -21, 2, -2);
console.log(`Maximum value is ${val8}`);

/**
 * And so on, as I said, play around and familiarize yourself with the methods.
 * There is one more than I want to show you that will come in handy to you when creating passwords, tokens, random stuff, etc.
 * This method will give you a new random decimal number each time you fire it (here each time you save or reload)
 *  */
let val9 = Math.random();
console.log(`Random float is ${val9}`);

// However, a lot of the times you want a whole random number, so you can do this:

let val10 = Math.floor(Math.random() * 20 + 1);
console.log(`Random whole number is ${val10}`);

/**
 * So here is what we did here, from inside out:
 * first we created a random float with the .random() method, then we multiplied it with the max number that would likely
 * be generated and added 1 to it to ensure the edge case and that our desired number is between 1-20.
 * Then, since this would still be a decimal, we wrapped the whole thing with the .floor() method to round
 * the final number down to a round number.
 *
 * And by doing so and combining everything we learned so far, we finally created a random whole number.
 */
