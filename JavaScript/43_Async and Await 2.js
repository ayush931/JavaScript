function createPromise () {
    return new Promise (function exec (resolve, reject) {
        setTimeout (function f () {
            console.log("Timer Done");
            reject (10)
        }, 3000)
    })
}

async function consume () {
    try {
        console.log("Inside function");
        const response = await createPromise ()
        const response1 = await createPromise ()
        console.log("response is", response);
    } 
    catch (err) {
        console.log("Handled", err);
    }
}

console.log("Start");
consume ()

console.log("End");