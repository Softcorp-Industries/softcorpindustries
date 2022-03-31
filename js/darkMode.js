// Dark Mode and Local Storage
const darkModeBtn = document.getElementById("darkModeBtn");
const darkModeFilter = document.getElementById('darkModeFilter')

let darkModeSt = localStorage.getItem("darkModeSt");

let darkModeOn = false;

const enableDarkMode = () => {
  document.body.setAttribute("data-darkMode", "darkMode");
  darkModeBtn.style.backgroundImage = "url(img/icon/darkMode-icon-light512.webp)"
  darkModeBtn.classList.add("darkModeAnim");
  darkModeBtn.classList.remove("darkModeAnimRev");
  darkModeFilter.classList.add("darkModeFilter")
  localStorage.setItem("darkModeSt", "enabled");
};
const disableDarkMode = () => {
  document.body.setAttribute("data-darkMode", "light");
  darkModeBtn.style.backgroundImage = "url(img/icon/darkMode-icon.png)"
  darkModeBtn.classList.add("darkModeAnimRev");
  darkModeBtn.classList.remove("darkModeAnim");
  darkModeFilter.classList.remove("darkModeFilter")
  localStorage.setItem("darkModeSt", "disabled");
};
if (darkModeSt === "enabled") {
  enableDarkMode();
}
function darkModeActive() {
  document.addEventListener("DOMContentLoaded", () => {
    darkModeBtn.addEventListener("click", () => {
      darkModeSt = localStorage.getItem("darkModeSt");
      if (darkModeSt !== "enabled" && !darkModeOn) {
        enableDarkMode();
        trans();
        darkModeOn = true;
      } else {
        disableDarkMode();
        trans();
        darkModeOn = false;
      }
    });
  });
}
darkModeActive();

let trans = () => {
  document.body.classList.add("transition");
  window.setTimeout(() => {
    document.body.classList.remove("transition");
  }, 1000);
};

