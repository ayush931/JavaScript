// singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Ayush",
    "full name": "Ayush Kumar",
    [mySym]: "myKey1", // symbol
    age: 20,
    location: "Patna",
    email: "ayush@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])

console.log(jsUser["full name"])
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])

jsUser.email = 'ayush@yahoo.com'
// Object.freeze(jsUser); // freeze the object

jsUser.email = "ayush@microsoft.com"
console.log(jsUser)

jsUser.greeting = function () {
    console.log("Hello JS users");
}
jsUser.greetingTwo = function () {
    console.log(`Hello JS users, ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())