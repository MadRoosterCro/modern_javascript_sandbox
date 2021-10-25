# Switches

The `switch` statement evaluates an expression, matching it's value to a `case` clause and then executes a `statement` associated with that `case`, as well as statements in cases that follow the matching `case`.

### Default synta

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
