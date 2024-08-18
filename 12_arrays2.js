const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)

console.log(marvelHeros)
// console.log(marvelHeros[3][2])

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros)

const allNewHeros = [...marvelHeros, ...dcHeros] // spread operator
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity) // spread all subarrays
console.log(realAnotherArray);

console.log(Array.isArray("Ayush"))
console.log(Array.from("Ayush")) // convert into array
console.log(Array.from({name: "Ayush"})) // note:- gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))