const fs = require ("fs")

fs.unlink ("input.txt", function (err) {
    if (err) {
        console.log("Error in deleting file!");
    } else {
        console.log("Success in deleting file!");
    }
})