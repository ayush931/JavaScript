// for of

// ['', '', '']
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    console.log(element)
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set("USA", "United States of America")
map.set("FR", "France")

console.log(map);

for (const [key, Value] of map) {
    console.log(key, ":-", Value)
}

const myObject = {
    "game1": "NFS",
    "game2": "Spiderman"
}

for (const [key, value] of myObject) {
    console.log(key, value)
}