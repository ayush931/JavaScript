function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }

  
  let celsiusTemp = 25;
let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(fahrenheitTemp);
