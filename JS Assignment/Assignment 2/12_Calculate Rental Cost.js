function calculateRentalCost(days, carType) {
    let rentalCost;
    switch (carType) {
      case 'Economy':
        rentalCost = 4000;
        break;
      case 'Midsize':
        rentalCost = 10000;
        break;
      case 'Luxury':
        rentalCost = 20000;
        break;
      default:
        throw new Error('Invalid car type');
    }
    return rentalCost * days;
  }

  const days = 3;
const carType = 'Midsize';
const rentalCost = calculateRentalCost(days, carType);
console.log(`Total rental cost: Rs. ${rentalCost}/-`);

  