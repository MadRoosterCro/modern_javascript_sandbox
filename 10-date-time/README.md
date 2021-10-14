# Date & Time

`Date` object in JavaScript represents a single moment in time. It contains a `Number` that represents milliseconds since 1st of January 1970 UTC.

## Description

The `Date` object in JavaScript is fundamentally specified as milliseconds elapsed since midnight of January 1, 1970 UTC. This date ant time are **NOT** the same as the **UNIX epoch** (Unix epoch represents the number of **SECONDS** elapsed since midnight of January 1, 1970, UTC).

`UNIX epoch` - predominant base value for computer-recorded date and time values.

> IMPORTANT NOTE: While the time value of the Date object is UTC, the basic method to fetch the date and time of its components all work in the local (host system) time zone.

### Date format and time zone conversion

There are several ways to get the date in various formats, as well as to perform time zone conversion. Particlarly useful are the functions that output the date and time in UTC, which is a global standard time defined by the World Time Standard.

> NOTE: You may have heard of the GMT, which is the same as UTC.

### Constructor

| `Date()`    | When called as a function, returns a string representation of the current date and time. |
| ----------- | ---------------------------------------------------------------------------------------- |
| `newDate()` | When called as a constructor, returns a new `date` object.                               |

### Static methods

| `Date.now()`   | Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.                           |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Date.parse()` | Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.                                         |
| `Date.UTC()`   | Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored. |

### Instance methods

| `getDate()`            |     |
| ---------------------- | --- |
| `getDay()`             |     |
| `getFullYear()`        |     |
| `getHours()`           |     |
| `getMilliseconds()`    |     |
| `getMinutes()`         |     |
| `getMonth()`           |     |
| `getSeconds()`         |     |
| `getTime()`            |     |
| `getTimezoneOffset()`  |     |
| `getUTCDate()`         |     |
| `getUTCDay()`          |     |
| `getUTCFullYear()`     |     |
| `getUTCHours()`        |     |
| `getUTCMilliseconds()` |     |
| `getUTCMinutes()`      |     |
| `getUTCMonth()`        |     |
| `getUTCSeconds()`      |     |
| `getYear()`            |     |
| `setDate()`            |     |
| `setFullYear()`        |     |
| `setHours()`           |     |
| `setMilliseconds()`    |     |
| `setMinutes()`         |     |
| `setMonth()`           |     |
| `setSeconds()`         |     |
| `setTime()`            |     |
| `setUTCDate()`         |     |
| `setUTCFullYear()`     |     |
| `setUTCHours()`        |     |
| `setUTCMilliseconds()` |     |
| `setUTCMinutes()`      |     |
| `setUTCMonth()`        |     |
| `setUTCSeconds()`      |     |
| `setYear()`            |     |
| `toDateString()`       |     |
| `toISOString()`        |     |
| `toJSON()`             |     |
| `toGMTString()`        |     |
| `toLocaleDateString()` |     |
| `toLocaleString()`     |     |
| `toLocaleTimeString()` |     |
| `toString()`           |     |
| `toTimeString()`       |     |
| `toUTCString()`        |     |
| `valueOf()`            |     |
