// Function with Default Parameter

// Function Declaration

function displayMessage (
    messageToBeDisplayed = "I am a proud student of PW Skills"
) {
    console.log(messageToBeDisplayed);
}

// Calling in a function

displayMessage ("I am happy to learn Full Stack Web Development from PW Skills") // This will override the default parameter.

displayMessage ()


function add (x, y) {
    return x + y
}

console.log(add(6, 4));

// Assigning values to the parameter.

function add (a, b = 10) {
    return a - b
}

console.log(add(20)); // 20 automatically assign to "a".

// Value assign from left to right

function abc (p = 10, q) {
    return p + q
}

console.log(abc(5));

// Output will be NaN

function pq (x = 20, y = 5) {
    return x * y
}

console.log(pq(5)); // 5 will assign to the left most element (x)

function ab (x = 5, y = 6) {
    return x * y
}

console.log(ab()); // Do operations as it is