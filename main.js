//Тут не можна нічого чіпати крім шляхів до стрілок
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

// це код зміни стрілок при відкритті і закритті FAQ блоків
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('details').forEach(details => {
        const icon = details.querySelector('.arrow-icon');

        details.addEventListener('toggle', () => {
            if (details.open) {
                icon.src = 'images/arrow-opened.svg'; //змінити шлях до відкритої стрілки можна тут
            } else {
                icon.src = 'images/arrow.svg'; // змінити шлях до звичайної стрілки тут
            }
        });
    });
});


