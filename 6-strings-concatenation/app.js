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
