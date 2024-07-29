function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.project-video');

  videos.forEach(video => {
    video.addEventListener('click', () => {
      const url = video.getAttribute('data-url');
      window.location.href = url;
    });
  });
});
