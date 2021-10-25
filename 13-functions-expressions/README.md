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

| `name`                  | The name of the function.                               |
| ----------------------- | ------------------------------------------------------- |
| `param` _Optional_      | The name of an argumet to be passed to the function.    |
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

| `name` _Optional_       | The function name that can be omitted. In that case the function is anonymous. |
| ----------------------- | ------------------------------------------------------------------------------ |
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

