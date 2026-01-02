class User {
    constructor (username, password) {
        this.username = username
        this.password = password
    }
    getPassword () {
        return this.password.replace (/./g, "*")
    }

    setPassword (newPassword) {
        let containsNumber = false
        let containsUpperCase = false
        for (let i = 0; i < newPassword.length; i++) {
            const char = newPassword.charAt (i)
            if (!isNaN (char)) {
                containsNumber = true
            } else if (char === char.toUpperCase()) {
                containsUpperCase = true
            }
        }
        if (newPassword.length >= 8 && containsNumber && containsUpperCase) {
            this.password = newPassword;
        } else {
            console.log("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
}


const user = new User ("Ayush", "Ayush12345")
console.log(user.getPassword());

user.setPassword ("myPassword")
user.setPassword ("MyPassword")
user.setPassword ("Mypassword123")

console.log(user.getPassword());