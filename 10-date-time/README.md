# Date & Time

`Date` object in JavaScript represents a single moment in time. It contains a `Number` that represents milliseconds since 1st of January 1970 UTC.

## Description

The `Date` object in JavaScript is fundamentally specified as milliseconds elapsed since midnight of January 1, 1970 UTC. This date ant time are **NOT** the same as the **UNIX epoch** (Unix epoch represents the number of **SECONDS** elapsed since midnight of January 1, 1970, UTC).

`UNIX epoch` - predominant base value for computer-recorded date and time values.

> IMPORTANT NOTE: While the time value of the Date object is UTC, the basic method to fetch the date and time of its components all work in the local (host system) time zone.

