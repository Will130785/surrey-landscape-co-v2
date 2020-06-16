//Hamburger control
const hamburgerBtn = document.querySelector(".hamburger");
//Link control
const navbar = document.querySelector(".navbar");
const links = document.querySelector(".navbar__links");
const linkItem = document.querySelector(".navbar__nav")
let linkStatus = 0;
//Upon click, toggle the active class on the hamburger button and toggle dropdown menu
hamburgerBtn.addEventListener("click", e => {
    hamburgerBtn.classList.toggle("active");

    if(linkStatus === 0) {
        links.style.overflow = "visible";
        links.style.opacity = "1";
        navbar.style.height = "35rem";
        linkStatus = 1;
    } else if(linkStatus === 1) {
        navbar.style.height = "10rem";
        links.style.opacity = "0";
        links.style.overflow = "hidden";
        linkStatus = 0;
    }

});

window.addEventListener("resize", e => {
    if(window.innerWidth > 800) {
        links.style.opacity = "1";
        navbar.style.height = "10rem";
        hamburgerBtn.classList.remove("active");
        linkStatus = 0;
    }
});