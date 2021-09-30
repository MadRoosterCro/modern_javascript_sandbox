const firstName = "John";
const lastName = "Malkovich";

let val;

// lets see what will happen if we add the declared variables
val = firstName + lastName;

console.log(`If we just add variables together we get ===>`, val);
// we can see that this just smushes the strings together, this is why we need concatenation

let val1 = firstName + " " + lastName;
console.log(`Now we added a space between the variables and we got ===>`, val1);
