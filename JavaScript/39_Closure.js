function on () {
    let point = 0
    console.log(point);
}

on ()
// console.log(point);  It will show error because point defined in a function, it's not a global scope...

let score = 9
function one () {
    let score = 0
    console.log(score);
}

console.log(score);

function two () {
    let score = 3
    console.log(score);
}

function three () {
    console.log(score); // It will referr to the global score...
}

one ()
two ()
three ()
console.log(score);

function outerFunc () {
    let outerVa = "I am scope 1"
    function innFunc () {
        console.log(outerVa); // It has the access to the outer variable...
    }
    innFunc ()
}

outerFunc ()

function outerFun () {
    let outerVar = "I am at scope level 1"
    function innerFun () {
        let innerVal = "I am at scope level 2"
        console.log(outerVar);
    }
    // console.log(innerVal); // Outer value cannot have the access to the inner values...
    innerFun ()
}
outerFun ()

const myGlobalValue = 0
function func () {
    const val1 = 1
    console.log(myGlobalValue);

    function innerOfFunc () {
        const val2 = 2
        console.log(val2, val1, myGlobalValue);

        function innerOfInnerFunc () {
            const val3 = 3
            console.log(val3, val2, val1, myGlobalValue);
        }
        innerOfInnerFunc ()
    }
    innerOfFunc ()
}
func ()

// Closure

function superFun () {
    let outerValue = "I am outer"
    function minorFun () {
        console.log(outerValue);
    }
    minorFun ()
}
superFun ()

const errorMessage = "File not Found"

setTimeout (function callback () {
    console.log(errorMessage);
}, 1000)  // Inner function has the memory of outer function...

let pageCount = 0
const items = [2, 4, 5, 7, 8]
items.forEach (function iterator (num) {
    pageCount++
    console.log(num);
})

console.log("Page Count", pageCount);