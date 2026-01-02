function createPromise () {
    return new Promise (function exec (resolve, reject) {
        setTimeout (function f () {
            console.log("Timer Done");
            resolve (10)
        }, 3000)
    })
}

// Async will return promise...

async function consume () {
    console.log("Inside function");
    const response = await createPromise ()
    const response1 = await createPromise ()
    console.log("Response is", response);
}


console.log("Start");
consume ()

console.log("End");
