const slides = document.querySelectorAll(".constructionSlide");
const next = document.querySelector("#nextBtn");
const prev = document.querySelector("#prevBtn");

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};
const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

//  Construction Tablet Controls
next.addEventListener("click", (e) => {
  nextSlide(e);
});
prev.addEventListener("click", (e) => {
  prevSlide(e);
});


// Automatic Image Slider
/*
const auto = true;
const intervalTime = 5000;
let slideInterval;

next.addEventListener("click", () => {
  nextSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener("click", () => {
  prevSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
*/