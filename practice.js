let a = 1;
let b = 2;

// Here setTimeout is a form a js code where it is an async code where the js won't wait for anything to get executed
// after 1000 milliseconds the code is executed and before that the console prints the other lines of code
setTimeout(function () {
  //here the function inside the setTimeout is a callback function
  console.log('timer');
}, 3000);

// Here fetch is also a form of async code where this also happens late althoug it is before some part of code. But in this case, it is faster than the setTimeout while printing it in the console.
fetch('/').then(function () {
  console.log('Fetch');
});

// Here the console executes line by line and that is called sync code
console.log('sync');
console.log(a);
console.log(b);

function x(y) {
  console.log('x');
  y();
}
// Here function y is a callback function
x(function y() {
  console.log('y');
});
