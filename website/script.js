document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            // Check if the target is in the same page or a different page
            if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                // Same page
                scrollToSection(targetId);
            } else {
                // Different page
                window.location.href = this.getAttribute('href');
            }
        });
    });

    // Function to scroll to the target section smoothly
    function scrollToSection(targetId) {
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
});

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://6xm3u6crbopx5piqmdztnmkjle0dziil.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `Visits: ${data}`;
}
updateCounter();
