function colorchange (color1, color2) {
    let result;
    switch (color1) {
        case "red":
    switch (color2) {
        case "blue":
            result = "purple"
        break;
        case "yellow":
            result = "orange"
        break;
        default:
            console.log("Invalid color combination");
    }
    break;
    case "blue":
    switch (color2) {
        case "red":
            result = "purple"
        break;
        case "yellow":
            result = "green"
        break;
        default:
            console.log("invalid color combinaton");
    }
    break;
    case "yellow":
    switch (color2) {
        case "red":
            result = "orange"
        break;
        case "blue":
            result = "green"
        break;
        default:
            console.log("Invalid color combination");
    }
    break;
    default:
        console.log("Invalid color combination");
    }
    console.log(result);
}

colorchange ("red", "blue")
colorchange ("red", "yellow")
colorchange ("blue", "yellow")
colorchange ("red", "green")