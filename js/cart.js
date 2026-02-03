let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToBag(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));

  updateBagCount();
  alert(name + " added to bag");
}

function updateBagCount(){
  const bag = document.querySelector(".bag-btn");
  if(bag){
    bag.innerText = "BAG (" + cart.length + ")";
  }
}

updateBagCount();
