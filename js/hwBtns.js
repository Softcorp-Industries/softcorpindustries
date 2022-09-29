//  Code for all the Chapter and Project buttons

const chapterBtns = document.querySelectorAll(".chapterBtn button");
const projectBtns = document.querySelectorAll(".showProject button");

let showChapterOpen = false;
let showProjectOpen = false;

function ShowChapter() {
  chapterBtns.forEach((chapterBtn) => chapterBtn.addEventListener("click", (e) => {
    if (!showChapterOpen) {
      e.target.parentElement.parentElement.nextElementSibling.classList.add('showProject');
      e.target.innerHTML = 'Hide Projects';
      e.target.style.outline = "2px solid var(--txtChange)"
      showChapterOpen = true;
    } else {
      e.target.parentElement.parentElement.nextElementSibling.classList.remove('showProject');
      e.target.innerHTML = 'Show Projects';
      e.target.style.outline = "none"
      showChapterOpen = false
    }
  }))
}
function ShowProject() {
  projectBtns.forEach((projectBtn) => projectBtn.addEventListener("click", (e) => {
    if (!showProjectOpen) {
      e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.add('showProject');
      e.target.innerHTML = 'Hide Project';
      e.target.style.outline = "2px solid var(--txtChange)"
      showProjectOpen = true;
    } else {
      e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('showProject');
      e.target.innerHTML = 'Show Project';
      e.target.style.outline = "none"
      showProjectOpen = false;
    }
  }));
}
ShowChapter();
ShowProject();


//  Original Code for the Chapter and Project buttons

