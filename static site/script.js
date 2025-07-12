// JavaScript for Rameshwar Bus Booking Website

document.addEventListener("DOMContentLoaded", function () {
  // Handle form submission for booking
  const bookingForm = document.querySelector(".form-box form");
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your booking request has been received. Our team will contact you soon!");
    bookingForm.reset();
  });

  // Smooth scroll for navbar links
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const section = document.querySelector(href);
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
