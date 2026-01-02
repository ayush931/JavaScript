let person = {
    firstName: "Ayush",
    lastName: "Kumar",
    age: 21
}

function ageInDays (persons, callback) {
    let fullName = `${persons.firstName} ${persons.lastName}`
    let ageInDays = persons.age * 365
    callback (fullName, ageInDays)
}

function result (fullName, ageInDays) {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}`);
}

ageInDays (person, result)