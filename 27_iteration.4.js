const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "ruby", "python", "java"]

for (const key in programming) {
    console.log(programming[key])
}

const map = new Map()
map.set('IN', "India")
map.set("USA", "United States of America")
map.set("FR", "France")

for (const key in map) {
    console.log(map)
} // no value, not iterable

