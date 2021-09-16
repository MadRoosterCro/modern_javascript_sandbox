/*
there are several ways to declare a variable

var ===> the "old" way of declaring a variable, not used very often and is considered archaic
const, let ===> the "new" way of declaring variables

first we will cover VAR:
*/
var name = 'Jane Doe';
console.log(name); // ===> console will show Jane Doe as name

name = 'John Malkovich'; // ==> notice how with using var to declare a variale, we can assing a new value to it
console.log(name); // ===> console will now show John Malkovich as name

// we can also initialize variables without a value
var hello;
console.log(hello); // ==> this will actually show as undefined in console

hello = 'hello';
console.log(hello); // ==> this will now show a value in console, we assigned it a string value

/* 
variables can include only numbers, letters, _, $
varables can not start with a number

1hello = 'hello'; 

this will throw a syntax error
for start let's just use letters
*/

// for variables with multiple words, we use camelCase,
// it is the most readable and it looks like this:

var firstName = 'Dario'; // Camel case, we will mostly be using this for regular variables
var first_name = 'Dario'; // Underscore
var FirstName = 'Dario'; // Pascal case
var firstname; // =====> unreadable

/* declaring variables using LET
 we use let for non-constant variables,
 variables that will change later in the code
*/
let someName;
console.log(someName); // again, this will be undefined at this moment as it only initialized
someName = 'John';
console.log(someName);
someName = 'Johnny';
console.log(someName);

/* declaring variables using CONST
 we use const for constant variables,
 variables that can not be reassigned
*/
const lastName = 'Malkovich';
console.log(lastName); // works just fine, as we can see it in the console

/* lastName = 'Smithson';  
==> will not work because we've set lastName 
as a constant value of "Malkovich"
Also, unlike var and let, when we use const to declare a value,
we must assing a value to it.

const lastName; 
This will throw a SyntaxError

!!!!!!!!!! IMPORTANT NOTE: 
later we will mention object mutation, sometimes people get
confused because we can mutate(change) data inside an object, 
but we cannot reassign the object itself
example:

const person = {
    name: 'John',
    age: 50,
}
now when we console.log(person) it will show us
{name: 'John', age:50}

now if we mutate the data inside like this
person.name = 'Janette';
person.age = 30;
and then we console.log(person) it will show us the following
{name: 'Janette', age:30}

we did not actually reassign the person, we just mutated the data inside itself
same thing applies for arays

more on this later on, let's keep it light for now

every developer has their own preference when declaring variables;
let and const became the standard as it makes your code more readable
and robust
*/
