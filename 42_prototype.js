let myName = "Ayush    "
// console.log(myName.trueLength)

let myHeros = ["thor", 'spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.ayush = function(){
    console.log(`Ayush is present in all object`)
}

Array.prototype.heyAyush = function(){
    console.log(`ayush says hello`)
}

heroPower.ayush()
myHeros.ayush()

// heroPower.heyAyush()
myHeros.heyAyush()