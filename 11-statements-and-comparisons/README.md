# If statement

The `if` statement executes a statement if a given condition is truthy. If the condition is falsy, another statement can be executed.

Basic syntax of an if statemet:

```sh
if(condition) {
 statement1 is executed;
} else {
    statement2 is executed;
}
```

`condition` - expression that is truthy or falsy

`statement1` - statement that is execudet if condition is truthy. Can be any statement, including nested `if` statements. To execute multiple statements, we use a block statement (`{ ... }`) to group the statemets. To execute no statements, we us an empty statement.

`statement2` - statement that is executed if `condition` is falsy and the `else` clause exists. Also, it can be any statement, including nested `if` statements.

## Description

Multiple `if...else` statements can be nested to create an `else if` clause.

> Note: Notice that `else if` is 2 words, there is no `elseif`/`elif` keyword in JavaScript like in some other programming languages.

#### Nesting if statements:

```sh
if (condition1) {
  statement1
  }
else if (condition2) {
  statement2
}
else if (condition3) {
  statement3
}
...
else {
  statementN
}
```

We can just "chain" the statemets like in this example.
