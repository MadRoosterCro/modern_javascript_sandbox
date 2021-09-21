# Data types

There are actually 2 types of data types in JavaScript.
Confusing yeah, just a quick mention and then we move on.

### 1. Primitive data types

- data is stored directly in the location the variable accesses
- stored on the stack, when you access it, you do it by its value

### 2. Reference data types

- objects that are accessed by reference
- data is actually stored on the heap (for now lets just say it has to do with dynamically alocated memory)
- when we access it, we bacsically point to a location in memory

### PRIMITIVE DATA TYPES

##### 1. String

- sequences of characters

##### 2. Number

- integers, decimals, floats

##### 3. Boolean

- true or false

##### 4. Null

- intentional empty value

##### 5. Undefined

- variable with no assigned value

##### 6. Symbols

- ES6 brought us symbols, which we will get into later to avoid confusion at the moment.

### REFERENCE DATA TYPES

- Not accessed by a value but by a reference. Hence the name reference types.

##### 1. Arrays

##### 2. Object literals

##### 3. Functions

##### 4. Dates

##### 5. Anythig else

Basically, these will all be objects.

> JavaSript is dynamically typed language, this means that data types are associated with values, not variables.

So the same variable can hold multiple types. Meaning it can hold a number and then be set to a string with no errors or complaints.

We do not specifiy types in JavaScript.
There are technologies (supersets) of JavaScript and some addons that allow static typing (TypeScript, Flow).
