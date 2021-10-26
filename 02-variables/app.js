/* please follow along the readme
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

// Camel case and other examples:

var firstName = 'Johnny'; // Camel case, we will mostly be using this for regular variables
var first_name = 'Jan'; // Underscore
var FirstName = 'Janice'; // Pascal case
var firstname; // =====> unreadable

// declaring variables using LET

let someName;
console.log(someName); // again, this will be undefined at this moment as it is only initialized
someName = 'John';
console.log(someName);
someName = 'Johnny';
console.log(someName);

// declaring variables using const
const lastName = 'Malkovich';
console.log(lastName); // works just fine, as we can see it in the console

/* lastName = 'Smithson';  
==> will not work because we've set lastName 
as a constant value of "Malkovich"
Also, unlike var and let, when we use const to declare a value,
we must assing a value to it.
const lastName; 
This will throw a SyntaxError
*/
