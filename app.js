"use strict";
const toggleBtn = document.querySelector("#toggleBtn");
const ulLinks = document.querySelector("#ulLinks");

toggleBtn.addEventListener("click", () => {
    ulLinks.classList.toggle("active");
    toggleBtn.classList.toggle("active");
    console.log("clicked")
});
  