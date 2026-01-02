function manipulateString (mainString, callback) {
    let manipulatedString = mainString.toUpperCase ()
    callback (manipulatedString)
}

function string (manipulatedString) {
    console.log(`The manipulated string is: ${manipulatedString}`);
}

manipulateString ("i am learning javascript", string)