/* GLOBAL CART */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add item
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateBagCount(); // Update UI immediately
  alert(name + " added to Bag!");
}

// Function to update ALL bag buttons on the page
function updateBagCount() {
  // Use querySelectorAll because there is a Desktop and a Mobile button
  const bagButtons = document.querySelectorAll(".bag-btn");
  
  bagButtons.forEach(btn => {
    // Check if it's the mobile one (usually just says BAG) or desktop (BAG (0))
    // We force the same format for consistency
    btn.textContent = `BAG (${cart.length})`;
  });
}

// Initial update on script load
updateBagCount();
