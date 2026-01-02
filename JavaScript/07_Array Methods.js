let arr = [1, 2, 3, 4, 5]

// Add element at last index
arr.push(6, 7)

console.log(arr);

// To remove last element 
arr.pop();
console.log(arr);

// Remove the 0th index element
arr.shift()
console.log(arr);

// To add element at starting index
arr.unshift(8)
console.log(arr);

// to return the element that has been removed.
let f = arr.shift()
console.log(f);
console.log(arr);

// To add/concat all the arrays
let a1 = [1, 2, 3, 4, 5]
let a2 = [3, 4, 5]
let a3 = a1.concat(a2)
console.log(a1, a2, a3);

// To join or club all the array
let s = a3.join(" @ ")  // Add character between two element
console.log(s);


// To reverse the array
a3.reverse()
console.log(a3);

// To find the index of an array
console.log(a3.indexOf(3));

// If the element doesn't exists then it show -1
console.log(a3.indexOf(50));

let arr1 = [1, 2, 3, 4, 5, 6]
console.log(arr1.slice(2, 5)); // from 2nd index to 5 - 1 index

// To add element in any index
arr1.splice(2, 0, 11)
/**
 *  2 denotes in which index the new element will insert.
 * 0 denotes the number of element deleted.
 * 11 denotes the new element that will be inserted.
 */
 
console.log(arr1);

// To find the index of the array

let arr3 = [1, 2, 3, 4, 5, 6]
console.log(arr3[4]);
console.log(arr3["Ayush"]); // It will give undefined.

let arr6 = [1, 2, 3, 4, 5, 6]
console.log(arr6.indexOf(5));
console.log(arr6.indexOf("ak")); // It will give -1.

let a = [1, 2, 3, 4, "Ayush", true]
let b = a.splice(1, 2, 9); // Remove 2 elements starting from index 1 and add 9 in their place.
console.log(a); // Output: [1, 9, 4, "Ayush", true]
console.log(b); // Output: [2, 3]  this shows the removed element from a
