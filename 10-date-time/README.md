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

|             | Description                                                                              |
| ----------- | ---------------------------------------------------------------------------------------- |
| `Date()`    | When called as a function, returns a string representation of the current date and time. |
| `newDate()` | When called as a constructor, returns a new `date` object.                               |

### Static methods

| Method         | Description                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Date.now()`   | Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.                           |
| `Date.parse()` | Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.                                         |
| `Date.UTC()`   | Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored. |

### Instance methods

| Method                 | Description                                                                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `getDate()`            | Returns the day of the month (`1–31`) for the specified date according to local time.                                                                              |
| `getDay()`             | Returns the day of the week (`0–6`) for the specified date according to local time.                                                                                |
| `getFullYear()`        | Returns the year (4 digits for 4-digit years) of the specified date according to local time.                                                                       |
| `getHours()`           | Returns the hour (`0–23`) in the specified date according to local time.                                                                                           |
| `getMilliseconds()`    | Returns the milliseconds (`0–999`) in the specified date according to local time.                                                                                  |
| `getMinutes()`         | Returns the minutes (`0–59`) in the specified date according to local time.                                                                                        |
| `getMonth()`           | Returns the month (`0–11`) in the specified date according to local time.                                                                                          |
| `getSeconds()`         | Returns the seconds (`0–59`) in the specified date according to local time.                                                                                        |
| `getTime()`            | Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.) |
| `getTimezoneOffset()`  | Returns the time-zone offset in minutes for the current locale.                                                                                                    |
| `getUTCDate()`         | Returns the day (date) of the month (`1–31`) in the specified date according to universal time.                                                                    |
| `getUTCDay()`          | Returns the day of the week (`0–6`) in the specified date according to universal time.                                                                             |
| `getUTCFullYear()`     | Returns the year (4 digits for 4-digit years) in the specified date according to universal time.                                                                   |
| `getUTCHours()`        | Returns the hours (`0–23`) in the specified date according to universal time.                                                                                      |
| `getUTCMilliseconds()` | Returns the milliseconds (`0–999`) in the specified date according to universal time.                                                                              |
| `getUTCMinutes()`      | Returns the minutes (`0–59`) in the specified date according to universal time.                                                                                    |
| `getUTCMonth()`        | Returns the month (`0–11`) in the specified date according to universal time.                                                                                      |
| `getUTCSeconds()`      | Returns the seconds (`0–59`) in the specified date according to universal time.                                                                                    |
| `getYear()`            | Returns the year (usually 2–3 digits) in the specified date according to local time. Use `getFullYear()` instead.                                                  |
| `setDate()`            | Sets the day of the month for a specified date according to local time.                                                                                            |
| `setFullYear()`        | Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.                                                                 |
| `setHours()`           | Sets the hours for a specified date according to local time.                                                                                                       |
| `setMilliseconds()`    | Sets the milliseconds for a specified date according to local time.                                                                                                |
| `setMinutes()`         | Sets the minutes for a specified date according to local time.                                                                                                     |
| `setMonth()`           | Sets the month for a specified date according to local time.                                                                                                       |
| `setSeconds()`         | Sets the seconds for a specified date according to local time.                                                                                                     |
| `setTime()`            | Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC. Use negative numbers for times prior.                |
| `setUTCDate()`         | Sets the day of the month for a specified date according to universal time.                                                                                        |
| `setUTCFullYear()`     | Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.                                                             |
| `setUTCHours()`        | Sets the hour for a specified date according to universal time.                                                                                                    |
| `setUTCMilliseconds()` | Sets the milliseconds for a specified date according to universal time.                                                                                            |
| `setUTCMinutes()`      | Sets the minutes for a specified date according to universal time.                                                                                                 |
| `setUTCMonth()`        | Sets the month for a specified date according to universal time.                                                                                                   |
| `setUTCSeconds()`      | Sets the seconds for a specified date according to universal time.                                                                                                 |
| `setYear()`            | Sets the year (usually 2–3 digits) for a specified date according to local time. Use `setFullYear()` instead.                                                      |
| `toDateString()`       | Returns the "date" portion of the Date as a human-readable string like `'Thu Apr 12 2018'`.                                                                        |
| `toISOString()`        | Converts a date to a string following the ISO 8601 Extended Format.                                                                                                |
| `toJSON()`             | Returns a string representing the Date using `toISOString()`. Intended for use by `JSON.stringify()`.                                                              |
| `toGMTString()`        | Returns a string representing the Date based on the GMT (UTC) time zone. Use `toUTCString()` instead.                                                              |
| `toLocaleDateString()` | Returns a string with a locality sensitive representation of the date portion of this date based on system settings.                                               |
| `toLocaleString()`     | Returns a string with a locality-sensitive representation of this date.                                                                                            |
| `toLocaleTimeString()` | Returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.                                              |
| `toString()`           | Returns a string representing the specified `Date` object.                                                                                                         |
| `toTimeString()`       | Returns the "time" portion of the `Date` as a human-readable string.                                                                                               |
| `toUTCString()`        | Converts a date to a string using the UTC timezone.                                                                                                                |
| `valueOf()`            | Returns the primitive value of a `Date` object.                                                                                                                    |
