function greet () {
    console.log("Hi There");
    console.log("How are you");
}

// To call the function
greet ()

function sqr (x) { // x -> parameter
    console.log(x * x);
}

sqr (8) // 8 -> argument

// to use the function in many places, we should use return

function sq (a) {
    return a + a
}

let s = sq (9)
console.log(s);