/* =========================
   GLOBAL CART (AtoZ Urban Clean)
========================= */

// Load cart safely
let cart = JSON.parse(localStorage.getItem("cart"));
if (!Array.isArray(cart)) cart = [];

/* =========================
   ADD TO CART
========================= */
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateBagCount();
  alert("Service added to Bag");
}

/* =========================
   UPDATE BAG COUNT (ALL PAGES)
========================= */
function updateBagCount() {
  const count = cart.length;

  // Update ALL bag buttons (desktop + mobile)
  document.querySelectorAll(".bag-count").forEach(el => {
    el.textContent = count;
  });
}

/* =========================
   CART TOTAL
========================= */
function getCartTotal() {
  return cart.reduce((total, item) => total + Number(item.price), 0);
}

/* =========================
   CLEAR CART (OPTIONAL)
========================= */
function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateBagCount();
}

/* =========================
   INIT ON PAGE LOAD
========================= */
document.addEventListener("DOMContentLoaded", () => {
  updateBagCount();
});
