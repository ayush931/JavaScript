class Employee {
    constructor (name, position, salary) {
        this.name = name
        this.position = position
        this.salary = salary
    }
    getSalary () {
        return this.salary;
    }
}

let emp1 = new Employee ("Ayush", "CTO", 10000000)
let emp2 = new Employee ("Ankit", "CFO", 1230000)

console.log(emp1.getSalary());
console.log(emp2.getSalary());