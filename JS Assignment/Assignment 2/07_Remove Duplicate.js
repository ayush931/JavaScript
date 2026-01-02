const cart = []; 

function addToCart(item) {
  const index = cart.findIndex((cartItem) => cartItem.name === item.name);

  if (index !== -1) {
    cart[index].quantity += 1;
  
} 
  else {
    cart.push({...item, quantity: 1});
  }
}

const item1 = { name: "Shoes", price: 50 };
const item2 = { name: "T-shirt", price: 20 };

addToCart(item1);
console.log(cart); 

addToCart(item2);
console.log(cart);

addToCart(item1);
console.log(cart);
