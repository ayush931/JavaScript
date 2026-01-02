const fs = require ("fs")

fs.appendFile ("input.txt", "--Ayush", "utf8", function (err) {
    if (err) {
        console.log("Error in appending file!");
    } else {
        console.log("Success in appending file!");
    }
})