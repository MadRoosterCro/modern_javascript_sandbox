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

| Method | Decription |
| ------ | ---------- |
|        |            |
|        |            |
|        |            |
|        |            |
|        |            |
|        |            |
|        |            |
|        |            |
|        |            |
|        |            |
|        |            |
|        |            |
|        |            |
|        |            |
