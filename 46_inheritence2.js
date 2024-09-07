class User {
    constructor(userName) {
        this.userName = userName
    }
    logMe(){
        console.log(`USERNAME is ${this.userName}`)
    }
}

class Teacher extends User {
    constructor(userName, email, password) {
        super(userName)
        this.email = email
        this.password = password
    }
    addCourses(){
        console.log(`A new course was added by ${this.userName}`)
    }
}

const user = new Teacher("ayush", "ayush@gmail.com", "123")
user.addCourses()

const user1 = new User("aman")
user1.logMe()

console.log(user === user1)
console.log(user instanceof Teacher)