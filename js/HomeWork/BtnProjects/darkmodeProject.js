let darkModeStore = localStorage.getItem('darkModeStore');

let darkModeToggleOn = false;

var checkbox = document.querySelector('input[name=darkModeTheme]');

const enableDarkModeToggle = () => {
  document.body.setAttribute('data-toggleTheme', 'dark');
  darkModeStore = localStorage.setItem('darkModeStore', 'enabled')
}
const disableDarkModeToggle = () => {
  document.body.setAttribute('data-toggleTheme', 'light');
  darkModeStore = localStorage.setItem('darkModeStore', 'disabled')
}

if (
  (darkModeStore === "enabled")
) {
  enableDarkModeToggle()
}

function darkModeAction() {
  document.addEventListener('DOMContentLoaded', () => {
    checkbox.addEventListener('change', function () {
      darkModeStore = localStorage.getItem('darkModeStore');
      if (this.checked && !darkModeToggleOn) {
        enableDarkModeToggle()
        trans()
        darkModeToggleOn = true;
      } else {
        disableDarkModeToggle()
        darkModeToggleOn = false
        trans()
      }
    });
  })
}

darkModeAction()

let trans = () => {
  document.body.classList.add("transition");
  window.setTimeout(() => {
    document.body.classList.remove("transition");
  }, 1000);
};