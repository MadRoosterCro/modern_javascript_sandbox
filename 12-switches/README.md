# Switches

The `switch` statement evaluates an expression, matching it's value to a `case` clause and then executes a `statement` associated with that `case`, as well as statements in cases that follow the matching `case`.

### Default syntax

```sh
switch (expression) {
    case value1:
         //Statements executed when the
        //result of expression matches value1
        [break;]
  case value2:
        //Statements executed when the
        //result of expression matches value2
        [break;]
  ...
  case valueN:
        //Statements executed when the
        //result of expression matches valueN
        [break;]
  [default:
        //Statements executed when none of
        //the values match the value of the expression
        [break;]]
}
```

Where
| `expression` | An expression whose result is matched against each `case` clause. |
| ------------ | ----------------------------------------------------------------- |
|`case valueN` _Optional_|A case clause used to match against expression. If the expression matches the specified valueN, the statements inside the case clause are executed until either the end of the switch statement or a break.|
|`default` _Optional_| A `default` clause => if provided, this clause is executed if the value of `expression` doesn't match any of the `case` clauses.|
|`break` _Optional_| A statement that ensures that the program "breaks out" of `switch` when the matched `case` stetement is executed. |

## The "flow" of switch statements

A switch statement first evaluates its expression. It then looks for the first case clause whose expression evaluates to the same value as the result of the input expression (using the strict comparison, `===)` and transfers control to that clause, executing the associated statements. (If multiple cases match the provided value, the first `case` that matches is selected, even if the cases are not equal to each other.)

If no matching `case` clause is found, the program looks for the optional `default` clause, and if found, transfers control to that clause, executing the associated statements. If no `default` clause is found, the program continues execution at the statement following the end of `switch`. By convention, the `default` clause is the last clause, but it can be anywhere in the switch statement.

The optional `break` statement associated with each `case` label ensures that the program breaks out of `switch` once the matched statement is executed and continues execution at the statement following `switch`. If break is omitted, the program continues execution at the next statement in the switch statement.

> Note: The break statement is not required if a return statement precedes it.

### Omitting the `break` statement

If you forget a `break` then the script will run from the `case` where the criterion is met and run the cases after that one **regardless** if a criterion was met or not.

Let's explore an example of this flow:

```sh
const foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo is 0 so criteria met here so this block will run
    console.log(0);
    // NOTE: the forgotten break would have been here
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // it encounters this break so will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}
```

### Multi-`case`:single operation

This is sometimes called "fall-through".

Since there is no `break` after a matched `case` and the flow will continue to execute the next `case` clause regardless of the `case` meeting the criteria, we can take an advantage of this.

Consider the following example:

```sh
const animal = 'Dog';
switch (animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
}
```

As we can see, this is a single operation sequential `case` statement in which four different values will execute exactly the same statement.
