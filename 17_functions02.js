function calculateCartPrice (...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Ayush",
    price: 199
}

function handleObject (anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 600]

function returnSecondValue (getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 700, 600, 900]));
