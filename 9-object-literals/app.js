const person = {
  firstName: 'John',
  lastName: 'Malkovich',
  age: 68,
  email: 'example@example.com',
  hobbies: ['music', 'acting', 'sports'],
  address: {
    city: 'Boston',
    state: 'Massachusetts',
  },
  getBirthYear: function () {
    return 1953; // just a function returning the year of birth
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
let val3 = person.age;
console.log(`The age is `, val3);
let val4 = person.email;
console.log(`The email is `, val4);
let val5 = person.hobbies[1]; // we can use brackets to see array members by index
console.log(`The value at index 1 is `, val5);
let val6 = person.address.state; // notice we can just keep accessing nested objects with dot (.)
console.log(`The prop(state) value in our nested object is `, val6);
let val7 = person.getBirthYear();
console.log(`The year of birth of the person is`, val7);

// we can access other properties in our objects, we can refactor the getBirthYear function
const person1 = {
  age: 68,
  getBirthYear: function () {
    // inside the object we can use this keyword, we will cover 'this' later on
    return 2021 - this.age;
  },
};

console.log(`The year of birth for person1 is `, person1.getBirthYear());

// arrays of objects
const people = [{}, {}];
