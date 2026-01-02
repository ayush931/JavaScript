const { log } = require("console");
const fs = require("fs")

// Asynchoronous way to read file

console.log("READ START");

fs.readFile("input.txt", function(err, data) {
    if (err) {
        console.log("Error:", err);
        return err
    }
    console.log("Data:", data.toString());
    console.log("READ END");
    return data
})

console.log("OTHER STUFF");


// Synchronous way to read file

console.log("READ START");

var data = fs.readFileSync("input.txt")
console.log("Data:", data.toString());
console.log("READ END");
console.log("OTHER STUFF");

