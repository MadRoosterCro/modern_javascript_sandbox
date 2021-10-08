## Easy start

Ok, glad you are here, let's start easy!

Start VS Code and copy files from this branch in a new directory.
Now you should see 3 files in your IDE: `index.html`,`app.js` and `README.md`.

Open `index.html` in your favorite browser and then open developer tools to see the console.

> This is a good time to start your Live server if you installed the extension for it.

There are some examples already in the `app.js` file but feel free to play around and get a grip on how changing stuff in there affects the console in your browsers developer tools.

# THE CONSOLE!

The `console` object provides access to the browser's debugging console.
This object can be accessed from any global object and it has a lot of usefull methods. I will list them here but there is one that we will start with and that is `console.log()`!

### console.log()

The Holy Grail of every developer!

`console.log()` is a method that outputs a message to the web console. The message can be a string or any JavaScript object. It can even be more than just one JS object.

Like this:

```sh
console.log(obj1 [, obj2, ..., objN]);
console.log(msg [, subst1, ..., substN]);
```

where `obj1 ... objN` is a list of JavaScript objects,

`msg` is a JavaScript string containing substitution strings

and `subst1 ... substN` are JavaScript objects with which to replace substitution strings in the `msg` for additional control over the output.

### Logging objects

Don't use `console.log(obj)`, use `console.log(JSON.parse(JSON.stringify(obj)))`.

This way you are sure you are seeing the value of obj at the moment you log it. Otherwise, many browsers provide a live view that constantly updates as values change. This may not be what you want.

# All console methods

| Method                     | Decription                                                                                                                                                                                                                                             |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `console.assert()`         | Log a message and stack trace to console if the first argument is `false`.                                                                                                                                                                             |
| `console.clear() `         | Clear the console.                                                                                                                                                                                                                                     |
| `console.count()`          | Log the number of times this line has been called with the given label.                                                                                                                                                                                |
| `console.countReset()`     | Resets the value of the counter with the given label.                                                                                                                                                                                                  |
| `console.debug()`          | Outputs a message to the console with the log level `debug`.                                                                                                                                                                                           |
| `console.dir()`            | Displays an interactive listing of the properties of a specified JavaScript object. This listing lets you use disclosure triangles to examine the contents of child objects.                                                                           |
| `console.dirxml()`         | Displays an XML/HTML Element representation of the specified object if possible or the JavaScript Object view if it is not possible.                                                                                                                   |
| `console.error()`          | Outputs an error message. You may use string substitution and additional arguments with this method.                                                                                                                                                   |
| `console.exception()`      | An alias for `error()`. **NON-STANDARD!**                                                                                                                                                                                                              |
| `console.group()`          | Creates a new inline group, indenting all following output by another level. To move back out a level, call `groupEnd()`.                                                                                                                              |
| `console.groupCollapsed()` | Creates a new inline group, indenting all following output by another level. However, unlike `group()` this starts with the inline group collapsed requiring the use of a disclosure button to expand it. To move back out a level, call `groupEnd()`. |
| `console.groupEnd()`       | Exits the current inline group.                                                                                                                                                                                                                        |
| `console.info()`           | Informative logging of information. You may use string substitution and additional arguments with this method.                                                                                                                                         |
| `console.log()`            | For general output of logging information. You may use string substitution and additional arguments with this method.                                                                                                                                  |
| `console.profile()`        | Starts the browser's built-in profiler. You can specify an optional name for the profile. **NON-STANDARD!**                                                                                                                                            |
| `console.profileEnd()`     | Stops the profiler. You can see the resulting profile in the browser's performance tool. **NON-STANDARD!**                                                                                                                                             |
| `console.table()`          | Displays tabular data as a table.                                                                                                                                                                                                                      |
| `console.time()`           | Starts a timer with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page.                                                                                                                                  |
| `console.timeEnd()`        | Stops the specified timer and logs the elapsed time in milliseconds since it started.                                                                                                                                                                  |
| `console.timeLog()`        | Logs the value of the specified timer to the console.                                                                                                                                                                                                  |
| `console.timeStamp()`      | Adds a marker to the browser's Timeline or Waterfall tool. **NON-STANDARD!**                                                                                                                                                                           |
| `console.trace()`          | Outputs a stack trace.                                                                                                                                                                                                                                 |
| `console.warn()`           | Outputs a warning message. You may use string substitution and additional arguments with this method.                                                                                                                                                  |
