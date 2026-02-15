/* ========= GLOBAL CART ========== */

/* Load cart from localStorage */
let cart = JSON.parse(localStorage.getItem("cart"));
if (!Array.isArray(cart)) cart = [];

/* ========= CART SYSTEM ========= */

function getCart() {
  const c = JSON.parse(localStorage.getItem("cart"));
  return Array.isArray(c) ? c : [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
  const cart = getCart();
  cart.push({ name, price });
  saveCart(cart);
  updateBagCount();
}

function updateBagCount() {
  const cart = getCart();
  document.querySelectorAll(".bag-count").forEach(el => {
    el.textContent = cart.length;
  });
}

function getCartTotal() {
  return getCart().reduce((t, i) => t + Number(i.price), 0);
}


/* Run on page load */
document.addEventListener("DOMContentLoaded", updateBagCount);
