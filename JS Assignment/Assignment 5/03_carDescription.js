class car {
    constructor (comapny, model, year) {
        this.comapny = comapny;
        this.model = model;
        this.year = year;
    }

    getDescription () {
        return `This is a ${this.comapny} ${this.model} ${this.year}`
    }
}

const myCar = new car ("Mercedes", "Benz", 2005)
console.log(myCar.getDescription());