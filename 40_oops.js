const user = {
    username: "Ayush",
    loginCount: 10,
    signedIn: true,
    getUserDetails: function(){
        console.log("Got user details form database")
        console.log(`username: ${this.username}`)
        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserDetails())

console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("Ayush", 15, true)
const userTwo = new User("Aman", 11, false)
console.log(userOne)
console.log(userTwo)
console.log(userOne.constructor)