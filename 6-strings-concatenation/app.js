const firstName = "John";
const lastName = "Malkovich";
const age = 67;

let val;

// lets see what will happen if we add the declared variables
val = firstName + lastName;

console.log(`If we just add variables together we get ===>`, val);
// we can see that this just smushes the strings together, this is why we need concatenation

let val1 = firstName + " " + lastName;
console.log(`Now we added a space between the variables and we got ===>`, val1);

// if we want to add something to a variable, we need to append it

let val2 = "John "; // -> notice there is a space after the name
// now if we do val2 = "Malkovich", it will overwrite the initial value, so for appending it we can do
val2 += "Malkovich";

console.log(`With the += for appending variables we got ====>`, val2);

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
console.log(`The number of charachters in the firstName variable is`, val4);

// concat  ==> works simillarly as "manual" concatenation from the start of the lesson

let val5 = firstName.concat(` `, lastName);
console.log(`Concat method with our 2 declared variables gives us ===>`, val5);

// Changing case (lower case and upper case)

let val6 = firstName.toUpperCase();
console.log(`The method toUpperCase gives us ===>`, val6);

let val7 = firstName.toLowerCase();
console.log(`The method toLowerCase gives us ===>`, val7);

// theese will come usefull when validating/comparing usernames, emails, etc.

// INDEXES

/**
 * this is an important part since it is the first time we are mentioning indexes
 * index is a position of a characher in a given string
 * indexes start from 0, and that is the first charachter in a given string, this might be confusing now but just bear with me
 *
 * this means if we have a string "MyLittleTownIsGreat" indexes will show following
 * index of 0 = M
 * index of 1 = y
 * index of 2 = L
 * etc.
 * you get the gist, now let's look at some methods
 */

// indexOf()

const string = "MyLittleTownIsGreat";

let findIndexOf = string.indexOf("t"); // this will find the first instance of the charachter 't' starting from left to right
console.log(`First instance of 't' is at index`, findIndexOf);

// we can also look for last instance of the charachter 't' by looking from right to left
let findLastIndexOf = string.lastIndexOf("t");
console.log(`Last instance of 't' is at index`, findLastIndexOf);
