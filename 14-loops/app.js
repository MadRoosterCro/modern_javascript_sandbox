// FOR LOOP
// => usually we say that we use this loop when we know how many iterations there will be

for (let i = 0; i < 6; i++) {
  // i++ just means we are incrementing a variable, in this case i = i+1
  console.log(`FOR (i) loop is at number => ${i}`);
} // the console prints 0,1,2,...,5

/** a quick explanation of the flow from the stated example
 * first we declare a variable "i" and set it's initial value at 0
 * then we say for every "i" that is LESS than 10
 *  increment "i" by 1
 */

// if we want to create a special case on one of the iterations:

for (let j = 0; j <= 6; j++) {
  // notice now we will print 10 as well
  if (j === 3) {
    console.log('3 is the best number!');
    continue; // with this we tell the loop to stop and go to the next iteration
  }
  console.log(`FOR (j) loop is at number => ${j}`);
}
// without the continue keyword, our special case would be fired and the console would print
// This loop is at number 7
// 8 is the best number!
// This loop is at number 8

// and we want to skip that iteration because we already covered our special case with an if statement.

// how to break out of the loop

for (let k = 0; k < 6; k++) {
  if (k === 1) {
    console.log(`I don't really like the number 1`);
    continue;
  }
  if (k === 4) {
    console.log(`Stop the loop because we are at number 4`);
    break;
  }
  console.log(`FOR (k) loop is at number => ${k}`);
}
// we can see that we stopped iterating when we reach number 7 because we specified a break point there

/// WHILE LOOP
// => usually we say to use this loop when it's unclear how many iterations we need

let l = 0;

while (l < 6) {
  console.log(`WHILE (l) loop number is ${l}`);
  l++;
}

// DO...WILE LOOP
// => it will always run at least once no matter what!

let m = 0;
do {
  console.log(`DO...WHILE LOOP (m) is at number ${m}`);
  m++;
} while (m < 6);
// we got the exact same result as with the WHILE LOOP
// diference here is if we set that "m" variable to 1000 it's still gona print once

// how we use loops to iterate over an array

const cars = ['BMW', 'Mercedes', 'Opel', 'Toyota', 'Mazda', 'Porsche'];
for (let n = 0; n < cars.length; n++) {
  console.log(cars[n]); // we can use this syntax to access value at a given index
  // so here, instead of just printing values of index (0,1,2..,5) we will print value at each index
  // hence, we see BMW, Mercedes, Opel, Toyota, Mazda, Porshce in the console
}

// let's take a look at FOREACH
cars.forEach(function (car, index, array) {
  // this function takes 3 arguments, we will print them each time (index and the array are optional)
  // we can rewrite it to an inline function, but this is more readable for now
  console.log(`${index} : ${car}`);
  console.log(array);
});
// we achieved the same thing as before but much cleaner
// that is why I recommend using forEach for iterating over an array

// MAP
// lets say we have an array of objects and we want to create a new
// array that contains just the IDs of those users
const users = [
  {
    id: 1,
    name: 'John',
    age: 67,
  },
  {
    id: 2,
    name: 'Glenne',
    age: 62,
  },
  {
    id: 3,
    name: 'Dario',
    age: 31,
  },
  {
    id: 4,
    name: 'John',
    age: 34,
  },
];

const ids = users.map(function (user) {
  return user.id;
});
console.log(ids); // in the console we can see an array of ids!

// let's rewrite the above example with IDs but with array function
const newIds = users.map((user) => user.id);
console.log(newIds); // we got the exact same thing as before, but much cleaner

/// FOR IN
const user = {
  firstName: 'John',
  lastName: 'Malkovich',
  age: 67,
};

for (let o in user) {
  console.log(`${o} : ${user[o]}`); // we are iterating over the object and logging the key/value pairs
}
