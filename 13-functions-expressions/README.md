# Functions

## Function declaration

Function declaration defines a function with the specified parameters.

Basic syntax:

```sh
function name([param[, param,[..., param]]]) {
    [statements]
}
```

Where:
| | Description |
|-|-|
| `name` | The name of the function. |
| `param` _Optional_ | The name of an argumet to be passed to the function. |
| `statements` _Optional_ | The statements which comprise the body of the function. |

By default, a function will return `undefined`. To return any other value, the function must have a `return` statement that specifies the return value.

## Function expression

The `function` keyword can be used to define a function inside an expression.

Basic syntax:

```sh
function [name]([param1[, param2[, ..., paramN]]]) {
  statements
}
```

Where:

|                         | Description                                                                    |
| ----------------------- | ------------------------------------------------------------------------------ |
| `name` _Optional_       | The function name that can be omitted. In that case the function is anonymous. |
| `paramN` _Optional_     | The name of an argument to be passed to the function.                          |
| `statements` _Optional_ | The statements which comprise the body of the function.                        |

Function expression is very similar to and has almost the same syntax as a function declaration. The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions

## Immediately Invoked Function Expression -> **IFFE**

Functions that run as soon as they are defined.

Basic syntax:

```sh
(function () {
  statements
})();
```

This is a design pattern also known as Self-executing anonymous function. It contains two major parts:

- The first is the anonymous function with lexical scope enclosed with the parentheses `()`. This prevents accessing variables within the IIFE idion as well as polluting the global scope.

- The second part creates the immediately invoked function expression `()` through which the JavaScript engine will directly interpret the function.

# **Arrow functions**

An arrow function expression is a compact alternative to a traditional function expression, but is limited and cannot be used in all situations.

#### Difference and limitations

- Does not have its own bindings to `this` or `super`, and should not be used as `methods`.
- Does not have `new.target` keyword.
- Not suitable for `call`, `apply` and `bind` methods, which generally rely on establishing a `scope`.
- Can not be used as constructors.
- Can not use `yield`, within its body.

Example:

```sh
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
```

#### Comparison of traditional functions vs arrow functions

> Note: Each step along the way is a valid "arrow function"

```sh
// Traditional Anonymous Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
```

The { braces } and ( parentheses ) and "return" are required in some cases.

For example, if you have **multiple arguments** or **no arguments**, you'll need to re-introduce parentheses around the arguments:

```sh
// Traditional Anonymous Function
function (a, b){
  return a + b + 100;
}

// Arrow Function
(a, b) => a + b + 100;

// Traditional Anonymous Function (no arguments)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// Arrow Function (no arguments)
let a = 4;
let b = 2;
() => a + b + 100;
```

Likewise, if the body requires **additional lines** of processing, you'll need to re-introduce braces **PLUS the "return"** (arrow functions do not magically guess what or when you want to "return"):

```sh
// Traditional Anonymous Function
function (a, b){
  let chuck = 42;
  return a + b + chuck;
}

// Arrow Function
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}
```

And finally, for **named functions** we treat arrow expressions like variables:

```sh
// Traditional Function
function bob (a){
  return a + 100;
}

// Arrow Function
let bob = a => a + 100;
```

## Basic syntax

One param. With simple expression return is not needed:

```sh
param => expression
```

Multiple params require parentheses. With simple expression return is not needed:

```sh
(param1, paramN) => expression
```

Multiline statements require body braces and return:

```sh
param => {
  let a = 1;
  return a + param;
}
```

Multiple params require parentheses. Multiline statements require body braces and return:

```sh
(param1, paramN) => {
   let a = 1;
   return a + param1 + paramN;
}
```

## Advanced syntax

To return an object literal expression requires parentheses around expression:

```sh
params => ({foo: "a"}) // returning the object {foo: "a"}
```

Rest parameters are supported:

```sh
(a, b, ...r) => expression
```

Default parameters are supported:

```sh
(a=400, b=20, c) => expression
```

Destructuring within params supported:

```sh
([a, b] = [10, 20]) => a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30
```

Seems like a lot of confusing information, but I promise, it will make much more sense when you start using it on real examples.
