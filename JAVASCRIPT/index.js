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

// PRE-LOADER

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

const lightboxLinks = document.querySelectorAll('.cake-img a');
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

lightboxLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    lightboxImg.src = this.href;
    lightboxCaption.textContent = this.getAttribute('data-caption') || '';
    lightboxModal.style.display = 'flex';
  });
});

function closeLightbox() {
  lightboxModal.style.display = 'none';
  lightboxImg.src = '';
  lightboxCaption.textContent = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    closeLightbox();
  }
});








const form = document.getElementById("reviewForm");
const showFormBtn = document.getElementById("showFormBtn");
const cancelBtn = document.getElementById("cancelBtn");
const slider = document.getElementById("reviewSlider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const adminPanel = document.getElementById("adminPanel");
const adminLogin = document.getElementById("adminLogin");
const adminContent = document.getElementById("adminContent");
const adminLoginBtn = document.getElementById("adminLoginBtn");
const adminPasswordInput = document.getElementById("adminPassword");
const adminReviewsDiv = document.getElementById("adminReviews");

const ADMIN_PASS = "admin123";
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
let currentIndex = 0;

// Show/Hide Form
if (showFormBtn && form && cancelBtn) {
  showFormBtn.addEventListener("click", () => {
    form.classList.remove("hidden");
  });

  cancelBtn.addEventListener("click", () => {
    form.classList.add("hidden");
  });
}

// Submit Review
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const text = document.getElementById("text").value.trim();
    const rating = document.getElementById("rating").value;
    const imageFile = document.getElementById("image").files[0];

    if (!name || !text || !rating || !imageFile) {
      alert("Please fill all fields.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const newReview = {
        name,
        text,
        rating,
        image: reader.result,
        approved: false
      };

      reviews.push(newReview);
      localStorage.setItem("reviews", JSON.stringify(reviews));
      alert("Review submitted. Pending approval.");
      form.reset();
      form.classList.add("hidden");
      renderSlider();
    };

    reader.readAsDataURL(imageFile);
  });
}

// Render Slider with dynamic animations
function renderSlider() {
  const approved = reviews.filter(r => r.approved);
  if (!slider) return;

  if (approved.length === 0) {
    slider.innerHTML = "<p>No approved reviews yet.</p>";
    return;
  }

  const slideInCard = ["slide-in-left", "slide-in-right", "slide-in-top", "slide-in-bottom"];
  const slideInText = ["text-in-left", "text-in-right", "text-in-top", "text-in-bottom"];

  const r = approved[currentIndex];
  const cardAnim = slideInCard[Math.floor(Math.random() * slideInCard.length)];
  const textAnim = slideInText[Math.floor(Math.random() * slideInText.length)];

  slider.innerHTML = `
    <div class="review-card ${cardAnim}">
      <img src="${r.image}" alt="${r.name}" />
      <div class="review-text ${textAnim}">
        <h3>${r.name}</h3>
        <p>"${r.text}"</p>
        <div class="star">${'★'.repeat(r.rating)}</div>
      </div>
    </div>
  `;
}

// Nav Buttons
if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    const total = reviews.filter(r => r.approved).length;
    if (total === 0) return;
    currentIndex = (currentIndex - 1 + total) % total;
    renderSlider();
  });

  nextBtn.addEventListener("click", () => {
    const total = reviews.filter(r => r.approved).length;
    if (total === 0) return;
    currentIndex = (currentIndex + 1) % total;
    renderSlider();
  });
}

// Show Admin Panel
if (window.location.search.includes("admin")) {
  adminPanel?.classList.remove("hidden");
}

// Admin Login
if (adminLoginBtn) {
  adminLoginBtn.addEventListener("click", () => {
    if (adminPasswordInput.value === ADMIN_PASS) {
      adminLogin.classList.add("hidden");
      adminContent.classList.remove("hidden");
      renderAdmin();
    } else {
      alert("Incorrect password.");
    }
  });
}

// Render Admin Reviews
function renderAdmin() {
  if (!adminReviewsDiv) return;

  if (reviews.length === 0) {
    adminReviewsDiv.innerHTML = "<p>No reviews submitted yet.</p>";
    return;
  }

  adminReviewsDiv.innerHTML = reviews.map((r, i) => `
    <div class="review-card">
      <img src="${r.image}" alt="reviewer" />
      <div class="review-text">
        <h3>${r.name}</h3>
        <p>"${r.text}"</p>
        <div class="star">${'★'.repeat(r.rating)}</div>
        <p>Status: ${r.approved ? "✅ Approved" : "🕒 Pending"}</p>
        <button onclick="approveReview(${i})">Approve</button>
        <button onclick="editReview(${i})">Edit</button>
        <button onclick="deleteReview(${i})">Delete</button>
      </div>
    </div>
  `).join("");
}

// Admin Actions
window.approveReview = function (i) {
  reviews[i].approved = true;
  localStorage.setItem("reviews", JSON.stringify(reviews));
  renderAdmin();
  renderSlider();
};

window.editReview = function (i) {
  const newText = prompt("Edit review text:", reviews[i].text);
  if (newText !== null && newText.trim() !== "") {
    reviews[i].text = newText.trim();
    localStorage.setItem("reviews", JSON.stringify(reviews));
    renderAdmin();
    renderSlider();
  }
};

window.deleteReview = function (i) {
  if (confirm("Delete this review?")) {
    reviews.splice(i, 1);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    renderAdmin();
    renderSlider();
  }
};

// Init
renderSlider();



// Auto Slide Every 5 Seconds
setInterval(() => {
  const total = reviews.filter(r => r.approved).length;
  if (total === 0) return;
  currentIndex = (currentIndex + 1) % total;
  renderSlider();
}, 5000);







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


