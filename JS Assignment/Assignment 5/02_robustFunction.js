function getPerson (person) {
    try {
        if (typeof person !== "object" || !person.name || !person.age) {
            throw new Error ("Invalid parameter")
        }
        return `Name: ${person.name}, Age: ${person.age}`
    } catch (err) {
        return err.message
    }
}

console.log(getPerson ({name: "Ayush", age: 22}));
console.log(getPerson ({name: "Ankit"}));