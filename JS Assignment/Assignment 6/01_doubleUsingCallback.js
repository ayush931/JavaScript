function array (arr, callback) {
    let doubleArr = arr.map (function (num) {
        return callback (num)
    })
    return doubleArr
}

let arr1 = [2, 4, 6, 8, 10]

function callback (num) {
    return num * 2
}

const doubledArray = array (arr1, callback)

console.log(doubledArray);