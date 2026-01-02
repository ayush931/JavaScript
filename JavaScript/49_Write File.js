const fs = require("fs")

// Async method

fs.writeFile("input.txt", "PW Skills", function(err) {
    if (err) {
        console.log("Error in writing files!");
    } else {
        console.log("Success in writing file!");
    }
})