function calculateBill(dishCosts, numPeople) {
    const totalCost = dishCosts.reduce((acc, curr) => acc + curr);
    const perPerson = totalCost / numPeople;
    
    return { totalBill: totalCost, perPerson: perPerson };
  }

  
  const dishCosts = [10, 15, 20]; 
const numPeople = 5; 

const bill = calculateBill(dishCosts, numPeople);

console.log(`Total bill: Rs. ${bill.totalBill}/-`);
console.log(`Amount per person: Rs. ${bill.perPerson}/-`);
