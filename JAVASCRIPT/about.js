// Image Modal Functionality
function openModal() {
  document.getElementById("ceoModal").style.display = "block";
  document.getElementById("expandedCeoImg").src =
    document.getElementById("ceoImg").src;
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

function closeModal() {
  document.getElementById("ceoModal").style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close when clicking outside image
window.onclick = function (event) {
  const modal = document.getElementById("ceoModal");
  if (event.target == modal) {
    closeModal();
  }
};

// Close with ESC key
document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    closeModal();
  }
};




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

