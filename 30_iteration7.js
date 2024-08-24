const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = myNumbers.map((num) => num + 10)
console.log(newNums)

const newNum = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)
console.log(newNum)

const nums = [1, 2, 3]

const myTotal = nums.reduce(function (acc, curval) {
    console.log(`acc: ${acc} and curval: ${curval}`)
    return acc + curval
}, 0)

console.log(myTotal)

const myTotals = nums.reduce((acc, curr) => acc + curr, 0)
console.log(myTotals)

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "PY Course",
        price: 999
    },
    {
        itemName: "Mobile development course",
        price: 5999
    },
    {
        itemName: "Data science",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)