//Тут не можна нічого чіпати
//це код для реалізації відкриття та закриття меню для менших екранів (планшетів/телефонів)
let openBtn = document.querySelector(".menu-icon");
let closeBtn = document.querySelector(".close-icon");

let menu = document.querySelector(".navbar-menu");

openBtn.addEventListener("click",()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
});

closeBtn.addEventListener("click",()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
});