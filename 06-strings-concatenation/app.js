const firstName = "John";
const lastName = "Malkovich";
const age = 67;

let val;

// lets see what will happen if we add the declared variables
val = firstName + lastName;

console.log(`If we just add variables together we get ===> '${val}'`);
// we can see that this just smushes the strings together, this is why we need concatenation

let val1 = firstName + " " + lastName;
console.log(
  `Now we added a space between the variables and we got ===> '${val1}'`
);

// if we want to add something to a variable, we need to append it

let val2 = "John "; // -> notice there is a space after the name
// now if we do val2 = "Malkovich", it will overwrite the initial value, so for appending it we can do
val2 += "Malkovich";

console.log(`With the += for appending variables we got ====> '${val2}'`);

// now let's play around a bit

let val3 = `Hello, my name is ` + firstName + ` and I am ` + age;
console.log(val3);
// you see how we can simply combine strings and declared variables to create something meaningful

/**
 * modern javascript introduced template literals which we will do later on
 * for now, let's focus on the basics so you know what is happening behind the curtains
 */

// let's look at some properties available when playing around whit strings

// Length

let val4 = firstName.length; // notice we dont need () since this is a property, not a Method
console.log(`The number of characters in the firstName variable is`, val4);

// concat  ==> works simillarly as "manual" concatenation from the start of the lesson

let val5 = firstName.concat(` `, lastName);
console.log(
  `Concat method with our 2 declared variables gives us ===> '${val5}'`
);

// Changing case (lower case and upper case)

let val6 = firstName.toUpperCase();
console.log(`The method toUpperCase gives us ===> '${val6}'`);

let val7 = firstName.toLowerCase();
console.log(`The method toLowerCase gives us ===> '${val7}'`);

// theese will come usefull when validating/comparing usernames, emails, etc.

// INDEXES

/**
 * this is an important part since it is the first time we are mentioning indexes
 * index is a position of a character in a given string
 * indexes start from 0, and that is the first characters in a given string, this might be confusing now but just bear with me
 *
 * this means if we have a string "MyLittleTownIsGreat" indexes will show following
 * index of 0 = M
 * index of 1 = y
 * index of 2 = L
 * etc.
 * you get the gist, now let's look at some methods
 */

// indexOf() -> a Method for finding the index

const string = "MyLittleTownIsGreat";

let findIndexOf = string.indexOf("t"); // this will find the first instance of the character 't' starting from left to right
console.log(`First instance of 't' is at index`, findIndexOf);

// we can also look for last instance of the character 't' by looking from right to left
let findLastIndexOf = string.lastIndexOf("t");
console.log(`Last instance of 't' is at index`, findLastIndexOf);

// charAt() -> a Method for finding what value is at a provided index

let findCharAtIndex = string.charAt("4");
console.log(`The character at provided index is '${findCharAtIndex}'`); // as expected, console tells us that the char at index 4 is t

// If we want to get the last char of a given string

let val8 = firstName.charAt(firstName.length - 1);
console.log(`Last character of '${firstName}' is '${val8}'`);

/* here we are looking for the last character of the string, 
first we get the whole length of the string, and  then we check the last character with -1
try playing around with the firstName variable and you will see that it is always correct
*/

// substring() -> creating substrings from a given strings, we can specifiy start and end index as arguments

let val9 = string.substring(0, 12);
console.log(`The substring of first 12 chars is '${val9}'`);

// slice() -> simillar to substring() but with some extra options

let val10 = string.slice(-5); // we can put a negative value and it will start from the end of the string and take that many characters and spit them out
console.log(`Last 5 characters from '${string}' are '${val10}'`);

// split() -> this can split a string into an Array based on a separator
const bestSuperhero = "Batman";
const secondBestSuperhero = "Ironman";

const tempString = `Hello there, did you know that I am ${bestSuperhero}?`;
let val11 = tempString.split(" ");
console.log(`When we split '${tempString}' into an Array we get`, val11);
// we separated the string by space

// replace()

let val12 = tempString.replace(bestSuperhero, secondBestSuperhero);
console.log(
  `When we replace '${bestSuperhero}' with '${secondBestSuperhero}' we get '${val12}'`
);

// includes() -> gives a Boolean if something exists in the string

let val13 = tempString.includes(bestSuperhero);
console.log(`Does '${tempString}' include '${bestSuperhero}'`, val13);

/**
 *
 * NOTE TO SELF, EXPLAIN INTERPOLATION
 *
 */
