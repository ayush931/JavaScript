console.log(Math.PI)
Math.PI = 5
console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)

const object = {
    name: "ayush",
    price: 1000,
    isAvailable: true,

    newobject: function(){
        console.log("New Object")
    }
}

console.log(Object.getOwnPropertyDescriptor(object, "name"))

Object.defineProperty(object, "name", {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(object, "name"))

for (let [key, value] of Object.entries(object)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}