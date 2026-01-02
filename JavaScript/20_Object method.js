let emp = {
    id: 101,
    name: "Ayush",
    age: 24
}

// To extract keys 

 let keys = Object.keys (emp)
 console.log(keys);

//  To extract values

let values = Object.values (emp)
console.log(values);

// To get both keys and values together in form of array

let entries = Object.entries (emp)
console.log(entries);

// To change the property in emp object

emp.id = 200
console.log(emp)

// To stop updating or adding the new property 

Object.freeze (emp)
emp.id = 300
console.log(emp);

// To allow update only but not adding any new key

Object.seal (emp)
emp.id = 240
emp.pay = 3000
console.log(emp);

// Add another key pair value

let o = Object.assign ({x: 20}, emp)
console.log(o);