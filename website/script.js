document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'night') {
        document.body.classList.add('night-mode');
        document.getElementById('theme-toggle').innerHTML = '<i class="fa fa-sun-o"></i>';
    } else {
        document.body.classList.remove('night-mode');
        document.getElementById('theme-toggle').innerHTML = '<i class="fa fa-moon-o"></i>';
    }

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

// Code for the counter and theme toggle remains unchanged
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://6xm3u6crbopx5piqmdztnmkjle0dziil.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `Visits: ${data}`;
}
updateCounter();

/*-------------------Night/Day Button -------------------*/
// Check for saved theme preference and apply it
// Toggle night/day mode and fix the localStorage setting
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
    this.innerHTML = document.body.classList.contains('night-mode') ?
        '<i class="fa fa-sun-o"></i>' :
        '<i class="fa fa-moon-o"></i>';
    localStorage.setItem('theme', document.body.classList.contains('night-mode') ? 'night' : 'day');
});