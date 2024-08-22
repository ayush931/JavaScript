// if

const isUserLoggedIn = true
const temperature = 41

if (temperature === 41) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50")
}

console.log("Executed")

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`)
}

const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");

if (balance < 500) {
    console.log("less than")
} else if (balance < 750) {
    console.log("less than 750")
} else if (balance < 900) {
    console.log("less than 900")
} else {
    console.log("less than 1200")
}

const userLoggedIn = true
const debitCard = true 
const logginFromGoogle = false
const logginFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses")
}

if (logginFromEmail || logginFromGoogle) {
    console.log("User logged in")
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++ switch case ++++++++++++++++++++++++++++++++++++++++++++++++++++


const month = 3

switch (month) {
    case 1:
        console.log("January")
        break;

    case 2:
        console.log("February")
        break;

    case 3:
        console.log("March")
        break;

    case 4:
        console.log("April")
        break;

    case 5:
        console.log("May")
        break;

    case 6:
        console.log("June")
        break;

    case 7:
        console.log("Julu")
        break;

    case 8:
        console.log("August")
        break;

    case 9:
        console.log("September")
        break;

    case 10:
        console.log("October")
        break;

    case 11:
        console.log("November")
        break;

    default:
        console.log("December")
        break;
}