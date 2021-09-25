# Type conversion!

Variables in JavaScript can be converted to new variables and to another data type!
It can be done:

- by a JavaScript function like `String()`, `Number()`, etc.
- by JavaScript itself

The global method `Number()` can convert strings to numbers.

This means that strings containing numbers (like `'5.55'`) will convert to numbers (like `5.55`)

Empty strings will convert to 0.

Anything else will convert to `NaN` (Not A Number).

# `'NaN'`

What seems to be really confusing here is that `NaN` is actually a number type. I know, strange since it stands for not a number, right?

Let's put it this way, `NaN` is of numeric type, it stands for unrepresentable value, a value that has non-writable and non-configurable properties.

There are five different operations that will return `NaN`:

1. When a number cannot be parsed (`parseInt('MichaelKeatonIsMyFavoriteBatman') || Number(undefined)`)
2. Math operations when the result is not a real number (`Math.sqrt(-1)`)
3. When `NaN` is na operand of an argument (`7 ** NaN`)
4. When using indeterminate forms (`0 * Infinity || undefined + undefined`)
5. Any operation that involves a string and is not addition (`'RobinIsLame' / 69`)

Please see `app.js` file for more explanations!

> General tip: Google is your friend and is an important tool in everyday life of a developer!

Some other usefull tools/sites I like (_in no particular order_) are:

- MDN Web Docks
- Stack Overflow
- W3Schools
- DevDocs
- FreeCodeCamp

> Oh yeah, when I was listing `NaN` examples, you might've noticed the `||` signs.
> The sign `|` is called a pipe, and when you see it 2 times like that, it represents logical disjunction. The way I used it here wasn't really how it is supposed to be used, I just want to ease it in the lessons. I will try to this will most of the syntax.

## Logical OR -> `||`

It is typically used for Booleans and it returns a true/false value.
Not to complicate life any further, and to avoid more confusion, let me show you what this means.

If we say this in our code:

```sh
red || blue
```

That means if `red` can be converted to `true`, it will return `red`, else, it will return `blue`.

Values that can be converted to `true` are called truthy, values that can be converted to `false` are called `falsy`.

Here are some examples that can be `falsy`:

- `null`
- `NaN`
- `0`
- empty strings (any ticks, "", '', or ``) ==> different ticks have also different meanings, more on that later on
- `undefined`

As I mentioned, we will be mentioning some new syntax as we progress.

## Quoting styles

Let's continue with quoting styles since we've mentioned it above.

There are 2 quoting styles in JavaScript
(_3 actually, but let's leave backticks `` for later_)

For now let's focus on the main 2 quoting styles:

- single `''`
- and double quotes`""`

Both of them are used to represent a string n JavaScript. Choosing which one you will use is up to you and there actually isn't any significant difference between them. Which ever one you choose, just keep using that one and stay consistent.
