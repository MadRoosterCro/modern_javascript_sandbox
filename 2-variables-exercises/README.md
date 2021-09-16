# Variables

## var, let & const

There are several ways to declare a variable

### VAR

The "old" way of declaring a variable, not used very often and is considered archaic by some devs.

#### Declaring variables using `var`

When naming variables, we can include only numbers, letters, \_, and $.
Variables can not start with a number. This goes for var, const and let.

```sh
var 1hello = 'hello';
```

This will throw a syntax error. We can use `_` and `$` as first charachters but for now lets stick to letters.

When declaring variables with multiple words, it is common to use camelCase which looks like this:

```sh
var firstName;
var lastName;
var someNewRandomVariableThatWeDoNotKnow;
```

There are different styles of naming variables, Camel case is industry standard because it makes your code readable. Refer to the `app.js` to see more examples.

### CONST, LET

The "newer" way of declaring variables.

#### Declaring variables using `let`

We use `let` when declaring a non-constant variable, this means that the value of the variable we declared is going to change later in the code.

#### Declaring variables using `const`

Why is `const` so special?

We use `const` when declaring a constant variable, this means that this variable can not be reassigned later on.

Furthermore, unlike var & let, when we declare a variable with `const` we must assing a value to it. More on that in the `app.js` file.

> ## IMPORTANT NOTE!
>
> _Later on we will mention object mutation, sometimes people get confused because we can mutate the data inside an object, which can look like we are reassigning the object, but we are only changing the value of data inside the object, we cannot reassign the object itself!_

##### Example of object mutation:

```sh
const person = {
    firstName: 'John',
    lastName: 'Malkovich',
    age: 67,
}
```

Now when we `console.log(person)` it will show us the following:

```sh
{firstName: 'John', lastName:'Malkovich', age: 67}
```

which is amazing, I know, but then if we mutate the data inside the `person` object like so:

```sh
person.firstName = 'Glenne';
person.lastName = 'Headly';
person.age = 62;
```

and then we `console.log(person)` we will see the following:

```sh
{firstName: 'Glenne', lastName:'Headly', age: 62}
```

You see, we did not actually reassign the `person` object, we just mutated the data inside it.
Same thing applies for arrays, do not worry about that for now.

More on data mutation later on, let's keep it light and simple for now.

The final point for variables is this => every developer has their own preference when it comes to declaring variables.

`let` & `const` will make your code more readable and robust, making it easier for others to see what you want to achieve with your code.
