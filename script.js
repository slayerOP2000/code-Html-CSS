const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    hamburger.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=> n.
addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    navMenu.classListt.remove("active");
}))