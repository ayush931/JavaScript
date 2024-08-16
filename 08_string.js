const name = "ayush"
const repoCount = 54

console.log(name + repoCount + "value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String ("Ayush")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("y"));

const newGame = gameName.substring(0, 3)
console.log(newGame);

const anotherString = gameName.slice(-8, 3)
console.log(anotherString);

const newString = "  ayush   "
console.log(newString.trim());

const url = "https://ayush.com/ayush%20kumar"
console.log(url.replace("%20", "-"))
console.log(url.includes("ayushk"))

const newStrings = "ayush-kumar-dom"
console.log(newStrings.split("-")); // form an array separate with the "-"
