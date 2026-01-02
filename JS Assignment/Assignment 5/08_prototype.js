function student (name) {
    this.name = name
}

student.prototype.printDetails = function () {
    console.log(`Hello, my name is ${this.name}`);
}

let student1 = new student ("Ayush")
console.log(student1.printDetails());