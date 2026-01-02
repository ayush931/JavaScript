function extractElements(arr) {
    const [first, second, , , last] = arr;
    return [first, second, last];
}

let str1 = extractElements([1, 2, 3, 4, 5])
console.log(str1);