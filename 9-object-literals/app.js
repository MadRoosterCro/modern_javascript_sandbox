const person = {
  firstName: 'John',
  lastName: 'Malkovich',
  age: 67,
  city: 'Boston',
};

// lets see the console output
let val = person;
console.log(val);

// If we want to get the specific value from the person object, this is the recommended way
let val1 = person.firstName;
console.log(`First name of our object is `, val1);

// we can do the same thing using brackets []
let val2 = person['lastName'];
console.log(`Last name of our object is `, val2);
