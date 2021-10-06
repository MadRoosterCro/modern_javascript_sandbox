## Arrays

Array class is a global object that is used in the construction of arrays.

Arrays are list-like objects which has methods to perform traversal and mutation operations.
Array has length depending on the number of its elements.

Neither the number of the elements in the array nor the types of the elements are fixed.

### Accessing arrays elements

Arrays in JavaScript are zero-based or zero-indexed.
This means that the first element of any given array is at index `0`, and the last element of it is at the index value equal to the value of arrays `length` minus `1`.

Using invalid index number will return `undefined`.

```sh
let arr = ['first element','second element','last element']
console.log(arr[0])              // logs 'first element'
console.log(arr[1])              // logs 'second element'
console.log(arr[arr.length - 1]) // logs 'last element'
```

#### Constructor

`Array()` => creates a new `Array` object

#### Static methods

`Array.from()` => Creates a new `Array` instance from an array-like or iterable object.

`Array.isArray()` => Returns `true` if the argument is an array, or `false` otherwise.

`Array.of()` => Creates a new `Array` instance with a variable number of arguments, regardless of number or type of the arguments.

#### Instance properties

`.length` => Reflects the number of elements in an array.

#### Instance methods

| Method              | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `.at()`             | Returns the array item at the given index. Accepts negative integers, which count back from the last item.                                  |
| `.concat()`         | Returns a new array that is this array joined with other array(s) and/or value(s).                                                          |
| `.copyWithin()`     | Copies a sequence of array elements within the array.                                                                                       |
| `.entries()`        | Returns a new array iterator object that contains the key/value pairs for each index in the array.                                          |
| `.every()`          | Returns `true` if every element in this array satisfies the testing function.                                                               |
| `.fill()`           | Fills all the elements of an array from a start index to an end index with a static value.                                                  |
| `.filter()`         | Returns a new array containing all elements of the calling array for which the provided filtering function returns `true`.                  |
| `.find()`           | Returns the found `element` in the array, if some element in the array satisfies the testing function, or `undefined` if not found.         |
| `.findIndex()`      | Returns the found index in the array, if an element in the array satisfies the testing function, or `-1` if not found.                      |
| `.flat()`           | Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.                                 |
| `.flatMap()`        | Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. |
| `.forEach()`        | Calls a function for each element in the array.                                                                                             |
| `.includes()`       | Determines whether the array contains a value, returning `true` or `false` as appropriate.                                                  |
| `.indexOf()`        ||
| `.join()`           ||
| `.keys()`           ||
| `.lastIndexOf()`    ||
| `.map()`            ||
| `.pop()`            |                                                                                                                                             |
| `.push()`           |                                                                                                                                             |
| `.reduce()`         |                                                                                                                                             |
| `.reduceRight()`    |                                                                                                                                             |
| `.reverse()`        |                                                                                                                                             |
| `.shift()`          |                                                                                                                                             |
| `.slice()`          |                                                                                                                                             |
| `.some()`           |                                                                                                                                             |
| `.sort()`           |                                                                                                                                             |
| `.splice()`         |                                                                                                                                             |
| `.toLocaleString()` |                                                                                                                                             |
| `.toString()`       |                                                                                                                                             |
| `.unshift()`        |                                                                                                                                             |
| `.values()`         |                                                                                                                                             |
