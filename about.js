// Menambahkan efek sticky pada navbar saat di-scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.pageYOffset > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const images = [
    "1.png", // Replace with your actual image paths

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
