// Regular Expression

let pattern = "pw"

let regExOne = new RegExp (pattern)

let flag = "gi"  // "gi" is a flag, g means global and i means case insensitive (doesn't differentiate b/w lower and upper case).

let regExTwo = new RegExp (pattern, flag)

let regExThree = /pw/gi  // "pw" is a regular expression.

const strToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent"

const result = regExThree.test (strToCheck)
console.log(result);

const anotherResult = strToCheck.match (regExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace (regExThree, "p-w")
console.log(oneMoreResult);

const webUrl = "https://pwskills.com/ayush%20kumar"

const useableUrl = webUrl.replace (/%20/, "-") //%20 will be replaced by "-"
console.log(useableUrl);

const webUrl1 = "https://pwskills.com/ayush%30kumar"

const useableUrl1 = webUrl1.replace (/%\d0/, "-")  // \d replace the number only whose end with 0.
console.log(useableUrl1);

const webUrl2 = "https://pwskills.com/ayush%32kumar"

const useableUrl2 = webUrl2.replace (/%\d\d/, "-") // It will the both number.
console.log(useableUrl2);

// Flags of the regEx:-
// 1. "g"lobal
// 2. case "i"nsensitive
// 3. "m"ultiline
// 4. "s"ingle line (dotall)
// 5. "u"nicode
// 6. stick"y"
