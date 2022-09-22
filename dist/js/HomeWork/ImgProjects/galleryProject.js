// Image Gallery
const currentImg = document.querySelector("#currentImg");
const galleryGrid = document.querySelectorAll(".galleryGrid img");
const opacity = 0.6;
// Destructuring Code for 1 line Variables

// const [currentImg, galleryGrid] = [document.querySelector('#currentImg'),document.querySelectorAll('.galleryGrid img')];

//galleryGrid.forEach(img => img.addEventListener('click', (e) => currentImg.src = e.target.src));

galleryGrid[0].style.opacity = opacity;

galleryGrid.forEach((img) => img.addEventListener("click", galleryClick));

function galleryClick(e) {
  galleryGrid.forEach((img) => (img.style.opacity = 1));
  currentImg.src = e.target.src;
  currentImg.classList.add("fadeIn");
  setTimeout(() => currentImg.classList.remove("fadeIn"), 500);
  e.target.style.opacity = opacity;
}