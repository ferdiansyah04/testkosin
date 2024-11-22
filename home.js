const images = [
    "1.png", // Replace with your actual image paths
    "2.png",
    "3.png"
  ];
  
  let currentImageIndex = 0;
  const heroSection = document.querySelector('.hero');
  
  // Create and add images to the hero section
  images.forEach((imgSrc, index) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    if (index === 0) img.classList.add('active');
    img.classList.add('hero-slide');
    heroSection.appendChild(img);
  });
  
  function changeHeroImage() {
    const imgs = heroSection.querySelectorAll('.hero-slide');
    imgs[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgs[currentImageIndex].classList.add('active');
  }
  
  // Change the image every 5 seconds
  setInterval(changeHeroImage, 5000);

  const testimonials = document.querySelectorAll('.testimonial');

testimonials.forEach(testimonial => {
  testimonial.addEventListener('mouseenter', () => {
    testimonial.style.transform = 'scale(1.05)';
    testimonial.style.transition = 'transform 0.3s ease';
  });

  testimonial.addEventListener('mouseleave', () => {
    testimonial.style.transform = 'scale(1)';
  });
});

  // Mengambil elemen navbar
const header = document.querySelector('header');

// Menyembunyikan navbar saat scroll
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    header.classList.add('hidden'); // Menyembunyikan navbar
  } else {
    header.classList.remove('hidden'); // Menampilkan navbar
  }
  lastScrollY = window.scrollY;
});

// Mengaktifkan menu navbar di mobile view
const menuIcon = document.createElement('div');
menuIcon.classList.add('menu-icon');
menuIcon.innerHTML = '<i class="fas fa-bars"></i>';  // Ikon hamburger menu
document.querySelector('nav').appendChild(menuIcon);

// Menampilkan atau menyembunyikan menu saat ikon menu diklik
menuIcon.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});
