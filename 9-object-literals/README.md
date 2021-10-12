# Object literals

Object literal is a list of zero or more pairs of property names and associated values of and object. The mentioned pair of properites are enclosed in curly braces (`{}`).

Let's examine the following example of and object literal from **_MDN_**:

```sh
const sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

const car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota
```

The following is an example of an object literal. The first element of the `car` object defines a property, `myCar`, and assigns to it a new string, `"Saturn"`; the second element, the `getCar` property, is immediately assigned the result of invoking the function `(carTypes("Honda"))`; the third element, the `special` property, uses an existing variable (`sales`).

You can also use a numeric string literal for the name of a property or nested objects.

Something like this:

```sh
const car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };
console.log(car.manyCars.b); // Jeep
console.log(car.manyCars[7]); // Mazda
```

Object property names can be any string, including an empty string. If the property name is not a valid identifier or number, it must be enclosed in quotes.

Property names that are not valid identifiers cannot be accessed as a dot (`.`) property, but can be accessed and set with the array-like notation(`"[]"`).
