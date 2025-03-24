document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');

    // Existing navigation code and other functionality
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let targetId = this.getAttribute('href').substring(1);
            if (document.getElementById(targetId)) {
                scrollToSection(targetId);
            } else {
                window.location.href = this.getAttribute('href');
            }
        });
    });

    function scrollToSection(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    const hash = window.location.hash.substring(1);
    if (hash) {
        scrollToSection(hash);
    }
});

