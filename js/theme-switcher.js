// Theme Switcher
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("theme-dark");

  if (body.classList.contains("theme-dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});


// Contact Form Success Message
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent successfully! ✅");
      form.reset();
    });
  }

});