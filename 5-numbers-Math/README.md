## Numbers & Math object

`Math` is one of javascript's built-in objects that has some properties and methods for mathematical functions and constants.

It is not a function object and it works with the `Number` type.

### Explanation

All properties of the `Math` object are static. We can refer to the constant `π(pi)` as `Math.PI` and we can call the sine function as `Math.sin(x)`, x being the argument in the given method.

> Important note: _Some `Math` functions have implementation-dependent precision. This means that the result may differ in different browsers and that the same JavaScript engine can yield different results on a different Operating System_

We can always check all the available methods and properties in a given object by entering dot(`.`) after calling the object.

### Math object properties:

| Property  | Description                         |
| --------- | ----------------------------------- |
| `E`       | Returns Euler's number              |
| `LN2`     | Returns the natural logarithm of 2  |
| `LN10`    | Returns the natural logarithm of 10 |
| `LOG2E`   | Returns the base-2 logarithm of E   |
| `LOG10E`  | Returns the base-10 logarithm of E  |
| `PI`      | Returns PI                          |
| `SQRT1_2` | Returns the square root of 1/2      |
| `SQRT2`   | Returns the square root of 2        |

### Math object methods:

| Method   | Description                            |
| -------- | -------------------------------------- |
| abs(x)   | Returns the absolute value of x        |
| acos(x)  | Returns the arccosine of x, in radians |
| acosh(x) | Returns the hyperbolic arccosine of x  |

asin(x) Returns the arcsine of x, in radians
asinh(x) Returns the hyperbolic arcsine of x
atan(x) Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x) Returns the arctangent of the quotient of its arguments
atanh(x) Returns the hyperbolic arctangent of x
cbrt(x) Returns the cubic root of x
ceil(x) Returns x, rounded upwards to the nearest integer
clz32(x) Returns the number of leading zeros in a 32-bit binary representation of x
cos(x) Returns the cosine of x (x is in radians)
cosh(x) Returns the hyperbolic cosine of x
exp(x) Returns the value of Ex
expm1(x) Returns the value of Ex minus 1
floor(x) Returns x, rounded downwards to the nearest integer
fround(x) Returns the nearest (32-bit single precision) float representation of a number
log(x) Returns the natural logarithmof x
log10(x) Returns the base-10 logarithm of x
log1p(x) Returns the natural logarithm of 1 + x
log2(x) Returns the base-2 logarithm of x
max(x, y, z, ..., n) Returns the number with the highest value
min(x, y, z, ..., n) Returns the number with the lowest value
pow(x, y) Returns the value of x to the power of y
random() Returns a random number between 0 and 1
round(x) Rounds x to the nearest integer
sign(x) Returns the sign of a number (checks whether it is positive, negative or zero)
sin(x) Returns the sine of x (x is in radians)
sinh(x) Returns the hyperbolic sine of x
sqrt(x) Returns the square root of x
tan(x) Returns the tangent of an angle
tanh(x) Returns the hyperbolic tangent of a number
trunc(x) Returns the integer part of a number (x)
