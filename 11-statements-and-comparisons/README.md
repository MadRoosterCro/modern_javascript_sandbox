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

We can just "chain" the statemets like in this example. We call this process **nesting**.

# Comparisons

There are a few comparison operations in JavaScript. For now let's inspect the 2 main ones:

- Abstract equality comparison (`==`)

  - sometimes called `loose equality` or just `double equals`
  - performs a type conversion when comparing two things, handles `NaN`, `-0` and `+0`. (Meaning that `NaN != NaN`, and `-0 == +0`)

- Strict equality comparison (`===`)
  - also called `strict equality`, `identity` or `triple equals`
  - performs same comparison as `Abstract equality` (including `NaN`, `-0` and `+0`) but this time without type conversion. So if the type differs, `false` is returned.

## Loose equality `==`

- Loose equality compares two values for equality **after** converting both values to a common type. After the conversion, the final comparrison is performed exactly like `Strict equality`.

- Loose equality is **symmetric**, meaning that `A == B` has identical semantics to `B == A` for any values of `A` and `B`.

- `undefined` and `null` are loosely equal, meaning `undefined == null` is true, and `null == undefined` is also true.

All primitives and objects are loosly unequal to `undefined` and `null`.

## Strict equality `===`

Strict equality compares two values for equality. Neither one value is converted to some other value before being compared.

- If the compared values have different types, values are considered unequal.

- IF the values have the same type, are not numbers and have the same value, the are considered equal.

- If both values are numbers, they are considered equal if they are both not `NaN` and are the same value, or if one is `+0` and one is `-0`.

> NOTE: Strict equality is almost always the correct comparison operation to use!

For all values except numbers, Strict comparison uses obvious intuitive semantics => meaning that a value