function sayMyName () {
    console.log("A");
    console.log("y");
    console.log("y");
    console.log("s");
    console.log("h")
}

// sayMyName()

function addTwoNumbers (number1, number2) {
    // console.log(number1 + number2)
    // let result  = number1 + number2
    // return result
    return number1 + number2
    console.log("Hitesh");
}

addTwoNumbers(3, 4) // 7
addTwoNumbers(3, "4") // 34
addTwoNumbers(3, "a") // 3a
addTwoNumbers(3, null) // 3

const result = addTwoNumbers(3, 5)
console.log("Result:", result); // undefined

function loginUserMessage (username) {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

let user = loginUserMessage("Ayush")
console.log(user);

console.log(loginUserMessage());

