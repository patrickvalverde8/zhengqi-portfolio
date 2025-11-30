// Portfolio page functionality

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll spy for side navigation
const sections = document.querySelectorAll('.project-section');
const navItems = document.querySelectorAll('.side-nav .nav-item');

function updateActiveNav() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('data-project');
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-project') === current) {
      item.classList.add('active');
    }
  });
}

// Smooth scroll for navigation
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = item.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Update active nav on scroll
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// Image Lightbox functionality
let currentImageIndex = 0;
let allImages = [];

// Collect all gallery images
function initLightbox() {
  const galleryImages = document.querySelectorAll('.project-gallery img, .intro-gallery img');
  allImages = Array.from(galleryImages);
  
  // Add click event to each image
  allImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      openLightbox(index);
    });
  });
}

function openLightbox(index) {
  currentImageIndex = index;
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const currentSpan = document.getElementById('lightbox-current');
  const totalSpan = document.getElementById('lightbox-total');
  
  lightboxImg.src = allImages[index].src;
  lightboxImg.alt = allImages[index].alt;
  currentSpan.textContent = index + 1;
  totalSpan.textContent = allImages.length;
  
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function changeLightboxImage(direction) {
  currentImageIndex += direction;
  
  // Loop around
  if (currentImageIndex < 0) {
    currentImageIndex = allImages.length - 1;
  } else if (currentImageIndex >= allImages.length) {
    currentImageIndex = 0;
  }
  
  const lightboxImg = document.getElementById('lightbox-img');
  const currentSpan = document.getElementById('lightbox-current');
  
  lightboxImg.src = allImages[currentImageIndex].src;
  lightboxImg.alt = allImages[currentImageIndex].alt;
  currentSpan.textContent = currentImageIndex + 1;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.classList.contains('active')) {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      changeLightboxImage(-1);
    } else if (e.key === 'ArrowRight') {
      changeLightboxImage(1);
    }
  }
});

// Close lightbox when clicking outside image
document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target.id === 'lightbox') {
    closeLightbox();
  }
});

// Initialize lightbox when page loads
window.addEventListener('load', initLightbox);
