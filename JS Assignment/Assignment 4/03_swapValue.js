function swapVariables(x, y) {
    [x, y] = [y, x];
    return [x, y];
}

let val1 = swapVariables (5, 10)
console.log(val1);