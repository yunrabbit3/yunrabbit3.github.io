

document.addEventListener('mousemove', (event) => {
    const eye = document.querySelector('.eye');
    const iris = document.querySelector('.iris');
    
    // Get the eye's bounding box
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    // Get the mouse's position
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the angle and distance between the mouse and the eye's center
    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
    const distance = Math.min(eyeRect.width / 3, Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY)); // Increase range

    // Calculate the new iris position
    const irisX = Math.cos(angle) * distance;
    const irisY = Math.sin(angle) * distance;

    // Move the iris
    iris.style.transform = `translate(${irisX}px, ${irisY}px)`; // No additional offset
});



// Select the dive-in element
const diveIn = document.getElementById('diveIn');

// Function to scroll down a specific amount
function scrollDown() {
    window.scrollBy({
        top: 605, // Adjust this value to control how far to scroll down
        behavior: 'smooth' // Smooth scroll effect
    });
}

// Event listener for click events
diveIn.addEventListener('click', scrollDown);




document.addEventListener('DOMContentLoaded', function() {
    const skillsLink = document.querySelector('a[href="#skills"]'); // Update the selector as needed
    skillsLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const skillsSection = document.getElementById('skills');
        const offset = 150; // Adjust this value for how much to scroll up from the section

        const topPosition = skillsSection.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: topPosition,
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Select the Skills link from the hamburger menu
    const skillsLink = document.querySelector('#hamburger-nav a[href="#skills"]'); // Target the link in the hamburger menu

    if (skillsLink) {
        skillsLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                const offset = 100; // Adjust this value for how much to scroll up from the section

                const topPosition = skillsSection.getBoundingClientRect().top + window.scrollY - offset;

                // Smooth scroll to the target position
                window.scrollTo({
                    top: topPosition,
                    behavior: 'smooth' // Smooth scroll effect
                });

            }
        });
    }
});




// JavaScript function to toggle menu visibility
function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('open'); // This class handles showing/hiding the menu
}

// Close the menu when a link is clicked
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu(); // Close the menu when a link is clicked
    });
});
