// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("show");
}

// On-scroll navbar effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("nav-menu");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.getElementById("nav-menu");
  const menuToggle = document.querySelector(".menu-toggle");

  if (
    menu.classList.contains("show") &&
    !menu.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    menu.classList.remove("show");
  }
});

// FIXED: Scroll to Top Functionality
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", function () {
  // Show/hide scroll to top button
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }

  // Trigger reveal animations
  revealOnScroll();
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// NEW: Reveal on Scroll Functionality
function revealOnScroll() {
  const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
  );

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

// Initial check on page load
window.addEventListener("load", revealOnScroll);
