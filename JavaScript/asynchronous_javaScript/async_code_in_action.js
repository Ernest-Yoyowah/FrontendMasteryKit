/*
Asynchronous programming is a technique that enables your program to start a potentially
long-running task and still be able to be responsive to other events while that task runs,
rather than having to wait until that task has finished.
Once that task has finished, your program is presented with the result.

In Short:
Asynchronous programming enables a program to perform tasks in the background,
allowing responsiveness to other events, and then handles the results when ready.

*/

console.log(`1`);
console.log(`2`);

setTimeout(() => {
  console.log(`Callback Function Fired`);
}, 2000);

console.log(`3`);
console.log(`4`);
console.log(`5`);
