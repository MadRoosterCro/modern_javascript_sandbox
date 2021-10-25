// This is going to be a short but important lesson!

const color = 'red'; // try changing this to some other color and see the output in the console!

switch (color) {
  case 'red':
    console.log('Color is red!');
    break;
  case 'blue':
    console.log('Color is blue!');
    break;
  case 'green':
    console.log('Color is green!');
  default:
    console.log('Color is not red, blue or green!');
    break;
}

/* we can see that this switch does excactly the same thing as else if example in the last lesson
it is more convinient to use a switch if we have a lot of conditions
*/

let day;
switch (new Date().getDay()) {
  case 0: // remember that it is 0 based like we mentioned in the date/time lesson
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}
// so this switch will be different each day of the week!

console.log(`Today is ${day}!`);

// generaly speaking, switches are pretty simple/intuitive to understand
