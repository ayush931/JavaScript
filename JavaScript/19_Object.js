let obj = {id: 101, name: "Ayush", salary: 10000}

// Add new object

let emp = new Object ()
emp.id = 102
emp.name = "Ankit"
console.log(emp);
console.log(obj);


function Emp (i, n, s) {
    this.id = i
    this.name = n
    this.salary = s
}

const e = new Emp (103, "Anu", 12000)

console.log(e);


// To access the object's key value pair

console.log(emp.id);
console.log(emp['name']);

// TO assign the new key value pair

emp.salary = 13000

console.log(emp);

emp['payroll'] = 2500

console.log(emp);

// To delete the key value pair

delete emp.payroll

console.log(emp);