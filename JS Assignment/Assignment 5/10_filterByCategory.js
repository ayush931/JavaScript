function filterByCategory (product) {
    return function (category) {
        return product.filter (function (product) {
            return product.category === category
        })
    }
}

let product = [
    {name: "Shirt", category: "Clothing"},
    {name: "Trouser", category: "Clothing"},
    {name: "Television", category: "Electronics"},
    {name: "Glasses", category: "Wearable"}
]

let clothingProduct = filterByCategory (product) ("Clothing")

console.log(clothingProduct);