document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-role", {
        strings: ["Python Fullstack Developer", "Web Developer", "Frontend Developer", "Backend Developer"],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1200,
        loop: true,
    });
});

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh

    // Here you would add your form submission logic (e.g., sending data to server)

    // Show success message
    formMessage.style.display = 'block';
    formMessage.className = 'alert alert-success';
    formMessage.textContent = 'Thank you for contacting me! I will get back to you soon.';

    // Reset the form fields
    form.reset();
});