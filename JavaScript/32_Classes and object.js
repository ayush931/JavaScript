// Class serve as a blueprint for creating objects...

class Prod {
    nam = "Ayush";
    pr = "Bag";
    rate = 105;

    constructor () {
        console.log("Calling the constructor 1...");
    }

    dis () {
        console.log("Display the product");
    } // Member of the class..
}

const a = new Prod ()  // I calls the constructor method..
console.log(a);
a.dis () // Display the class member
class product {
    // Properties -> variable -> data member
    // name;
    // price:
    // rating;

    #rating; // # makes this private. call it using the # before it.
    // Access the rating using # like class...
    name;
    price;
    rating;

    constructor (n, p, r) {
        console.log("calling the constructor");
        this.name = n
        this.price = p
        this.#rating = r
        // return 10; if you are returning primitive then it will be avoided in constructor.
        // return {x: 20, y: 30} if you return non primitive (object) then it will be returned and do not return "this".
        // return this:- same product will be returned...
        // There will be only one custom constructor...
    }

    static custom () {
        console.log("calling a static method");
    } // you can't call static with object method, it is a class property... 

    get ratingSetter () {
        console.log(this.#rating);
    }

    /**
     * @param {number} r
     */
    set ratingGetter (r) {
        if (r < 0) return
        this.#rating = r;
    }

    // behaviour -> functions -> member functions

    display () {
        console.log("this refers to;", this);
        console.log("displaying the current product", this.name, this.price, this.#rating);
    }
}

const p = new product ("Iphone", 100000, 5) // new creates an empty plain object
// In the above piece of code we are calling the constructor method

console.log(p);

p.ratingSetter = 10
p.ratingGetter

p.name = "samsung s23"
console.log(p.name);
console.log(p.rating);

p.display ()
product.custom () // call using the class name.

