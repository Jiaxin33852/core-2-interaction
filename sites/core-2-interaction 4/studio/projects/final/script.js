document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile navigation
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });

    document.querySelectorAll('.welcome, #about, #gallery, #contact').forEach((section) => {
        observer.observe(section);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            // Close mobile navigation when a link is clicked
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });

    });
});
