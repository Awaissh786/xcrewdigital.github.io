// -----------------------------------------------Navbar-Javascript--------------------------------------------

const mobile_nav_bar = document.querySelector(".mobile-navbar-icon");

const header = document.getElementById("header")

mobile_nav_bar.addEventListener('click', ()=>{
header.classList.toggle("showmenu");
})

// ---------------------------------------------BOX Image Redirection_----------------------------------
let image_box = document.querySelector(".image-box");
image_box.addEventListener('click', () => {
    location.href = "https://xcrewdigital.com/digital-marketing/";
})

let box_2 = document.querySelector("#box-2");
box_2.addEventListener('click', () => {
    location.href = "https://xcrewdigital.com/software-development/";
})
let box_3 = document.querySelector("#box-3");
box_3.addEventListener('click', () => {
    location.href = "https://xcrewdigital.com/software-development/";
})