/*
function enableShowProjectsBtn(e) {
  e.target.parentElement.parentElement.nextElementSibling.classList.add('showProject');
  e.target.innerHTML = 'Hide Projects';
  e.target.style.outline = "2px solid var(--txtChange)"
}
function disableShowProjectsBtn(e) {
  e.target.parentElement.parentElement.nextElementSibling.classList.remove('showProject');
  e.target.innerHTML = 'Show Projects';
  e.target.style.outline = "none"
}
//  Projects Button
const buttonShow = document.getElementById('buttonShow');
const imgBtnShow = document.getElementById('imgShow');
const animBtnShow = document.getElementById('animationProjectBtn');
const storageProjectBtn = document.getElementById('storageProjectBtn');
const webPlayerBtn = document.getElementById('webPlayerProjectBtn');
const uiProjectBtn = document.getElementById('uiProjectBtn');

let buttonShowOpen = false;
let imgBtnShowOpen = false;
let animBtnShowOpen = false;
let storageBtnShowOpen = false;
let webPlayerShowOpen = false;
let uiBtnShowOpen = false;

function showButtonProjects() {
  buttonShow.addEventListener('click', (e) => {
    if (!buttonShowOpen) {
      enableShowProjectsBtn(e);
      buttonShowOpen = true;
    } else {
      disableShowProjectsBtn(e);
      buttonShowOpen = false;
    }
  })
}
function showImgProjects() {
  imgBtnShow.addEventListener('click', (e) => {
    if (!imgBtnShowOpen) {
      enableShowProjectsBtn(e);
      imgBtnShowOpen = true;
    } else {
      disableShowProjectsBtn(e);
      imgBtnShowOpen = false
    }
  })
}
function showAnimProjects() {
  animBtnShow.addEventListener('click', (e) => {
    if (!animBtnShowOpen) {
      enableShowProjectsBtn(e);
      animBtnShowOpen = true;
    } else {
      disableShowProjectsBtn(e);
      animBtnShowOpen = false;
    }
  })
}
function showStorageProjects() {
  storageProjectBtn.addEventListener('click', (e) => {
    if (!storageBtnShowOpen) {
      enableShowProjectsBtn(e);
      storageBtnShowOpen = true;
    } else {
      disableShowProjectsBtn(e);
      storageBtnShowOpen = false
    }
  })
}
function showWebPlayerProjects() {
  webPlayerBtn.addEventListener('click', (e) => {
    if (!webPlayerShowOpen) {
      enableShowProjectsBtn(e);
      webPlayerShowOpen = true
    } else {
      disableShowProjectsBtn(e);
      webPlayerShowOpen = false;
    }
  })
}
function showUIProjects() {
  uiProjectBtn.addEventListener('click', (e) => {
    if (!uiBtnShowOpen) {
      enableShowProjectsBtn(e);
      uiBtnShowOpen = true;
    } else {
      disableShowProjectsBtn(e);
      uiBtnShowOpen = false
    }
  })
}
showButtonProjects();
showImgProjects();
showAnimProjects();
showStorageProjects();
showWebPlayerProjects();
showUIProjects();


//  Project Button
function enableShowProjectBtn(e) {
  //console.log(e.target.parentElement.parentElement.parentElement.nextElementSibling);
  e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.add('showProject');
  e.target.innerHTML = 'Hide Project';
  e.target.style.outline = "2px solid var(--txtChange)"
}
function disableShowProjectBtn(e) {
  //console.log(e.target);
  e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('showProject');
  e.target.innerHTML = 'Show Project';
  e.target.style.outline = "none"
  //buttonShow.style.color = "var(--secondaryClr)";
  //buttonShow.style.backgroundColor = "";
}

//  Button Projects
const toggleBtn = document.getElementById('toggleButtonBtn');
const toggleInputShow = document.getElementById('toggleInputShow');
const burgerMenuBtn = document.getElementById('burger5');
const oneBtn = document.getElementById('oneBtn');

let toggleBtnShowOpen = false;
let toggleInputShowOpen = false;
let burger5ShowOpen = false;
let oneBtnShowOpen = false;

function showToggleBtnsProject() {
  toggleBtn.addEventListener('click', (e) => {
    if (!toggleBtnShowOpen) {
      enableShowProjectBtn(e);
      toggleBtnShowOpen = true
    } else {
      disableShowProjectBtn(e);
      toggleBtnShowOpen = false;
    }
  })
}
function showInputToggleProject() {
  toggleInputShow.addEventListener('click', (e) => {
    if (!toggleInputShowOpen) {
      enableShowProjectBtn(e);
      toggleInputShowOpen = true
    } else {
      disableShowProjectBtn(e);
      toggleInputShowOpen = false;
    }
  })
}
function show5BurgerProject() {
  burgerMenuBtn.addEventListener('click', (e) => {
    if (!burger5ShowOpen) {
      enableShowProjectBtn(e);
      burger5ShowOpen = true
    } else {
      disableShowProjectBtn(e);
      burger5ShowOpen = false;
    }
  })
}
function showOneBtnProject() {
  oneBtn.addEventListener('click', (e) => {
    if (!oneBtnShowOpen) {
      enableShowProjectBtn(e);
      oneBtnShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      oneBtnShowOpen = false;
    }
  })
}

showToggleBtnsProject();
showInputToggleProject();
show5BurgerProject();
showOneBtnProject();

// Image Projects
const imgCarouselBtn = document.getElementById('carouselShow');
const productGalleryBtn = document.getElementById('imgProductGalleryShow');
const imgGalleryBtn = document.getElementById('imgGalleryShow');
const imgSliderShowBtn = document.getElementById('imgSliderShow');

let carouselShowOpen = false;
let productGalleryBtnShowOpen = false;
let imgGalleryShowOpen = false;
let imgSliderShowOpen = false;

function showCarouselProject() {
  imgCarouselBtn.addEventListener("click", (e) => {
    if (!carouselShowOpen) {
      enableShowProjectBtn(e);
      carouselShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      carouselShowOpen = false;
    }
  });
}
function showProductGalleryProject() {
  productGalleryBtn.addEventListener('click', (e) => {
    if (!productGalleryBtnShowOpen) {
      enableShowProjectBtn(e);
      productGalleryBtnShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      productGalleryBtnShowOpen = false;
    }
  })
}
function showImgGalleryProject() {
  imgGalleryBtn.addEventListener('click', (e) => {
    if (!imgGalleryShowOpen) {
      enableShowProjectBtn(e);
      imgGalleryShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      imgGalleryShowOpen = false;
    }
  })
}
function showImgSliderProject() {
  imgSliderShowBtn.addEventListener('click', (e) => {
    if (!imgSliderShowOpen) {
      enableShowProjectBtn(e);
      imgSliderShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      imgSliderShowOpen = false;
    }
  })
}

showCarouselProject();
showProductGalleryProject();
showImgGalleryProject();
showImgSliderProject();

// Animation Projects
const transformBtn = document.getElementById('transformBtn');
const ninjaHoverBtn = document.getElementById('ninjaHoverBtn');
const flipMenuBtn = document.getElementById('flipMenuBtn');
const canvas1Btn = document.getElementById('canvas1Btn');

let transformBtnOn = false;
let ninjaHoverBtnOn = false;
let flipMenuBtnOn = false;
let canvas1BtnOn = false;

function showTransformProject() {
  transformBtn.addEventListener('click', (e) => {
    if (!transformBtnOn) {
      enableShowProjectBtn(e);
      transformBtnOn = true;
    } else {
      disableShowProjectBtn(e);
      transformBtnOn = false;
    }
  })
}
function showNinjaHoverProject() {
  ninjaHoverBtn.addEventListener('click', (e) => {
    if (!ninjaHoverBtnOn) {
      enableShowProjectBtn(e);
      ninjaHoverBtnOn = true;
    } else {
      disableShowProjectBtn(e);
      ninjaHoverBtnOn = false;
    }
  })
}
function showFlipMenuProject() {
  flipMenuBtn.addEventListener('click', (e) => {
    if (!flipMenuBtnOn) {
      enableShowProjectBtn(e);
      flipMenuBtnOn = true;
    } else {
      disableShowProjectBtn(e);
      flipMenuBtnOn = false;
    }
  })
}
function showCanvas1Project() {
  canvas1Btn.addEventListener('click', (e) => {
    if (!canvas1BtnOn) {
      enableShowProjectBtn(e);
      canvas1BtnOn = true;
    } else {
      disableShowProjectBtn(e);
      canvas1BtnOn = false;
    }
  })
}

showTransformProject();
showNinjaHoverProject();
showFlipMenuProject();
showCanvas1Project();

// Storage Projects
const btdBtn = document.getElementById('btdBtn');
const bookListBtn = document.getElementById('bookListBtn');

let btdBtnShowOpen = false;
let bookListBtnShowOpen = false;

function showBTDList() {
  btdBtn.addEventListener('click', (e) => {
    if (!btdBtnShowOpen) {
      enableShowProjectBtn(e);
      btdBtnShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      btdBtnShowOpen = false
    }
  })
}
function showBookList() {
  bookListBtn.addEventListener('click', (e) => {
    if (!bookListBtnShowOpen) {
      enableShowProjectBtn(e);
      bookListBtnShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      bookListBtnShowOpen = false
    }
  })
}

showBTDList();
showBookList();

// Web Player Projects
const basicAudioPlayerBtn = document.getElementById('basicAudioPlayerBtn');
const audioPlayerV1Btn = document.getElementById('webPlayerV1Btn');
const audioLibraryBtn = document.getElementById('audioLibraryBtn');
const videoPlayerV1Btn = document.getElementById('videoPlayerV1Btn');

let basicAudioPlayerShowOpen = false;
let webPlayerV1ShowOpen = false;
let audioLibraryShowOpen = false;
let videoPlayerV1ShowOpen = false;

function showBasicAudioPlayerProject() {
  basicAudioPlayerBtn.addEventListener('click', (e) => {
    if (!basicAudioPlayerShowOpen) {
      enableShowProjectBtn(e);
      basicAudioPlayerShowOpen = true
    } else {
      disableShowProjectBtn(e);
      basicAudioPlayerShowOpen = false;
    }
  })
}
function showAudioPlayerV1Project() {
  audioPlayerV1Btn.addEventListener('click', (e) => {
    if (!webPlayerV1ShowOpen) {
      enableShowProjectBtn(e);
      webPlayerV1ShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      webPlayerV1ShowOpen = false;
    }
  })
}
function showAudioLibraryProject() {
  audioLibraryBtn.addEventListener('click', (e) => {
    if (!audioLibraryShowOpen) {
      enableShowProjectBtn(e);
      audioLibraryShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      audioLibraryShowOpen = false;
    }
  })
}
function showVideoPlayerV1Project() {
  videoPlayerV1Btn.addEventListener('click', (e) => {
    if (!videoPlayerV1ShowOpen) {
      enableShowProjectBtn(e);
      videoPlayerV1ShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      videoPlayerV1ShowOpen = false;
    }
  })
}

showBasicAudioPlayerProject();
showAudioPlayerV1Project();
showAudioLibraryProject();
showVideoPlayerV1Project();

//  UI Projects
const TABLET_1Btn = document.getElementById("tablet-1Btn");
const TABLET_2Btn = document.getElementById("tablet-2Btn");
const PHONE_1Btn = document.getElementById("phone-1Btn");
const PHONE_2Btn = document.getElementById("phone-2Btn");

let tablet_1ShowOpen = false;
let tablet_2ShowOpen = false;
let phone_1ShowOpen = false;
let phone_2ShowOpen = false;

function showTablet_1Project() {
  TABLET_1Btn.addEventListener('click', (e) => {
    if (!tablet_1ShowOpen) {
      enableShowProjectBtn(e);
      tablet_1ShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      tablet_1ShowOpen = false;
    }
  })
}
function showTablet_2Project() {
  TABLET_2Btn.addEventListener('click', (e) => {
    if (!tablet_2ShowOpen) {
      enableShowProjectBtn(e);
      tablet_2ShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      tablet_2ShowOpen = false;
    }
  })
}
function showPhone_1Project() {
  PHONE_1Btn.addEventListener('click', (e) => {
    if (!phone_1ShowOpen) {
      enableShowProjectBtn(e);
      phone_1ShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      phone_1ShowOpen = false;
    }
  })
}
function showPhone_2Project() {
  PHONE_2Btn.addEventListener('click', (e) => {
    if (!phone_2ShowOpen) {
      enableShowProjectBtn(e);
      phone_2ShowOpen = true;
    } else {
      disableShowProjectBtn(e);
      phone_2ShowOpen = false;
    }
  })
}

showTablet_1Project();
showTablet_2Project();
showPhone_1Project();
showPhone_2Project();
*/