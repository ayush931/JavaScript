// In JavaScript almost everything is an object..

// Spread

const oneArray = [1, 2, 3, 4]
const twoArray = [5, 6, 7, 8]

// const threeArray = oneArray.concat (twoArray)
// const threeArray = [oneArray, twoArray]  made combination of two array

const threeArray = [...oneArray, ...twoArray]  // Concat all the array
// console.log(threeArray);

function testOne () {
    console.log(arguments);
}

testOne (1, 2, 3, 4, 5) // In browser, it will give an array. This shows that finction is an object.
testOne ([1, 2, 3, 4, 5])

function testTwo () {
    console.log(typeof(arguments));
}

let a1 = new Array (1, 2, "Ayush,", true) // To form a new array,we can also use new Array syntax..
console.log(a1);

testTwo (1, 2, 3, 4, 5)  // Both are an object...
testTwo([1, 2, 3, 4, 5])

console.log(Array.from ("foooo")); // Array.from convert any object, string into an arary.

// Rest operator:- It takes value and pack into an array..

function manyArguments () {
    let args = Array.from (arguments)  // This will give an iterable array..
    let finalArr = args.map (e => e * 2) // mapl loop on each element of array.
    console.log(finalArr);
    console.log(typeof arguments);
}

function manyArguments2 (...args) {
    let finalArr = args.map (e => e)
    console.log(finalArr);
    console.log(typeof args);
}

manyArguments (1, 2, 3)
manyArguments (1, 2, 3, 4, 5, 6, 7)

manyArguments2 (1, 2, 3)
manyArguments2 (1, 2, 3, 4, 5, 6, 7)

// Spread Operator

const names = ["Superman", "Flash"]
const newNames = ["Batman", ...names, "Thor"] // It will concat the names array..
console.log(newNames);

const siteName = "pwskills"
console.log([...siteName]); // It will give an array of all the elements separately...

// Rest Operator

function pwskills (...values) {
    return values
}

console.log(pwskills("Superman", "Flash"));
