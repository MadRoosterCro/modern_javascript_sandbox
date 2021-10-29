# JavaScript Scope

Scope in JavaScript just means where the variables we declare are available for use.

JavaScript has 3 types of scope:

- Block scope
- Function scope
- Global scope

## Block Scope

Before ES6, JavaScript had only Global and Function scope. ES6 introduced two important keywords for declaring variables: `let` and `const`.

These two keywords provide Block scope in JavaScript. That means that variables inside `{}` block cannot be accessed from outside that block.

#### Example with `let`:

```sh
{
    let x = 2;
}
// we can NOT use x here
```

Variables declared with the "old" `var` keyword can **NOT** have block scope, meaning that variables that we declare inside a `{}` block **CAN** be accessed from outside that block.

#### Example with `var`:

```sh
{
    var x = 2;
}
// we CAN use x here
```

## Local (function) Scope

Variables declared within a function are local to that function.

#### Example:

```sh
function someFunction() {
    let bestActor = 'John Malkovich';
    // code here CAN use bestActor
}
// code here CAN NOT use bestActor
```
