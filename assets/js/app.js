const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const open = document.querySelector(".open");
const cardBanner = document.querySelector(".banner-card");

open.addEventListener("click",()=>{
    close.style.display = "block";
    cardBanner.style.display = "none";
    menu.classList.toggle("active");
})

close.addEventListener("click",()=>{
    close.style.display = "none";
    cardBanner.style.display = "block";
    menu.classList.toggle("active");
})