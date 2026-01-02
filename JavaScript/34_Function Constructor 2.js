const product = function (n, p, r) {
    this.name = n
    this.price = p
    this.rating = r
}

const p = new product ("iphone", 10000, 5)
console.log(p);