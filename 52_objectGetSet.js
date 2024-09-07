const User = {
    _email: "ayush@gmail.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const user = Object.create(User)
console.log(user.email)