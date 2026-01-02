let emptySet = new Set () // Set is an object..

console.log(emptySet.size); // Will give size of the set..

let myArr = [1, 2, 3, 8, 9, 6 , 2, 3]
let newS = new Set (myArr)
console.log(newS); // It will give the set of element of given array...

let myArray = [1, 2, 3, 4, 3, 2] // Doesn't show the repeated value.
let newSet = new Set ([...myArray]) // It will spread the array because of spread operator

console.log(newSet);

newSet.add (2) // Did not add the repeated value...
newSet.add (9) 
newSet.clear ()  // Clear all the values..
console.log(newSet);

console.log(newSet.has(9)); // It gives that the element is exsist in array or not in boolean result...

// Set Difference

function setDifference (setA, setB) {
    return new Set ([...setA].filter (Element => !setB.has (Element)))
}

s1 = new Set ([1, 2, 3, 4, 5, 6, 7, 4, 5, 2, 1]) // Create a new set
s2 = new Set ([2, 3, 4, 5, 6, 8, 9, "Ayush"])

function setDiff (s1, s2) {
    return new Set ([...s1].filter (el => !s2.has (el)))
}

let diff = setDiff (s1, s2)
console.log(diff);  // Remove the element from set s1 same as in s2 and give a new set of remaining element...

// Different ways to create new set...

const myS1 = new Set ()

myS1.add (1)
myS1.add (2)
myS1.add (3)
myS1.add ("Ayush")
const o = {a: 1, b: 2}
myS1.add (o)

console.log(myS1);

// Map

// Create a new map

let map = new Map ()
console.log(map.size);

let arr = [
    [1, "Mithun", true],
    [2, "Ayush", false],
    [3, "Ankit", true]
]

let ad = arr.map ((arrayItem) => map.set (arrayItem[1], arrayItem[2]))


console.log(ad);
