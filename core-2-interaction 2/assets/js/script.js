// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Example functionality: Alert when a workshop link is clicked
    var workshopLinks = document.querySelectorAll('nav ul li a[href*="workshop"]');

    workshopLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default link behavior
            alert('You clicked on a workshop link! This is a placeholder action.');
            // Here you could add more complex logic, like opening a modal or displaying additional information
        });
    });
});
