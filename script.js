/* SLIDER */
let slides=document.querySelectorAll(".slides");
let i=0;

setInterval(()=>{
slides[i].classList.remove("active");
i=(i+1)%slides.length;
slides[i].classList.add("active");
},4000);



/* CART COUNT */
let count=localStorage.getItem("cartCount") || 0;
document.getElementById("count").innerText=count;
