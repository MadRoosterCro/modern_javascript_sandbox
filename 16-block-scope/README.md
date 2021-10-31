# JavaScript Scope

Now that we know about functions, objects and variable in general, we can dive into scope!

Scope in JavaScript just means where the variables we declare are available for use.



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

## Local Scope

Variables declared within a function are local to that function.

#### Example:

```sh
function someFunction() {
    let bestActor = 'John Malkovich';
    // code here CAN use bestActor
}
// code here CAN NOT use bestActor
```

Since local variables are only available inside their functions, variables with the same name can be used in different functions.

> Local variables are created when a function starts and deleted when the function is completed.

## Function Scope

Each JavaScript function creates a new scope.

Variables defined inside a function are not accessible from outside that function.

Variables declared with `var`, `let` and `const` are similar when declared inside a function, meaning they all have the same Function Scope:

```sh
function someFunction() {
    var bestActor = 'John Malkovich'; // Function Scope
}
```

```sh
function someFunction() {
    let bestActor = 'John Malkovich'; // Function Scope
}
```

```sh
function someFunction() {
    const bestActor = 'John Malkovich'; // Function Scope
}
```

# Global Scope

Variables declared globally, outside any function have Global Scope.

Global variables can be accessed from anywhere in the program.

Example:

```sh
let bestActor = 'John';
// code here can use variable bestActor

function someFunction() {
    // code here can use variable bestActor
}
```

It is important to notice that objects and functions are also variables and can have different scope!

> IMPORTANT NOTE: It is best not to create global variables unless you intend to. Global variables (including function and objects) can overwrite window variables. Any function, including the window object, can overwrite global variables.
