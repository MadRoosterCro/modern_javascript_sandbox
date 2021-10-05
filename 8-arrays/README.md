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

| Method              | Description |
| ------------------- | ----------- |
| `.at()`             |             |
| `.concat()`         |             |
| `.copyWithin()`     |             |
| `.entries()`        |             |
| `.every()`          |             |
| `.fill()`           |             |
| `.filter()`         |             |
| `.find()`           |             |
| .findIndex()        |             |
| .flat()             |             |
| .flatMap()          |             |
| .forEach()          |             |
| .includes()         |             |
| .indexOf()          |             |
| .join()             |             |
| .keys()             |             |
| .lastIndexOf()      |             |
| .map()              |             |
| .pop()              |             |
| .push()             |             |
| .reduce()           |             |
| .reduceRight()      |             |
| .reverse()          |             |
| .shift()            |             |
| .slice()            |             |
| `.some()`           |             |
| `.sort()`           |             |
| `.splice()`         |             |
| `.toLocaleString()` |             |
| `.toString()`       |             |
| `.unshift()`        |             |
| `.values()`         |             |
