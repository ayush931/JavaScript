// Sample object with items and their prices in USD
const itemsInUSD = {
    item1: 10,   // 10 USD
    item2: 25,   // 25 USD
    item3: 35    // 35 USD
  };
  
  // Exchange rate: 1 USD to 80 INR

  const exchangeRate = 80;
  
  // Function to convert USD to INR

  const convertToINR = (usdPrice) => usdPrice * exchangeRate;
  
  // Use the map function to create a new object with prices in INR

  const itemsInINR = Object.fromEntries(
    Object.entries(itemsInUSD).map(([itemName, usdPrice]) => [itemName, convertToINR(usdPrice)])
  );
  
  // Display the result
  
  console.log("Items in USD:", itemsInUSD);
  console.log("Items in INR:", itemsInINR);
  