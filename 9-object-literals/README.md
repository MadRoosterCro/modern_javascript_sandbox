# Object literals

Object literal is a list of zero or more pairs of property names and associated values of and object. The mentioned pair of properites are enclosed in curly braces (`{}`).

Let's examine the following example of and object literal  from ***MDN***:

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
