function product (n, p, r) {
    this.name = n
    this.price = p
    this.rating = r
    // return {x: 10}
}

const p = new product ("macbook", 150000, 5)
console.log(p);

let x = {
    p: product
}

x.p ("airpods", 2000, 5)
console.log(x);

/**
 * 1. this keyword in js is different than other language.
 * 2. this keyword refers to the context from where we called. 
 * 
 * in this function constructor also 
 * - if you return primitive it is ignored and we return the object referred by this.
 * - if you return a custom object, then the custom object is returned. 
 * - if you don't return anything, then object referred by this is returned.
 */
