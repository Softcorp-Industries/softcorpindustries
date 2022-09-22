const menuBtn2 = document.getElementById("navBar2");
let menuOpen2 = false;

menuBtn2.addEventListener("click", () => {
  if (!menuOpen2) {
    menuBtn2.classList.add("openNav2");
    menuOpen2 = true;
  } else {
    menuBtn2.classList.remove("openNav2");
    menuOpen2 = false;
  }
});
