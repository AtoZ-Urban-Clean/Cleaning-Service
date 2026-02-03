/* GLOBAL CART */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateBagCount();
  alert("Service added to Bag");
}

function updateBagCount(){
  const bag = document.querySelector(".bag-btn");
  if(bag){
    bag.innerHTML = `BAG (${cart.length})`;
  }
}

function getCartTotal(){
  return cart.reduce((t,i)=>t + Number(i.price), 0);
}

updateBagCount();
