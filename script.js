

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
        videoDescription.innerText = "Commercial for a Japanese condom, emphasizing teamwork in pre-production.\n\nKey Techniques: Development of creative briefs and concept presentations, speed transitions, motion matching, chroma keying, color correction, post-synchronization, sound design, and mixing.";
        break;
    case 'https://www.youtube.com/watch?v=example2':
        videoTitle.innerText = "Walk in Paris 1";
        videoDescription.innerText = "A visual stroll through the enchanting streets of Paris.\n\nKey Techniques: Ambient soundscapes, capturing street life, use of natural light.";
        break;
    case 'https://www.youtube.com/watch?v=example3':
        videoTitle.innerText = "Walk in Paris 2";
        videoDescription.innerText = "Continuing our journey in Paris, this segment captures the city's vibrant life and stunning architecture.\n\nKey Techniques: Drone footage, time-lapse photography, and color grading.";
        break;
    default:
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



