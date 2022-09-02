const slide = document.querySelectorAll(".constructionSlide");
const next = document.querySelector("#nextBtn");
const prev = document.querySelector("#prevBtn");

const nextSlide = () => {
  const currentSlide = document.querySelector(".currentSlide");
  currentSlide.classList.remove("currentSlide");
  if (currentSlide.nextElementSibling) {
    currentSlide.nextElementSibling.classList.add("currentSlide");
  } else {
    slide[0].classList.add("currentSlide");
  }
  setTimeout(() => currentSlide.classList.remove("currentSlide"));
};
const prevSlide = () => {
  const currentSlide = document.querySelector(".currentSlide");
  currentSlide.classList.remove("currentSlide");
  if (currentSlide.previousElementSibling) {
    currentSlide.previousElementSibling.classList.add("currentSlide");
  } else {
    slide[slide.length - 1].classList.add("currentSlide");
  }
  setTimeout(() => currentSlide.classList.remove("currentSlide"));
};

//  Construction Tablet Controls
next.addEventListener("click", (e) => {
  nextSlide(e);
});
prev.addEventListener("click", (e) => {
  prevSlide(e);
});


// Automatic Image Slider

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
