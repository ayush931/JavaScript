// define a customer object with a name and balance
const customer = {
    name: 'John Doe',
    balance: 1000,
  };
  
  // define deposit function using object method
  function deposit(amount) {
    this.balance += amount;
    console.log(`Deposit of ${amount} successful. New balance is ${this.balance}.`);
  }
  
  // define withdrawal function using object method
  function withdrawal(amount) {
    if (this.balance < amount) {
      console.log(`Insufficient balance. Current balance is ${this.balance}.`);
    } else {
      this.balance -= amount;
      console.log(`Withdrawal of ${amount} successful. New balance is ${this.balance}.`);
    }
  }

  customer.deposit = deposit;
  customer.deposit(500); 

  customer.withdrawal = withdrawal;
  customer.withdrawal(200); 
  
  customer.withdrawal(1500);
  