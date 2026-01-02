function createPromise () {
    return new Promise (function exec (resolve, reject) {
        // Your code goes here.
        setTimeout (function f() {  // Asynchronous code goes into Promise function...
            console.log("Timer Done");
            resolve (10)
        }, 3000)
    })
}

console.log("Start");

let x = createPromise ()

console.log("Got a new promise");

// x.then denotes that whenever the asynchronous code ccompleted the execute this...

x.then (function f (value) { 
    console.log("Promise Done", value);
}).catch (function g (value) {
    console.log("Handled", value);
}).finally (function fn () {
    console.log("Finally");
})

console.log("End");

for (let i = 0; i < 1000000; i++) {
    // Some Code
}

