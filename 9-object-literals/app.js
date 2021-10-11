const person = {
  firstName: 'John',
  lastName: 'Malkovich',
  age: 67,
  email: 'example@example.com',
  hobbies: ['music, acting, sports'],
  address: {
    city: 'Boston',
    state: 'Massachusetts',
  },
  getBirthYear: function () {
    return 1953;
  },
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

// let's log out each prop in the person object to see different outputs
