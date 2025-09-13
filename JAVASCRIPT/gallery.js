// script.js

// Filter logic
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const galleryItems = document.querySelectorAll('.gallery-item');

function filterGallery(category, searchTerm = '') {
  galleryItems.forEach(item => {
    const matchesCategory = category === 'all' || item.dataset.category === category;
    const matchesSearch = item.getAttribute('alt').toLowerCase().includes(searchTerm.toLowerCase());

    if (matchesCategory && matchesSearch) {
      item.style.display = 'block';
      item.style.opacity = '1';
    } else {
      item.style.display = 'none';
      item.style.opacity = '0';
    }
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const category = button.getAttribute('data-filter');
    filterGallery(category, searchInput.value);
  });
});

searchInput.addEventListener('input', () => {
  const activeBtn = document.querySelector('.filter-btn.active');
  const category = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
  filterGallery(category, searchInput.value);
});






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







document.addEventListener('DOMContentLoaded', function() {
  // Create fullscreen viewer elements
  const viewer = document.createElement('div');
  viewer.id = 'image-viewer';
  viewer.style.display = 'none';
  viewer.style.position = 'fixed';
  viewer.style.top = '0';
  viewer.style.left = '0';
  viewer.style.width = '100%';
  viewer.style.height = '100%';
  viewer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  viewer.style.zIndex = '2000';
  viewer.style.justifyContent = 'center';
  viewer.style.alignItems = 'center';
  viewer.style.flexDirection = 'column';
  viewer.style.cursor = 'zoom-out';
  
  const imgElement = document.createElement('img');
  imgElement.style.maxWidth = '90%';
  imgElement.style.maxHeight = '90%';
  imgElement.style.objectFit = 'contain';
  
  const caption = document.createElement('div');
  caption.style.color = 'white';
  caption.style.marginTop = '20px';
  caption.style.fontSize = '1.2rem';
  
  viewer.appendChild(imgElement);
  viewer.appendChild(caption);
  document.body.appendChild(viewer);
  
  // Add click events to gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.style.cursor = 'zoom-in';
    item.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').src;
      const imgAlt = this.querySelector('img').alt;
      
      imgElement.src = imgSrc;
      caption.textContent = imgAlt;
      viewer.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close viewer when clicked
  viewer.addEventListener('click', function() {
    this.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Close with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && viewer.style.display === 'flex') {
      viewer.style.display = 'none';
      document.body.style.overflow = 'auto';
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




