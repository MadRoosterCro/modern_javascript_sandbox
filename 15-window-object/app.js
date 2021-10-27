// Window methods / Objects / Properties

// window.console.log(123);

// Alert
/**
 * if you uncomment the code below, in the browser you will see an alert!
 * we can also ommit the window. part and just write alert('Hello, this is an alert!')
 */

// window.alert('Hello, this is an alert!');

// Prompt
/**
 * simillar to alert, we can propmt the user to interact
 * uncomment the code below to see it in action in the browser
 */

// const input = prompt();
// alert(input);

// Confirm
// this will create a confirm window in the browser

// if (window.confirm('Are you sure you want to do it?')) {
//   console.warn('Ok, confirmed!');
// } else {
//   console.warn('Canceled!');
// }

// you will probably use bootsrap alerts instead, but just so you know these exist

// Properties

// Outter height and width
let outerHeight = window.outerHeight;
let outerWidth = window.outerWidth;
console.log(
  `Outer window height is ${outerHeight} and outer window width is ${outerWidth}`
);

// Inner height and width  => without the scroll-bars
let innerHeight = window.innerHeight;
let innerWidth = window.innerWidth;
console.log(
  `Inner window height is ${innerHeight} and inner window width is ${innerWidth}`
);
// try resizing the window in the browser and see the changes in window dimensions

// Scroll points
let scrollVerticalPosition = window.scrollY;
let scrollHorizontalPosition = window.scrollX;
console.log(
  `Vertical scroll position at ${scrollVerticalPosition}, Horizontal scroll position at ${scrollHorizontalPosition}`
); // it's gonna be zero because we don't actually have a scroll bars at the moment


