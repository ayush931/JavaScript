function one(){
    const userName = "Ayush"
    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website)
    two()
}
one()

if (true) {
    const username = "Ayush"
    if (username === "Ayush") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website)
}
// console.log(username)

console.log(addOne(5))

function addOne (num) {
    return num + 1
}

// console.log(addTwo(5))

const addTwo = function (num) {
    return num + 2
}

