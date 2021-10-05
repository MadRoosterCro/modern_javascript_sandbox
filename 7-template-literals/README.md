## Template literals

Also called Template strings sometimes, template literals are enclosed using backticks (<code>``</code>) in order to allow substitutions.

There are 2 kinds of template literals:

- _Untaged_ ==> result in strings, very useful for string interpolation
- _Tagged_ ==> call a function

Template literals can contain placeholders which are indicated with a dollar sign and curly braces (`${example}`). Expressions in the placeholders and text between the backtics get passed to a function.

### Multi-line strings

With template literals it is easy to get multi-line strings:

```sh
console.log(`string text 1st line
string text 2nd line`);
```

### Expression interpolation

In `app.js` files, you might have noticed we use interpolation a lot. It is thanks to template literals we are able to use this syntax.

```sh
let x = 10;
let y = 1;
console.log(`Eleven is ${x+y} and not ${2*x+y}.`)
// "Eleven is 11 and not 21."
```
