const siteHeader = document.getElementById("site-header--layout");
const primaryNav = document.getElementById("primary-nav");
const menuBtn = document.getElementById("menu-btn");

// Hamburger Menu
const navToggle = () => {
  primaryNav.classList.toggle("active");
};

menuBtn.addEventListener("click", navToggle);
