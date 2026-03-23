document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) {
    alert("Please confirm you're not a robot.");
    return;
  }

  const form = this;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  const templateParams = {
    from_name: name,
    reply_to: email,
    message: message,
  };

  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams) // 🔁 Replace
    .then(
      function (response) {
        alert("Message sent successfully!");
        form.reset();
        grecaptcha.reset();
      },
      function (error) {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again.");
      }
    );
});
