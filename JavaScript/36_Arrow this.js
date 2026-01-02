let obje = {
    a: 20,
    funct () {
        console.log(this.a);
    }
}

obje.funct ()

let objj = {
    b: 20,
    functi: () => {
        console.log(this.b);
    }
}

objj.functi ()

// It will give undefined because of arrow function...


let obj = {
    x: 10,
    fun () {
        y = {
            gun: () => {
                console.log(this.x);
            }
        }
        y.gun ()
    }
}

obj.fun ()

// It will give result "fun" is a normal function and arrow function is inside of normal one....

// "this" does not exists in arrow function...