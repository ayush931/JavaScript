// Conditions 

let age = 14
if(age >= 18) {
    console.log("You are allowed");
}
// If the first condition failed, then else will run.
else {
    console.log("You are not allowed");
}


let signal = "green"
if (signal == "red") {
    console.log("Red => STOP");
}
else if (signal == "yellow"){
    console.log("Yellow => Go Slow");
}
else if (signal == "green") {
    console.log("Green => Go Fast");
}
else {
    console.log("Invalid");
}


// Switch Case

let user = "Student";
switch(user) {
    case "Admin":
        console.log("He is Admin");
        break;

    case "Student":
        console.log("I am a Student");
        break;

    case "Mentor":
        console.log("He is Mentor");
        break;

        default:
            console.log("He is a Default");
}