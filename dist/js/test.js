//alert('fuck you');
let certModal1 = document.getElementById("certModal1");

let certImg1 = document.getElementById("certImg1");
let modalImg1 = document.getElementById("modalImg1");
let captionText = document.getElementById("caption");

certImg1.onclick = function () {
  certModal1.style.display = "block";
  modalImg1.dataset.src = this.dataset.src;
  captionText.innerHTML = this.alt;
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  certModal1.style.display = "none";
}