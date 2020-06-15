//Hamburger control
const hamburgerBtn = document.querySelector(".hamburger");
//Upon click, toggle the active class on the hamburger button
hamburgerBtn.addEventListener("click", e => {
    hamburgerBtn.classList.toggle("active");
});