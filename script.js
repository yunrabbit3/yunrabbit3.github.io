// Function to follow the mouse
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
    const distance = Math.min(eyeRect.width / 3, Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY));

    // Calculate the new iris position
    const irisX = Math.cos(angle) * distance;
    const irisY = Math.sin(angle) * distance;

    // Move the iris with optimized speed for Safari
    iris.style.transition = "transform 0.01s linear"; // Smoother and slightly faster response
    iris.style.transform = `translate(${irisX}px, ${irisY}px)`;
});

// Random movement function for touch devices
function getRandomPosition(max) {
    return Math.floor(Math.random() * max); // Generate a random number within a given max range
}

function moveIrisRandomly() {
    const iris = document.querySelector('.iris');
    const eye = document.querySelector('.eye');

    // Randomize the iris position within the eye's boundaries
    const eyeRect = eye.getBoundingClientRect();
    const maxMoveX = eyeRect.width / 4;
    const maxMoveY = eyeRect.height / 4;

    const randomX = getRandomPosition(maxMoveX * 2) - maxMoveX;
    const randomY = getRandomPosition(maxMoveY * 2) - maxMoveY;

    iris.style.transition = "transform 1.5s ease";
    iris.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Check if the device is a touch device
function isTouchDevice() {
    return ('ontouchstart' in window || navigator.maxTouchPoints > 0);
}

// Activate random movement on touch devices
if (isTouchDevice()) {
    setInterval(moveIrisRandomly, 2000); // Move the iris randomly every 2 seconds
}




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


function toggleIconName(iconName) {
    const icons = document.querySelectorAll('.floating-icon');
    icons.forEach(icon => {
        const nameSpan = icon.querySelector('.icon-name');
        // Hide all icon names first
        nameSpan.style.display = 'none';
    });

    // Find the icon with the matching name and show it
    const selectedIcon = [...icons].find(icon => icon.querySelector('.icon-name').innerText === iconName);
    if (selectedIcon) {
        const nameSpan = selectedIcon.querySelector('.icon-name');
        nameSpan.style.display = 'block';
    }
}

// Optional: Hide the icon name when the mouse leaves
const icons = document.querySelectorAll('.floating-icon');
icons.forEach(icon => {
    icon.addEventListener('mouseleave', () => {
        const nameSpan = icon.querySelector('.icon-name');
        nameSpan.style.display = 'none';
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle'); // Hamburger button
    const menuLinks = document.querySelector('.menu-links'); // Menu links

    // Function to toggle the menu
    menuToggle.addEventListener('click', () => {
        menuLinks.classList.toggle('open'); // Toggle the 'open' class
    });

    // Close the menu when a link is clicked
    const links = menuLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.classList.remove('open'); // Remove 'open' class to close the menu
        });
    });

    // Close the menu when clicking outside of the links
    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !menuLinks.contains(event.target)) {
            menuLinks.classList.remove('open'); // Close the menu if clicked outside
        }
    });
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



function playVideo(videoUrl) {
    const modal = document.getElementById('video-modal');
    const videoFrame = document.getElementById('video-frame');
    const videoTitle = document.getElementById('video-title');
    const videoDescription = document.getElementById('video-description');

    // Set the iframe source to the YouTube link
    videoFrame.src = videoUrl.replace("watch?v=", "embed/");

 // Customize title and description based on video
switch(videoUrl) {
    case 'https://www.youtube.com/watch?v=ohCgTw7APNU':
        videoTitle.innerText = "Collapse";
        videoDescription.innerText = "Editing the tension between the city and nature through the emotions of a mother.\n\nKey Techniques: Rushes, synchronization, dolly experimentation, editing.";
        break;
    case 'https://www.youtube.com/watch?v=Z9q_mGblbTM':
        videoTitle.innerText = "Point";
        videoDescription.innerText = "Exploring the complex emotions of a man in a relationship.\n\nKey Techniques: Rushes, synchronization, editing.";
        break;
    case 'https://www.youtube.com/watch?v=y6yG1LGfJ-Y':
        videoTitle.innerText = "Reminiscence";
        videoDescription.innerText = "Experimenting with the interplay of dreams and memories.\n\nKey Techniques: 3D environment creation and modeling in Cinema 4D, virtual camera animation, visual element assembly, special effects and transitions in After Effects, sound editing and processing in Premiere Pro.";
        break;
    case 'https://www.youtube.com/watch?v=F-Yz_ZEid8Q':
        videoTitle.innerText = "Sagami";
        videoDescription.innerText = "Commercial for a Japanese condom.\n\nKey Techniques: Transitions, motion matching, chroma keying, color correction, sound design, and mixing.";
        break;
        videoTitle.innerText = "Watch this video";
        videoDescription.innerText = "A brief description of this video.";
        break;
}


    // Show the modal
    modal.style.display = 'block';
    document.body.classList.add('modal-open'); // Add class to prevent scrolling
}

function closeModal(event) {
    const modal = document.getElementById('video-modal');
    const videoFrame = document.getElementById('video-frame');

    // Clear the iframe source to stop the video
    videoFrame.src = "";

    // Hide the modal
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Remove class to allow scrolling
}



