const product = (n, p, r) => {
    this.name = n
    this.price = p
    this.rating = r
}

const p = new product ("iphone", 10000, 5)
console.log(p);

// The theory of this keyword pointing to calling context is not applicable with arrow function.
// It will show the error
