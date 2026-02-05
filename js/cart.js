/* GLOBAL CART */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateBagCount();
    alert(name + " added to Bag");
}

function updateBagCount() {
    const bags = document.querySelectorAll(".bag-btn");
    
    if (bags.length === 0) return;

    bags.forEach(bag => {
        // Check if there is a specific span for the count (Mobile version)
        const countSpan = bag.querySelector(".bag-count");
        if (countSpan) {
            countSpan.textContent = cart.length;
        } else {
            // Otherwise update the whole text (Desktop version)
            bag.textContent = `BAG (${cart.length})`;
        }
    });
}

window.addToCart = addToCart;
window.updateBagCount = updateBagCount;

document.addEventListener("DOMContentLoaded", updateBagCount);
