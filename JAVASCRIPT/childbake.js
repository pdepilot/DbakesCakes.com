// On-scroll navbar change
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }

