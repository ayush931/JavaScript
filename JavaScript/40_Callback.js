// A function which takes another function as an arguments is called Higher Order Function....
// The function in the argument is called callback...

function h (x, fn) {
    // h -> higher order function
    // fn -> callback
    console.log(x * x);
    fn ()
}

h (10, function () {
    console.log("Done with Callback");
})



function a (y, f) {
    console.log(y * y);
    f (y * y)
}

a (10, exe)

function exe (n) {
    console.log("Squared value is", n);
}

console.log("Start");

// setTimeout takes another function as an argument, that's why setTimeout is a higher order function...
// setTimeout is an asynchronous code because it doesn't execute line by line...

setTimeout (function f () {
    console.log("Timer Done");
}, 3000)

console.log("End");


console.log("Start");

setTimeout (function b () {
    console.log("Time Over");
}, 5000)

setTimeout (function c () {
    console.log("Time over 1");
}, 0)

console.log("End");
for (let i = 0; i < 100000; i++) {}

