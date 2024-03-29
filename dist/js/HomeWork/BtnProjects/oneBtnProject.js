
let selectedBtn = false;

// Grabs the Button that was "clicked" within the Element that has the "ID" of btn

document.querySelector("#btn").addEventListener("click", (e) => {
  //console.log(e.target);
  
  // Add an active Class to the Button Clicked

  if (!selectedBtn && e.target.classList.contains("btnProject-btn")) {
    e.target.classList.add("active");
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.previousElementSibling.style.display = "block";
    selectedBtn = true;
  } else {
    e.target.classList.remove("active");
    e.target.parentElement.previousElementSibling.style.display = "none";
    selectedBtn = false;
  }
});

// buttonClicked();
const btns = document.querySelector(".btn");

function menuClick() {
  document.getElementById("menu3-btn").classList.toggle("menuClicked");
  document.getElementById("header3").classList.toggle("menuClicked");
}
