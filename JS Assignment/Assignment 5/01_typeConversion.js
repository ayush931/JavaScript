
function convertTONumber (str) {
    try {
        let num = Number (str)
        if (Number.isNaN(num)) {
            throw new Error ("Invalid Number")
        }
        return num
    } catch (err) {
        return err.message
    }
}

console.log(convertTONumber ("12345"));
console.log(convertTONumber ("abcde"));