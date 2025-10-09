// Menu toggle functionality
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");
const menuIcon = document.getElementById("menu-icon");

let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    menu.classList.add("show");
    overlay.classList.add("show");
    menuIcon.classList.remove("fa-cake-candles");
    menuIcon.classList.add("fa-times");
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
  } else {
    menu.classList.remove("show");
    overlay.classList.remove("show");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-cake-candles");
    // Restore body scroll
    document.body.style.overflow = '';
  }
}

// Event listeners
menuToggle.addEventListener("click", function (e) {
  e.stopPropagation(); // Prevent event from bubbling to document
  toggleMenu();
});

// Close menu when clicking on overlay
overlay.addEventListener("click", function () {
  if (isMenuOpen) {
    toggleMenu();
  }
});

// Close menu when clicking on a link
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  });
});

// Close menu when clicking anywhere else on the document
document.addEventListener("click", function (e) {
  if (isMenuOpen && !menu.contains(e.target) && e.target !== menuToggle) {
    toggleMenu();
  }
});

// Close menu with Escape key
document.addEventListener("keydown", function (e) {
  if (isMenuOpen && e.key === "Escape") {
    toggleMenu();
  }
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});