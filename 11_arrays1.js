const myArray = [0, 1, 2, 3, 4, 5, true, "ayush"]
console.log(myArray[2])

const myArr = new Array(1, 2, 3, 4)
const myArr2 = new Array(7, 8, 9, 6)

// Array methods

myArr.push(6) // add the value
myArr.push(7)
myArr.pop() // remove the last element
myArr.unshift(0) // insert at 0th index
myArr.shift() // remove the 0th index element
console.log(typeof myArr.includes(5)) // false
console.log(myArr.indexOf(9))

const newArr = myArr.join()
console.log(newArr);
console.log(myArr);

// slice, splice

console.log("A ", myArr)
const my1 = myArr.slice(1, 3)
console.log(my1)
console.log("B ", myArr)

const my2 = myArr.splice(1, 3)
console.log("C ", myArr)
console.log(my2)