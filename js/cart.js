/* GLOBAL CART */
// Initialize cart from localStorage immediately
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateBagCount();
    alert(name + " added to Bag");
}

function updateBagCount() {
    // Find all bag buttons (Desktop and Mobile)
    const bags = document.querySelectorAll(".bag-btn");
    
    if (bags.length === 0) {
        console.warn("Bag buttons not found in DOM yet.");
        return;
    }

    bags.forEach(bag => {
        bag.textContent = `BAG (${cart.length})`;
    });
}

// Make functions global so they can be called from fetched HTML
window.addToCart = addToCart;
window.updateBagCount = updateBagCount;

// Run once in case the header is already there
document.addEventListener("DOMContentLoaded", updateBagCount);
