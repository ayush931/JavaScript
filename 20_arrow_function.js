const user = {
    userName: "Ayush",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.userName = "Sam"
user.welcomeMessage()

console.log(this);

function chai () {
    let username = "Ayush"
    console.log(this.username)
}

chai()

const chai1 = () => {
    let username = "Ayush"
    console.log(this)
}

chai1 ()

const addTwos = (num1, num2) => {
    return num1 + num2
}

console.log(addTwos (5, 6))

const add = (num1, num2) => num1 + num2

console.log(add(3, 4))

const obj = (num) => ({username: "Ayush"})
console.log(obj(5))
