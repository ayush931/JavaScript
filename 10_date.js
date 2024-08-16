const myDate = new Date()
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toUTCString())
console.log(myDate.toLocaleString())
console.log(typeof myDate);

let createMyDate = new Date(2024, 7, 17)
console.log(createMyDate.toDateString());

let myCreatedDate = new Date(2024, 7, 17, 5, 4)
console.log(myCreatedDate.toLocaleString())

let myOwnDate = new Date("01-14-2024")
console.log(myOwnDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myOwnDate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay())

newDate.toLocaleString("default", {
    weekday: "long",
})