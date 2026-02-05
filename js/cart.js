/* ========= GLOBAL CART ========== */

/* Load cart from localStorage */
let cart = JSON.parse(localStorage.getItem("cart"));
if (!Array.isArray(cart)) cart = [];

/* Add to cart */
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateBagCount();
  alert("Service added to Bag");
}

/* Update bag count */
function updateBagCount() {
  const count = cart.length;
  document.querySelectorAll(".bag-count").forEach(el => {
    el.textContent = count;
  });
}

/* Get cart total */
function getCartTotal() {
  return cart.reduce((t, item) => t + Number(item.price), 0);
}

/* Run on page load */
document.addEventListener("DOMContentLoaded", updateBagCount);
