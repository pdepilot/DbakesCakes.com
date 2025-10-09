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



