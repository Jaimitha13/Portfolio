// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

 document.addEventListener("DOMContentLoaded", function () {
    const roles = [
      "JS Developer",
      "Python Developer",
      "Frontend Developer",
      "Fullstack Developer"
    ];
    let index = 0;
    let charIndex = 0;
    let currentRole = "";
    let isDeleting = false;
    const typedSpan = document.getElementById("typed-role");

    function type() {
      if (isDeleting) {
        currentRole = roles[index].substring(0, charIndex--);
      } else {
        currentRole = roles[index].substring(0, charIndex++);
      }

      typedSpan.textContent = currentRole;

      if (!isDeleting && charIndex === roles[index].length) {
        isDeleting = true;
        setTimeout(type, 1200); // pause after typing
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
      }

      const speed = isDeleting ? 70 : 120; // typing/deleting speed
      setTimeout(type, speed);
    }

    type();
  });