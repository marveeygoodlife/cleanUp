"use strict";

const toggleBtn = document.querySelector(".mobileMenuToggle");
const ulLinks = document.querySelector(".navLinks");

/* open nav menu */

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    ulLinks.classList.toggle("active");
    console.log("clicked!")
})