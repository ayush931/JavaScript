// Loops
// do while, while, for

// for

for (let i = 0; i< 5; i++) {
    console.log(i);
}

// while (init, condition, increment/decrement)

let i = 0
while (i < 5) {
    console.log(i);
    i++;
}

// Do while (run atleast one time)

let x = 0
do {
    console.log("Hello World");
    x++;
} while (x < 5)

let number = 5

for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

let num = 10

for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
