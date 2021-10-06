## Arrays

Array class is a global object that is used in the construction of arrays.

Arrays are list-like objects which has methods to perform traversal and mutation operations.
Array has `length` depending on the number of its elements.

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
| `.indexOf()`        | Returns the first (least) index of an element within the array equal to an element, or `-1` if none is found.                               |
| `.join()`           | Joins all elements of an array into a string.                                                                                               |
| `.keys()`           | Returns a new array iterator that contains the keys for each index in the array.                                                            |
| `.lastIndexOf()`    | Returns the last (greatest) index of an element within the array equal to an element, or `-1` if none is found.                             |
| `.map()`            | Returns a new array containing the results of calling a function on every element in this array.                                            |
| `.pop()`            | Removes the last element from an array and returns that element.                                                                            |
| `.push()`           | Adds one or more elements to the end of an array, and returns the new `length` of the array.                                                |
| `.reduce()`         | Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.                 |
| `.reduceRight()`    | Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.                 |
| `.reverse()`        | Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)                                      |
| `.shift()`          | Removes the first element from an array and returns that element.                                                                           |
| `.slice()`          | Extracts a section of the calling array and returns a new array.                                                                            |
| `.some()`           | Returns `true` if at least one element in this array satisfies the provided testing function.                                               |
| `.sort()`           | Sorts the elements of an array in place and returns the array.                                                                              |
| `.splice()`         | Adds and/or removes elements from an array.                                                                                                 |
| `.toLocaleString()` | Returns a localized string representing the array and its elements.                                                                         |
| `.toString()`       | Returns a string representing the array and its elements.                                                                                   |
| `.unshift()`        | Adds one or more elements to the front of an array, and returns the new `length` of the array.                                              |
| `.values()`         | Returns a new array iterator object that contains the values for each index in the array.                                                   |
