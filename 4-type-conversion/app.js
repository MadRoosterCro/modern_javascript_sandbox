let val;

// Number to string representation
val = 5;

// Output => remember what we talked about in the 1st lesson
console.log(val);
console.log(typeof val);
console.log(val.length); // here we use .length which will not work for numbers, so in the console we will see undefined

// now lets see what happens when we convert the type
let num = 15; // we declare a value with name `num` and assing a value of 15 to it

num = String(15); // here we wrap the number 15 in a string function

// now if we check the console like before we will see something interesting

console.log(num); // this will output the value of the num variable which will be 15, but not a number, it will be a string, see the different color in the console?
console.log(typeof num); // this confirms that it is indeed a string
console.log(num.length); // and now since it is a string, it has a length of two, which we see in the console
