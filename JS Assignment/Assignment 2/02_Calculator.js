function calculator (num1, num2,operator) {
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break;
        default:
        console.log("Invalid Operator");
        return;
    }
    console.log(result);
}

calculator (5, 3, "+")
calculator (5, 3, "-")
calculator (5, 3, "*")
calculator (50, 5, "/")