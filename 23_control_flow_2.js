const userEmail = []

if (userEmail) {
    console.log("Got user email")
}
else {
    console.log("Don't have user value")
}

/** 
 * Falsy value
 * 
 * false, 0, -0, BigInt, 0n, "", null, undefined, NaN
*/


/**
 * Truthy value
 * 
 * "0", "false", " ", [], {}, function(){}
*/

if (userEmail.length === 0) {
    console.log("Array is empty")
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty")
}

console.log(false == 0) // true
console.log(false == "") // true
console.log(0 == "") // true

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10 -> 5
// val1 = null ?? 10 -> 10
// val1 = undefined ?? 15 -> 15
val1 = null ?? 10 ?? 20

console.log(val1)

// Terniary operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")