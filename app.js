"use strict";
const toggleBtn = document.querySelector(".mobileMenuToggle");
const ulLinks = document.querySelector(".navLinks");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    ulLinks.classList.toggle("active");
})