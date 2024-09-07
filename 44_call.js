function setUsername(username){
    // complex db call
    this.username = username
    console.log("Called")
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const user = new createUser("ayush", "ayush@google.com", "123")
console.log(user)