// Product Gallery
const productImgs = document.getElementsByClassName("productImg");
const activeProduct = document.getElementsByClassName("activeProduct");

for (var i = 0; i < productImgs.length; i++) {
  productImgs[i].addEventListener("mouseover", function () {
    if (activeProduct.length > 0) {
      activeProduct[0].classList.remove("activeProduct");
    }

    this.classList.add("activeProduct");
    document.getElementById("productFeature").src = this.src;
  });
}

/*
const buttonLeft = document.getElementById("btnL");
const buttonRight = document.getElementById("btnR");

buttonLeft.addEventListener("click", function () {
  document.getElementById("productImgs").scrollLeft -= 160;
});
buttonRight.addEventListener("click", function () {
  document.getElementById("productImgs").scrollLeft += 160;
});
*/