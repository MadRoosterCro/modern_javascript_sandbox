const name = "John";
const age = 67;
const job = "Actor";
const city = "Los Angeles";
let html;

// Without template strings ("old way")
html =
  "<ul><li>Name:" +
  name +
  "</li><li>Age: " +
  age +
  "</li><li>Job: " +
  job +
  "</li><li>City: " +
  city +
  "</li></ul>";

// now I will just output this in our html, don't worry if you don't understand this yet
// we will get to DOM manipulation later
document.body.innerHTML = html;

// you can see how the syntax above can be messy, Prettier helps here and it's formatted neatly, but there is a better way

// Using template strings (es6)

let newHtml = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 66 ? "Over 66" : "Under 66"}</li>
</ul>
`;

// example of a simple function that returns a string
function hello() {
  return "Hello!";
}

document.body.innerHTML = newHtml;
// we get the same thing as before but much more readable and cleaner

/**
 * so in the template literal example, you can see we used something new that we didn't mention before
 * beside variables, in the template literals we can include \
 * expresions: ${2+2}
 * functions: we will cover them later, here is just a simple one that prints a string "Hello!" when called
 * 
 */
