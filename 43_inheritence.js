const Teacher = {
    makeVideo: true
}

const User = {
    name: "ayush",
    email: "ayush@gmail.com"
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "hello       "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()

"ayush".trueLength()
"hitesh     ".trueLength()