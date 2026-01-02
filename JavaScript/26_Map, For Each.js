let arr = [2, 3, 4]

arr.forEach (function (element, index, arr) {
    console.log(element, index, arr);
})


arr.forEach ((element, index, arr) => {
    console.log("arrow:", element, index, arr);
})

const heros = ["naagraj", "doga", "dhurva", "maniraj"]

heros.forEach ((el) => {
    console.log(el.toUpperCase ());
})

arr.map (function (element, index, arr) {
    console.log(element, index, arr);
})

heros.map ((ay) => console.log(ay.toUpperCase ()))

// Filter

console.log(heros);

const herosWithRaj = heros.filter ((h) => {
    return h.endsWith ("raj")
})

console.log(herosWithRaj);

// Shopping Cart

const cartBill = [20, 30, 50]
const sumOfCartBill = cartBill.reduce ((prev, curr) => prev + curr, 0)
console.log(sumOfCartBill);

const gameScore = [200, 300, 310, 250, 150]

// Check if all values are numbers

console.log(typeof gameScore[2]);
const gameScoreCheck = gameScore.every ((v) => typeof v === "number")
console.log("Check:", gameScoreCheck);

// find score above 200

const above200 = gameScore.find ((score) => score > 200)
console.log(above200);  // Give just first value that satisfy the condition.

// findIndex
// some
// sort

