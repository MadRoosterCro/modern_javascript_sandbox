# String methods & properties

Strings in JavaScript include default methods and properties which you can use for different purposes.
I will list these props and methods at the bottom of this page, you do not need to remember them, you have access to them by simply typing a dot `.` after a variable with a string value.

## String concatenation

Concatenation is used in programming to "merge" two or more into a single value.

There are two ways we can use to concatenate a string:

- using the concatenation operator `+`, adding the strings together
- using the `concat()` method

These methods can be used interchangeably, so neither one or the other offer any special functions and both the `+` sign and `concat()` mmethod merge strings to create a new, longer string.

#### String properties:

| Property | Decription                        |
| -------- | --------------------------------- |
| `length` | Returns the length of the string. |

#### String methods:

| Method                              | Decription                                                                                                                                               |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `charAt(position) `                 | Returns the character at the specified position (in Number).                                                                                             |
| charCodeAt(position)                | Returns a number indicating the Unicode value of the character at the given position (in Number).                                                        |
| concat([string,,])                  | Joins specified string literal values (specify multiple strings separated by comma) and returns a new string.                                            |
| indexOf(SearchString, Position)     | Returns the index of first occurrence of specified String starting from specified number index. Returns -1 if not found.                                 |
| lastIndexOf(SearchString, Position) | Returns the last occurrence index of specified SearchString, starting from specified position. Returns -1 if not found.                                  |
| localeCompare(string,position)      | Compares two strings in the current locale.                                                                                                              |
| match(RegExp)                       | Search a string for a match using specified regular expression. Returns a matching array.                                                                |
| replace(searchValue, replaceValue)  | Search specified string value and replace with specified replace Value string and return new string. Regular expression can also be used as searchValue. |
| search(RegExp)                      | Search for a match based on specified regular expression.                                                                                                |
| slice(startNumber, endNumber)       | Extracts a section of a string based on specified starting and ending index and returns a new string.                                                    |
| split(separatorString, limitNumber) | Splits a String into an array of strings by separating the string into substrings based on specified separator.                                          |
| substr(start, length)               | Returns the characters in a string from specified starting position through the specified number of characters (length).                                 |
| substring(start, end)               | Returns the characters in a string between start and end indexes.                                                                                        |
| toLocaleLowerCase()                 | Converts a string to lower case according to current locale.                                                                                             |
| toLocaleUpperCase()                 | Converts a sting to upper case according to current locale.                                                                                              |
| toLowerCase()                       | Returns lower case string value.                                                                                                                         |
| toString()                          | Returns the value of String object.                                                                                                                      |
| toUpperCase()                       | Returns upper case string value.                                                                                                                         |
| valueOf()                           | Returns the primitive value of the specified string object.                                                                                              |

