function findMaxAndMin(arr) {
    return {
      max: Math.max(...arr),
      min: Math.min(...arr)
    };
}

let num = findMaxAndMin ([10, 20, 30, 40, 50, 60])
console.log(num);