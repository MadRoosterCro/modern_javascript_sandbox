// FOR loop

for (let i = 0; i < 6; i++) {
  // i++ just means we are incrementing a variable, in this case i = i+1
  console.log(`L loop is at number => ${i}`);
} // the console prints 0,1,2,...,5

/** a quick explanation of the flow from the stated example
 * first we declare a variable "i" and set it's initial value at 0
 * then we say for every "i" that is LESS than 10
 *  increment "i" by 1
 */

// if we want to create a special case on one of the iterations:

for (let x = 0; x <= 10; x++) {
  // notice now we will print 10 as well
  if (x === 8) {
    console.log('8 is the best number!');
    continue; // with this we tell the loop to stop and go to the next iteration
  }
  console.log(`X loop is at number => ${x}`);
}
// without the continue keyword, our special case would be fired and the console would print
// This loop is at number 7
// 8 is the best number!
// This loop is at number 8

// and we want to skip that iteration because we already covered our special case with an if statement.

// how to break out of the loop

for (let k = 0; k < 10; k++) {
  if (k === 2) {
    console.log(`I don't really like the number 2`);
    continue;
  }
  if (k === 7) {
    console.log(`Stop the loop because we are at number 7`);
    break;
  }
  console.log(`K loop is at number => ${k}`);
}
// we can see that we stopped iterating when we reach number 7 because we specified a break point there


