const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const open = document.querySelector(".open");

open.addEventListener("click",()=>{
    close.style.display = "block";
    menu.classList.toggle("active");
})

close.addEventListener("click",()=>{
    close.style.display = "none";
    menu.classList.toggle("active");
})