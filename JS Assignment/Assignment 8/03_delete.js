const fs = require ("fs")

fs.unlink("nodejs_architecture.txt", (err) => {
    if (err) {
        console.log("Error in deleting file.");
    } else {
        console.log("File Deleted Successfully.");
    }
})