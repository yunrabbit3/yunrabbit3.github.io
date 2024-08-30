function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToTopOnLogoClick() {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function closeMenuOnLinkClick() {
  const menuLinks = document.querySelectorAll('.menu-links a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(); // Close the menu
    });
  });
}

function playVideo(url) {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-frame');
  const description = document.getElementById('video-description');

  // Extract video ID from the URL
  const videoId = new URL(url).searchParams.get('v');

  // Define video descriptions
  const descriptions = {
    'y6yG1LGfJ-Y': 'Vidéo expérimental en motion graphic\nProjet personnel',
    // Add more descriptions here for other videos if needed
  };

  // Set the iframe source to the YouTube embed URL
  iframe.src = `https://www.youtube.com/embed/${videoId}`;

  // Set the description text
  description.textContent = descriptions[videoId] || 'No description available for this video.';

  // Display the modal
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-frame');

  // Hide the modal
  modal.style.display = 'none';

  // Stop the video by clearing the iframe source
  iframe.src = '';
}

function handleScroll() {
  const titles = document.querySelectorAll('.project-title');
  titles.forEach(title => {
    title.style.opacity = '1'; // Show the title on scroll
  });

  clearTimeout(window.scrollTimeout); // Clear any existing timeout

  window.scrollTimeout = setTimeout(() => {
    titles.forEach(title => {
      title.style.opacity = '0'; // Hide the title after scrolling stops
    });
  }, 500); // Adjust the timeout as needed
}

function checkScreenSize() {
  if (window.innerWidth < 800) {
    // Add scroll event listener only if screen width is less than 800px
    window.addEventListener('scroll', handleScroll);
  } else {
    // Remove scroll event listener if screen width is 800px or larger
    window.removeEventListener('scroll', handleScroll);
    const titles = document.querySelectorAll('.project-title');
    titles.forEach(title => {
      title.style.opacity = ''; // Reset opacity style
    });
  }
}

// Initialize project titles on mouse movement
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
  project.addEventListener('mousemove', (e) => {
    const title = project.querySelector('.project-title');
    const { left, top, width, height } = project.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Adjust the movement sensitivity
    const moveX = (x / width - 0.5) * 37; 
    const moveY = (y / height - 0.5) * 37; 
    
    title.style.transform = `translate(-50%, 50%) translate(${moveX}px, ${moveY}px)`;
  });

  project.addEventListener('mouseleave', () => {
    const title = project.querySelector('.project-title');
    title.style.transform = 'translate(-50%, 50%)'; // Reset to original position
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the logo click scroll-to-top functionality
  scrollToTopOnLogoClick();

  // Add event listener for the hamburger menu click
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', toggleMenu);
  }

  // Initialize the close menu on link click functionality
  closeMenuOnLinkClick();

  // Check screen size on load and resize
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});
