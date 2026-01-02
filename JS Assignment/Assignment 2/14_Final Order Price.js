const calculateTotalCost = (cartItems) => {
    let totalCost = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const { unitPrice, quantity } = cartItems[i];
      totalCost += unitPrice * quantity;
    }
    return totalCost;
  };
  