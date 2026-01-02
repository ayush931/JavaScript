const { message } = require("prompt")

function greet (name) {
    return new Promise ((resolve) => {
        let greeting = `Hello, ${name}!`
        resolve (greeting)
    })
}

greet ("Ayush").then ((message) => console.log(message))