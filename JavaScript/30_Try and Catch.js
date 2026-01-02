try {
    let x = undefined
    console.log(x[0]);
} // Write risky code in try block... Testing during execution..

catch {
    console.log("error handling in catch");
} // If error in try block then it comes in catch block...

finally {
    console.log("Finally always gets executed");
} // Finally block run after try and catch...

console.log("end");

try {
    let y = undefined
    console.log(y[0]);
}

catch (err) {
    console.log("error handling in catch", err);
} // err argument shows that what error is occuring in this piece of code...

finally {
    console.log("Finally always gets executed");
} //Finally always execute...