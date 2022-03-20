const menuBtn = document.querySelector(".navBtn__menu");
const pageNavList = document.getElementById('pageNav-list')
const cHeader = document.querySelector(".cHeader");
const navBarSite = document.getElementById('siteNav');
const darkMode = document.getElementById('darkMode');

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    pageNavList.classList.add("openNav");
    menuBtn.classList.add("openNav");
    //cHeader.classList.add("openNav");
    //navBarSite.classList.add('showNav');
    darkMode.classList.add('showDarkMode');
    menuOpen = true;
  } else {
    pageNavList.classList.remove("openNav");
    menuBtn.classList.remove("openNav");
    //cHeader.classList.remove("openNav");
    //navBarSite.classList.remove('showNav');
    darkMode.classList.remove('showDarkMode');
    menuOpen = false;
  }

})