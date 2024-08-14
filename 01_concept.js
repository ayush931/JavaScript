console.log("Ayush");

// Variables and Constants

const accountId = 70704 // can't change the value
let accountEmail = "ayush931@gmail.com"
var accountPassword = "12345" // doesn't work on the scope

let accountState

/*
*   Prefer not to use var because of issue in block scope and functional scope.
*/

accountCity = "Patna"

//accountId = 102  // (can't change as it is initiated with const)

accountEmail = "hc@gmail.com"
accountPassword = 2121
accountCity = "Delhi"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
