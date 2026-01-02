let ayushHighScore = 500
let rajuHighScore = 300

console.log(ayushHighScore == rajuHighScore); // == gives the boolean result
console.log(ayushHighScore > rajuHighScore);
console.log(ayushHighScore < rajuHighScore);
console.log(ayushHighScore != rajuHighScore);  // != is not equal to

let amanHighScore = 300
let akashHighScore = "300"
console.log(amanHighScore === akashHighScore); // === compares the data types. 


let value1 = true
let value2 = false
let value3 = true
let value4 = false

console.log(value1 && value2); // Give true if both is true


let isLoggedIn = true
let cardDetails = true
console.log(isLoggedIn && cardDetails);

let gmailAccount = true
let emailAccount = false
let gitHubLogIn = false

console.log(gmailAccount || emailAccount); //Gives true even if one of them is true.
