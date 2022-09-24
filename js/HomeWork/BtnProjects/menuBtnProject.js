const menuBtn1 = document.getElementById("menu1-btn");
const menuBtn2 = document.getElementById("menu2-btn");

let menuOpen1 = false;
let menuOpen2 = false;

menuBtn1.addEventListener("click", () => {
  if (!menuOpen1) {
    menuBtn1.classList.add("menu1-open");
    menuOpen1 = true;
  } else {
    menuBtn1.classList.remove("menu1-open");
    menuOpen1 = false;
  }
});
menuBtn2.addEventListener("click", () => {
  if (!menuOpen2) {
    menuBtn2.classList.add("menu2-open");
    menuOpen2 = true;
  } else {
    menuBtn2.classList.remove("menu2-open");
    menuOpen2 = false;
  }
});
