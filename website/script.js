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



/*-------------------Night/Day Button -------------------*/

// Check for saved theme preference and apply it
if(localStorage.getItem('theme') === 'night') {
    document.body.classList.add('night-mode');
}

    // Assume you have FontAwesome loaded in your project
    document.getElementById('theme-toggle').addEventListener('click', function() {
    // Toggle the 'night-mode' class
    document.body.classList.toggle('night-mode');

    // Check if the night mode is active to determine which icon to display
    if(document.body.classList.contains('night-mode')) {
        this.innerHTML = '<i class="fa fa-moon-o"></i>'; // Sun icon for day mode switch
        localStorage.setItem('theme', 'day');
    } else {
        this.innerHTML = '<i class="fa fa-sun-o"></i>'; // Moon icon for night mode switch
        localStorage.setItem('theme', 'night');
    }
});;



