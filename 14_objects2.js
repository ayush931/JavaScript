const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Ayush",
            lastName: "Kumar"
        }
    }
}

console.log(regularUser.fullName)
console.log(regularUser.fullName.userFullName)
console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: 'b'}
const obj2 = {3: "a", 4: 'b'}
const obj3 = {5: "a", 6: 'b'}

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign(obj1, obj2)

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj4 = {...obj1, ...obj2, ...obj3}

console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "hi@gmail.com"
    },
    {
        id: 3,
        email: "hii@gmail.com"
    }
]

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser));  // datatype = array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))