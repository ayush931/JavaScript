class User {
    constructor(userName, email, password){
        this.userName = userName
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

const user = new User("ayush", "ayush@gmail.com", "123")

console.log(user.encryptPassword())
console.log(user.changeUserName())

// Behind the scene

function User1(userName, email, password){
    this.userName = userName
    this.email = email
    this.password = password
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User1.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

const user1 = new User1("ayush", "ayush123@gmail.com", "123") 

console.log(user1.encryptPassword())
console.log(user1.changeUserName())
