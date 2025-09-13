function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
}

// On-scroll navbar effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('nav-menu');
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    });
});


// Scroll To Top Button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};




// WhatsApp link
const whatsappNumber = "2349064296917"; // Replace with your WhatsApp number (no '+' sign)
const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  message
)}`;
window.open(whatsappURL, "_blank");





// Simple animations
document.addEventListener("DOMContentLoaded", function () {
  // Award card hover effects
  const awardCards = document.querySelectorAll(".award-card");
  awardCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".award-icon");
      icon.style.transform = "rotate(15deg) scale(1.2)";
    });

    card.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".award-icon");
      icon.style.transform = "";
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});








// Image Modal Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get all team member images
  const images = document.querySelectorAll(".member-image");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("expandedImage");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  // Click event for each image
  images.forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
  });

  // Close modal
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Close when clicking outside image
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Close with ESC key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });

  // Team member hover effects
  const teamMembers = document.querySelectorAll(".team-member");
  teamMembers.forEach((member) => {
    member.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
      this.style.boxShadow = "0 15px 30px rgba(210, 60, 110, 0.2)";

      // Animate tool icons
      const icons = this.querySelectorAll(".tool-icon");
      icons.forEach((icon) => {
        icon.style.transform = "rotate(15deg) scale(1.2)";
      });
    });

    member.addEventListener("mouseleave", function () {
      this.style.transform = "";
      this.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";

      // Reset tool icons
      const icons = this.querySelectorAll(".tool-icon");
      icons.forEach((icon) => {
        icon.style.transform = "";
      });
    });
  });
});
