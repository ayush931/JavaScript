/*
 *  Primitive

 *  7 types => String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);

const bigNumber = 4152663211n // bigint
console.log(typeof bigNumber);

/*
 *  Reference (Non Primitive) 
 
 *  Array, Object, Function
*/

const heros = ["Shaktiman", "naagraj", "doga"]
console.log(heros);

let myObj = {
    name: "ayush",
    age: 22
}

console.log(myObj);

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof myFunction);
