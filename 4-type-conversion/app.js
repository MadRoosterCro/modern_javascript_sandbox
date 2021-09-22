let val; // lets declare a variable for start

// Number to string conversion
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

// Boolean to string conversion
let newVal = String(true); // here we declared new variable, assigned a boolean which we immediately converted to string
console.log(newVal); // here we see what the variable value is
console.log(typeof newVal); // confirming that the type is a string
console.log(newVal.length); // and that string has a lenght of 4

// Date to string conversion
let dateToString = String(new Date()); /** 
so there is a few things happening here
- we declared a variable called dateToString, assigned a new date object to it and then converted that to a string by wrapping it with String function
let's see what the console will show us
*/
console.log(dateToString); // we see the value of the string that was once Date type
console.log(typeof dateToString); // console tells us that it is a string
console.log(dateToString.length); // the value is 40 because length is 40 characters long

// Array to string conversion
let arrayToString = String([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// same as before when we check the console, everything will be ok with one interesting thing
console.log(arrayToString);
console.log(typeof arrayToString);
console.log(
  // NOTE: sometimes you will see code over multiline lines like this, this is for more readabilty and to satisfy linters!
  arrayToString.length
); /* here we will see that the length of the string is not 9 as you might think
lenght will come back as 17 this time. What's going on? It will actually count the commas as characters in the string!
By wrapping an array with the String function, we turned everything in that array to a string.
*/

// in addition to String() function, there is also a toString() method
let newVar = (555).toString();
console.log(newVar);
console.log(typeof newVar);
console.log(newVar.length);
/** You will see that it produces the same result, so you can use either one
 *
 * let's move on
 */

// String to number conversion
let string = Number('5.2122312312'); // this is a string which we converted to a number by wrapping it with Number() function

console.log(string); // this shows us the value of the variable, the complete number which we converted from a string
console.log(typeof string); // we confirm that it is a number
console.log(string.toFixed(2));
/** now instead of using string.length which only works on string, here we user .toFixed(2)
 * this allows us to specifiy decimals in the numbers, here we set the decimals to 2 and you can see
 * in the console only the first 2 decimals ---> 5.21
 * if we had left it empty like string.toFixed() then it would ignore the decimals, and console
 * would only print the number 5
 */

// Let's see what happens if we try wrapping a Boolen with a Number() function

let booleanToNumber = Number(true);
console.log(typeof booleanToNumber);
console.log(booleanToNumber); // it will print 1 in the console, and you may guess, false would print a 0

let whatHappensIfWeTryWithNull = Number(null);
console.log(typeof whatHappensIfWeTryWithNull);
console.log(whatHappensIfWeTryWithNull); // we see the console prints a 0

/**
 * now you must be wondering the obvious, what is going to happen if we try to
 * wrap a string value with the Number() function.
 * let's find out
 */
let wrapStringWithNumber = Number('someRandomString');

console.log(wrapStringWithNumber);
/*
this will mess with your brain a bit, we can see NaN in the console
NaN is an actual value which stands for "Not A Number", this is what happens when a value tries
to get parsed as a number but it cannot be parsed.
Same thing would happen if we try to parse an array as a number. 
Now when we try to check the type of NaN, we see that that the console says NaN is of type number. 
Seems funny that a value Not A Number is actually a number, this is confusing for a lot of people.
Despite the fact that it is called Not A Number, it is still a numeric type :)
NaN just means that the specific value cannot be represented within the li,itations of the numeric type.

Furthermore, a specific NaN is not equal to another NaN as they may cine from different values.
A bit confusing, I know, but with time you'll get it.
For now just remember that NaN is a number type just like 43114 or 1.
*/
console.log(typeof wrapStringWithNumber);

// just like with strings, we have more ways of turning strings to numbers

let newWayStringToNumber = parseInt('12345'); // same thing like Number('12345')
// will only work with integers
console.log(newWayStringToNumber);
console.log(typeof newWayStringToNumber);

// and if we want to deal with decimals we do this (decimal numbers are called floats in javascript)
let stringToFloat = parseFloat('12345.231213231');
console.log(stringToFloat);
console.log(typeof stringToFloat);
console.log(stringToFloat.toFixed(2)); // we fix the decimals to 2

// There also exists something called type coersion
const val1 = String('5');
const val2 = 6;
const sum = val1 + val2;

// coersion is actually done on the fly by javascript, if we now log the sum we will se something interesting

console.log(sum);
console.log(typeof sum);

/* 
here is what happened, js saw that there are 2 variables being added, it saw the first one was a string 
and it took the second one and turned that to a string and then concatenated the strings
this is why when we log the sum, we see 56 as the result and we can confirm that the type of that is a string
if we wanted the sum to be a type of number, we can wrap it in a Number() function
*/
let newSum = Number(sum);
console.log(typeof newSum); // confirm that the result is now a number
