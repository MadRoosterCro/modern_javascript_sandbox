const firstName = "John";
const lastName = "Malkovich";

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
