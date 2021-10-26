# Loops

Ok, this is a big one!

Loops offer us a quick and simple way to do something repeatedly.

Although there are a lot of different kinds of loops, they all basically do the same thing => they repeat an action some number of times.

> Note: That number could in fact be zero!

Different loop techniques offer different ways to determine the start/end points of the loop.

Statements for loops in JavaScript:

- `for` statement
- `do...while` statement
- `while` statement
- `labeled` statement
- `break` statement
- `continue` statement
- `for...in` statement
- `for...of` statement

## `for` statement

A `for` repeats until a condition is no longer truthy.

Basic syntax of `for` statement:

```sh
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement
```

The flow of the `for` loop:

1. The initializing expression `initialExpression`, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
2. The `conditionExpression` expression is evaluated. If the value of `conditionExpression` is true, the loop statements execute. If the value of `condition` is false, the `for` loop terminates. (If the `condition` expression is omitted entirely, the condition is assumed to be true.)
3. The `statement` executes. To execute multiple statements, use a block statement (`{ ... }`) to group those statements.
4. If present, the update expression `incrementExpression` is executed.
5. Control returns to Step 2.

## `do...while` statement

The `do...while` statement repeats until a specified condition evaluates to false.

Basic syntax of `do...while` statement:

```sh
do
  statement
while (condition);
```

The flow:

`statement` is **ALWAYS** executed once before the condition is checked. We can execute multiple statements with a block statement (`{ ... }`) to group the statements.

If `condition` is `true`, the statement executes again. At the end of every execution, the `condition` is checked. When the `condition` is `false`, execution stops and control passes to the statemtn following `do...while`.

## `while` statement

A `while` statement executes its statement as long as a specified `condition` evaluets to `true`.

Basic syntax of `while` statement:

```sh
while (condition)
  statement
```

The flow:

If the `condition` becomes `false`, the `statement` within the loop stops executing and control passes to the statement following the loop.

The condition test occurs _before_ `statement` in the loop is executed. If the `condition` returns `true`, `statement` is executed and the `condition` is tested again. If the `condition` returns `false`, execution stops and control is passed to the statement following the `while`.

To execute multiple statements, we use a block statement (`{ ... }`) to group the statements.

## `labeled` statement

A `label` provides a statement with an identifier that lets you refer to it elsewhere in your program. For example, you can use a label to identify a loop, and then use the `break` or `continue` statements to indicate whether a program should interrupt the loop or continue its execution.

Basic syntax of `labeled` statement:

```sh
label :
   statement
```

The value of `label` can be any JavaScript identifier, as long as it is not a reserved word. The `statement` that we identify with a label can be any statement.

## `break` statement

We use the break` statement to terminate a loop, switch or in conjunction with a labeled statement.

- Wen we use `break` without a label, it terminates the innermost enclosing `while`, `do...while`, `for` or `switch` immediately and transfers control to the following statement.
- When we use `break` with a label, it terminates the specified `labeled` statement.

Basic syntax of `break` statement:

```sh
break;
break [label];
```

- First form of the syntax terminates the innermost enclosing loop or `switch`.
- Second form of the syntax terminates the specified enclosing labeled statement.

## `continue` statement

The `continue` statement can be used to restart a `while`, `do...while`, `for`, or `label` statement.

- When you use `continue` without a label, it terminates the current iteration of the innermost enclosing `while`, `do...while`, or `for` statement and continues execution of the loop with the next iteration. In contrast to the `break` statement, `continue` does not terminate the execution of the loop entirely. In a `while` loop, it jumps back to the condition. In a `for` loop, it jumps to the `increment-expression`.
- When you use `continue` with a label, it applies to the looping statement identified with that label.

Basic syntax of `continue` statement:

```sh
continue [label];
```

## `for...in` statement

The `for...in` statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements.

Basic syntax of `for...in` statement:

```sh
for (variable in object)
  statement
```

###### Arrays

It is tempting to use this to iterate over an `array`. However, `for...in` will return the name of user-defined properties with the numeric indexes.

Therefore, it is better to use a traditional `for` loop with a numeric index when iterating over arrays, because the `for...in` statement iterates over user-defined properties in addition to the array elements, if you modify the Array object (such as adding custom properties or methods).

## `for...of` statement

The `for...of` statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

Basic syntax of `for...of` statement:

```sh
for (variable of object)
  statement
```

Let's examine the difference between `for...of` and `for...in` statements.

```sh
const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
```

As we can see, `for...in` iterates over the property names and `for...of` iterates over property values.
