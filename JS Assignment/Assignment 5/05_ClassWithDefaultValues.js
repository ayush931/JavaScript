class Person {
    constructor (name = "Ayush", age = 20) {
        this.name = name
        this.age = age
    }
    getDetail () {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

let p1 = new Person ("ANkit", 22)
let p2 = new Person ()

console.log(p1.getDetail());
console.log(p2.getDetail());