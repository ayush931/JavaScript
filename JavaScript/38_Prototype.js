let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "flash", "superman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ayush = function () {
    console.log("Ayush is present in all object");
}

console.log(myHeros.ayush());
console.log(heroPower.ayush());

Array.prototype.heyAyush = function () {
    console.log("Ayush says Hi");
}

console.log(myHeros.heyAyush());
// console.log(heroPower.heyAyush());  // This will show error.

// Inheritance

const user = {
    name: "top name",
    email: "top@gmail.com"
}

const teacher = {
    makeVideos: true
}

const teachingSupport = {
    isAvailable: false
}

const TaAssistance = {
    makeAssignment: "JS Assignment",
    fulltime: true,
    __proto__:teachingSupport // It will inherit the properties of "teachingSupport"...
}

// teacher.__proto__ = user

Object.setPrototypeOf (teachingSupport, teacher) // It will give "teachingSupport" properties to the "teacher"...

console.log(TaAssistance.isAvailable);


String.prototype.truelenght = function () {
    console.log(`True length is ${this.trim().length}`);
}

"ayush     ".truelenght ()
"aman       ".truelenght ()
