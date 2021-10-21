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
