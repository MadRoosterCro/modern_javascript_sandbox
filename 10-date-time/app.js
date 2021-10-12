let val;

const today = new Date();

val = today;
console.log(val, typeof val);
// we see the value of val variable and it is type of object, because type of Date is in fact an object, as we said before

const birthday = new Date('10/5/1990, 22:30:00'); // just one of many many ways we can pass the date in here
// here you need to be carefull about the date formatting
let val1 = birthday;
console.log(val1);

// getting current month
let val2 = today.getMonth();
console.log(`The current month is `, val2);
/**
 * you might notice that the console will print a number that is supposed to represent the current month
 * so why is it 1 number less than we expected?
 * it is because it's 0 based, remember the indexes? so the starting position is actually 0 and not 1
 */