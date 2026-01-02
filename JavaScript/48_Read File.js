const fs = require("fs")

const buf = new Buffer (1024)

// Read > Open + Read

fs.open ("input.txt", "r+", function(err, fd) {
    if (err) {
        console.log("Error in opening file:", err);
    }
    console.log("File open successfully!");
    
    fs.read (fd, buf, 0, buf.length, 0, function (er, bytes) {
        if (er) {
            console.log("Error in reading file!");
        }
        console.log("Data:", bytes);
        console.log("Data:", buf.slice(0, bytes).toString());

        fs.close (fd, function (err) {
            if (err) {
                console.log("Error in closing file!");
            } else {
                console.log("Success in closing file!");
            }
        })
    })
})