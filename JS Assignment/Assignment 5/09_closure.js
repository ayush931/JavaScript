function checkNumber (number) {
    return function (num) {
        return number.includes(num)
    }
}

let arr1 = [1, 2, 3, 4, 5, 6, 7]
let checkNum = checkNumber (arr1)

console.log(checkNum (4));
console.log(checkNum (9));