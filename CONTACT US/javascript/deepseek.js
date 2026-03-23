// Initialize EmailJS
(function () {
  emailjs.init("YOUR_EMAILJS_USER_ID");
})();

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });

  // Contact form submission
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const submitBtn = document.getElementById("submit-btn");
      const statusMessage = document.getElementById("status-message");

      // Validate reCAPTCHA
      const recaptchaResponse = grecaptcha.getResponse();
      if (!recaptchaResponse) {
        statusMessage.textContent =
          "Please complete the reCAPTCHA verification.";
        statusMessage.className = "status-message error";
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      // Prepare form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        "g-recaptcha-response": recaptchaResponse,
      };

      // Send email using EmailJS
      emailjs
        .send("YOUR_EMAILJS_SERVICE_ID", "YOUR_EMAILJS_TEMPLATE_ID", formData)
        .then(
          function (response) {
            statusMessage.textContent =
              "Thank you! Your message has been sent successfully. We will get back to you soon.";
            statusMessage.className = "status-message success";
            document.getElementById("contactForm").reset();
            grecaptcha.reset();
          },
          function (error) {
            statusMessage.textContent =
              "Oops! Something went wrong. Please try again later.";
            statusMessage.className = "status-message error";
            console.error("EmailJS Error:", error);
          }
        )
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Message";
        });
    });
});
