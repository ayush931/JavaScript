const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  };

  
  const originalPrice = 100;
const discountedPrice = 80;
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(discountPercentage); // Output: "20.00"
