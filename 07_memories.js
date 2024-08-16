// Stack memory -> Primitive datatype 
// Heap memory -> Non primitive datatype

let myYouTubeName = "ayushdotcom" // stack memory -> it will give the copy of the original variable

let anotherName = myYouTubeName

anotherName = "chai aur code"

console.log(myYouTubeName); // unchanged
console.log(anotherName);

let user1 = {  // heap memory -> as it gives the reference to the original variable
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1
user2.email = "user2@gmaial.com"

console.log(user1.email); // changed as it is in heap
console.log(user2.email);

