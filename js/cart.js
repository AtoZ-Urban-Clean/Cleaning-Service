/* GLOBAL CART */
let cart = JSON.parse(localStorage.getItem("cart"));
if (!Array.isArray(cart)) cart = [];

/* ADD TO CART */
function addToCart(name, price){
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateBagCount();
  alert("Service added to Bag");
}

/* UPDATE BAG COUNT – ALL PLACES */
function updateBagCount(){
  const bags = document.querySelectorAll(".bag-btn");
  const count = cart.length;

  bags.forEach(bag => {
    bag.textContent = `BAG (${count})`;
  });
}

/* TOTAL */
function getCartTotal(){
  return cart.reduce((t,i)=>t + Number(i.price), 0);
}

/* RUN ON PAGE LOAD */
document.addEventListener("DOMContentLoaded", updateBagCount);
