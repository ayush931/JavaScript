const score = 400
console.log(score);

const balance = new Number(1000)
console.log(balance);
console.log(typeof balance);


console.log(balance.toString().length);
console.log(balance.toFixed(1)) // gives precise value after the decimal upto the given number

const number = 23.598745
console.log(number.toPrecision(3)); // gives round off number upto the given digit

const anotherNum = 1000000
console.log(anotherNum.toLocaleString('en-IN')) // gives comma in indian value


// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++

console.log(Math.abs(-5)) // absolute
console.log(Math.round(4.836))
console.log(Math.ceil(4.236)) // greater value
console.log(Math.floor(5.698)) // lower value
console.log(Math.min(3, 4, 5, 6, 7, 8))
console.log(Math.max(3, 4, 5, 6, 7, 8))

console.log(Math.random()); // value will give between 0 and 1
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)