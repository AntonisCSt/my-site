document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            if (document.getElementById(targetId)) {
                // Only attempt to scroll if the target element exists on the page
                scrollToSection(targetId);
            } else {
                // Redirect to the href as it might be pointing to a different page
                window.location.href = this.getAttribute('href');
            }
        });
    });

    function scrollToSection(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) { // Ensure element exists
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
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