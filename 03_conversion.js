let score = "33abc"

console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN

let age = null
console.log(typeof age);

let ageInNumber = Number(age)
console.log(typeof ageInNumber);
console.log(ageInNumber);

let game = undefined
console.log(typeof game);

let gameInNumber = Number(game)
console.log(typeof gameInNumber);
console.log(gameInNumber);

let test = true
console.log(typeof test);

let testInNumber = Number(test)
console.log(typeof testInNumber);
console.log(testInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

let empty = ""
let boolEmpty = Boolean(empty) // false
console.log(boolEmpty);

let names = "Ayush"
let boolNames = Boolean(names) // true
console.log(boolNames);

// "" => false, "Ayush" => true

let someNumber = 33
let stringNum = String(someNumber)
console.log(stringNum);
console.log(typeof stringNum);

