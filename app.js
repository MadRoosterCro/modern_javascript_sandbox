// use double slash in the js file to make an inline comment like this one

console.log('Hello world'); // this is how we can log a string in the console.
console.log(123); // this is how we can log numbers in the console.
console.log(true); // this way we are logging Booleans in the console.
const greeting = 'Hello world!'; // first we declare a variable => more on this in the next "lessons", don't worry!
console.log(greeting); // after declaring it, we log the variable like this.
console.log([1, 2, 3, 4]); // arrays
console.log({ a: 1, b: 'something', c: true, d: { e: 1, f: 'foo', g: false } }); // objects
console.table({ a: 1, b: 2, c: true, d: 'tralalalal' }); // we can even create tables in the console, crazy!

console.error('This is some error, it is very useful'); // there is more to it than just logging, see how it styles the message if we use an error!
console.warn(`This is a warning, it is very useful`); // and see how it differs when we us a warning!
console.time('Hello'); // we can even measure time of execution from here
console.log(' Hello world ');
console.log('Hello world');
console.log('Hello world');
console.log('Hello world');
console.timeEnd('Hello'); // to here

/*
use this syntax to make 
multiline comments
which will not affect
your code
*/
