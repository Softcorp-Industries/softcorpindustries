/*

let selectedBtn = false;

// Grabs the Button that was "clicked" within the Element that has the "ID" of btn

document.querySelector("#btn").addEventListener("click", (e) => {
  console.log(e.target);
  
  // Add an active Class to the Button Clicked

  if (!selectedBtn && e.target.classList.contains("btn")) {
    e.target.classList.add("active");
    selectedBtn = true;
  } else {
    e.target.classList.remove("active");
    selectedBtn = false;
  }
});

// buttonClicked();
const btns = document.querySelector(".btn");

function menuClick() {
  document.getElementById("menu3-btn").classList.toggle("menuClicked");
  document.getElementById("header3").classList.toggle("menuClicked");
}
*/


// Toggle On - Off and Local Storage

let defaultToggleStore = localStorage.getItem("defaultToggleStore");
let htmlToggleStore = localStorage.getItem("htmlToggleStore")
let cssToggleStore = localStorage.getItem("cssToggleStore");
let sassToggleStore = localStorage.getItem("sassToggleStore");
let jsToggleStore = localStorage.getItem("jsToggleStore");

const defaultToggleBtn = document.getElementById("defaultToggleBtn");
const defaultToggleHeader = document.querySelector(".defaultToggleHeader");
const defaultIcon = document.getElementById('defaultIcon')
let defaultToggle = document.querySelector(".defaultToggleBtn");
let defaultToggleOn = false;

const htmlToggleBtn = document.getElementById("htmlToggleBtn");
const htmlToggleHeader = document.querySelector(".htmlToggleHeader");
const htmlIcon = document.getElementById('htmlIcon')
let htmlToggle = document.querySelector(".htmlToggleBtn");
let htmlToggleOn = false;

const cssToggleBtn = document.getElementById("cssToggleBtn");
const cssToggleHeader = document.querySelector(".cssToggleHeader");
const cssIcon = document.getElementById('cssIcon')
let cssToggle = document.querySelector(".cssToggleBtn");
let cssToggleOn = false;

const sassToggleBtn = document.getElementById("sassToggleBtn");
const sassToggleHeader = document.querySelector(".sassToggleHeader");
const sassIcon = document.getElementById('sassIcon')
let sassToggle = document.querySelector(".sassToggleBtn");
let sassToggleOn = false;

const jsToggleBtn = document.getElementById("jsToggleBtn");
const jsToggleHeader = document.querySelector(".jsToggleHeader");
const jsIcon = document.getElementById('jsIcon')
let jsToggle = document.querySelector(".jsToggleBtn");
let jsToggleOn = false;

const enableDefaultToggle = () => {
  document.body.setAttribute("data-toggleMode", "default");
  defaultIcon.setAttribute('src', 'img/icon/color-wheel.jpg');
  defaultToggle.classList.add("toggleAnim");
  defaultToggle.classList.remove("toggleAnimRev");
  htmlToggle.classList.add("toggleAnimRev");
  htmlToggle.classList.remove("toggleAnim");
  cssToggle.classList.add("toggleAnimRev");
  cssToggle.classList.remove("toggleAnim");
  sassToggle.classList.add("toggleAnimRev");
  sassToggle.classList.remove("toggleAnim");
  jsToggle.classList.add("toggleAnimRev");
  jsToggle.classList.remove("toggleAnim");
  localStorage.setItem("htmlToggleStore", "disabled");
  localStorage.setItem("cssToggleStore", "disabled");
  localStorage.setItem("sassToggleStore", "disabled");
  localStorage.setItem("jsToggleStore", "disabled");
  localStorage.setItem("defaultToggleStore", "enabled");
};
const disableDefaultToggle = () => {
  defaultToggle.classList.add("toggleAnimRev");
  defaultToggle.classList.remove("toggleAnim");
  enableDefaultToggle();
  localStorage.setItem("defaultToggleStore", "disabled");
};

const enableHtmlToggle = () => {
  document.body.setAttribute("data-toggleMode", "htmlTheme");
  htmlIcon.setAttribute('data-src', 'img/icon/HTML5_logo.svg.png');
  htmlToggle.classList.add("toggleAnim");
  htmlToggle.classList.remove("toggleAnimRev");
  defaultToggle.classList.add("toggleAnimRev");
  defaultToggle.classList.remove("toggleAnim");
  cssToggle.classList.add("toggleAnimRev");
  cssToggle.classList.remove("toggleAnim");
  sassToggle.classList.add("toggleAnimRev");
  sassToggle.classList.remove("toggleAnim");
  jsToggle.classList.add("toggleAnimRev");
  jsToggle.classList.remove("toggleAnim");
  localStorage.setItem("defaultToggleStore", "disabled");
  localStorage.setItem("cssToggleStore", "disabled");
  localStorage.setItem("sassToggleStore", "disabled");
  localStorage.setItem("jsToggleStore", "disabled");
  localStorage.setItem("htmlToggleStore", "enabled");
}
const disableHtmlToggle = () => {
  htmlToggle.classList.add("toggleAnimRev");
  htmlToggle.classList.remove("toggleAnim");
  enableDefaultToggle();
  localStorage.setItem("htmlToggleStore", "disabled");
}

const enableCssToggle = () => {
  document.body.setAttribute("data-toggleMode", "cssTheme");
  cssIcon.setAttribute('src', 'img/icon/css3-logo3.svg.png');
  cssToggle.classList.add("toggleAnim");
  cssToggle.classList.remove("toggleAnimRev");
  defaultToggle.classList.add("toggleAnimRev");
  defaultToggle.classList.remove("toggleAnim");
  htmlToggle.classList.add("toggleAnimRev");
  htmlToggle.classList.remove("toggleAnim");
  sassToggle.classList.add("toggleAnimRev");
  sassToggle.classList.remove("toggleAnim");
  jsToggle.classList.add("toggleAnimRev");
  jsToggle.classList.remove("toggleAnim");
  localStorage.setItem("defaultToggleStore", "disabled");
  localStorage.setItem("htmlToggleStore", "disabled");
  localStorage.setItem("sassToggleStore", "disabled");
  localStorage.setItem("jsToggleStore", "disabled");
  localStorage.setItem("cssToggleStore", "enabled");
};
const disableCssToggle = () => {
  cssToggle.classList.add("toggleAnimRev");
  cssToggle.classList.remove("toggleAnim");
  enableDefaultToggle();
  localStorage.setItem("cssToggleStore", "disabled");
};

const enableSassToggle = () => {
  document.body.setAttribute("data-toggleMode", "sassTheme");
  sassIcon.setAttribute('src', 'img/icon/sass-1.svg')
  sassToggle.classList.add("toggleAnim");
  sassToggle.classList.remove("toggleAnimRev");
  defaultToggle.classList.add("toggleAnimRev");
  defaultToggle.classList.remove("toggleAnim");
  htmlToggle.classList.add("toggleAnimRev");
  htmlToggle.classList.remove("toggleAnim");
  cssToggle.classList.add("toggleAnimRev");
  cssToggle.classList.remove("toggleAnim");
  jsToggle.classList.add("toggleAnimRev");
  jsToggle.classList.remove("toggleAnim");
  localStorage.setItem("defaultToggleStore", "disabled");
  localStorage.setItem("htmlToggleStore", "disabled");
  localStorage.setItem("cssToggleStore", "disabled");
  localStorage.setItem("jsToggleStore", "disabled");
  localStorage.setItem("sassToggleStore", "enabled");
};
const disableSassToggle = () => {
  sassToggle.classList.add("toggleAnimRev");
  sassToggle.classList.remove("toggleAnim");
  enableDefaultToggle();
  localStorage.setItem("sassToggleStore", "disabled");
};

const enableJsToggle = () => {
  document.body.setAttribute("data-toggleMode", "jsTheme");
  jsIcon.setAttribute('src', 'img/icon/javascript-logo.svg.png');
  jsToggle.classList.add("toggleAnim");
  jsToggle.classList.remove("toggleAnimRev");
  defaultToggle.classList.add("toggleAnimRev");
  defaultToggle.classList.remove("toggleAnim");
  htmlToggle.classList.add("toggleAnimRev");
  htmlToggle.classList.remove("toggleAnim");
  cssToggle.classList.add("toggleAnimRev");
  cssToggle.classList.remove("toggleAnim");
  sassToggle.classList.add("toggleAnimRev");
  sassToggle.classList.remove("toggleAnim");
  localStorage.setItem("defaultToggleStore", "disabled");
  localStorage.setItem("htmlToggleStore", "disabled");
  localStorage.setItem("cssToggleStore", "disabled");
  localStorage.setItem("sassToggleStore", "disabled");
  localStorage.setItem("jsToggleStore", "enabled");

};
const disableJsToggle = () => {
  jsToggle.classList.add("toggleAnimRev");
  jsToggle.classList.remove("toggleAnim");
  enableDefaultToggle();
  localStorage.setItem("jsToggleStore", "disabled");
};


if (
  (defaultToggleStore === "enabled" && !htmlToggleOn) ||
  (defaultToggleStore === "enabled" && !cssToggleOn) ||
  (defaultToggleStore === "enabled" && !sassToggleOn) ||
  (defaultToggleStore === "enabled" && !jsToggleOn)
) {
  disableHtmlToggle();
  disableCssToggle();
  disableSassToggle();
  disableJsToggle()
  enableDefaultToggle();
}
if (
  (htmlToggleStore === "enabled" && !defaultToggleOn) ||
  (htmlToggleStore === "enabled" && !cssToggleOn) ||
  (htmlToggleStore === "enabled" && !sassToggleOn) ||
  (htmlToggleStore === "enabled" && !jsToggleOn)
) {
  disableDefaultToggle();
  disableCssToggle();
  disableSassToggle();
  disableJsToggle();
  enableHtmlToggle();
}
if (
  (cssToggleStore === "enabled" && !defaultToggleOn) ||
  (cssToggleStore === "enabled" && !htmlToggleOn) ||
  (cssToggleStore === "enabled" && !sassToggleOn) ||
  (cssToggleStore === "enabled" && !jsToggleOn)
) {
  disableDefaultToggle();
  disableHtmlToggle();
  disableSassToggle();
  disableJsToggle();
  enableCssToggle();
}
if (
  (sassToggleStore === "enabled" && !defaultToggleOn) ||
  (sassToggleStore === "enabled" && !htmlToggleOn) ||
  (sassToggleStore === "enabled" && !cssToggleOn) ||
  (sassToggleStore === "enabled" && !jsToggleOn)
) {
  disableDefaultToggle();
  disableHtmlToggle();
  disableCssToggle();
  disableJsToggle();
  enableSassToggle();
}
if (
  (jsToggleStore === "enabled" && !defaultToggleOn) ||
  (jsToggleStore === "enabled" && !htmlToggleOn) ||
  (jsToggleStore === "enabled" && !cssToggleOn) ||
  (jsToggleStore === "enabled" && !sassToggleOn)
) {
  disableDefaultToggle();
  disableHtmlToggle();
  disableCssToggle();
  disableSassToggle();
  enableJsToggle();
}

function defaultToggleAction() {
  document.addEventListener("DOMContentLoaded", () => {
    defaultToggleBtn.addEventListener("click", () => {
      defaultToggleStore = localStorage.getItem("defaultToggleStore");
      if (defaultToggle !== "enabled" && !defaultToggleOn) {
        enableDefaultToggle();
        trans();
        defaultToggleOn = true;
        htmlToggleOn = false;
        cssToggleOn = false;
        sassToggleOn = false;
        jsToggleOn = false;
      } else {
        disableDefaultToggle();
        trans();
        defaultToggleOn = false;
      }
    });
  });
}

function htmlToggleAction() {
  document.addEventListener('DOMContentLoaded', () => {
    htmlToggleBtn.addEventListener("click", () => {
      htmlToggleStore = localStorage.getItem('htmlToggleStore');
      if (htmlToggle !== "enabled" && !htmlToggleOn) {
        enableHtmlToggle()
        trans();
        htmlToggleOn = true;
        defaultToggleOn = false;
        cssToggleOn = false;
        sassToggleOn = false;
        jsToggleOn = false;
      } else {
        console.log('click');
        disableHtmlToggle()
        trans();
        htmlToggleOn = false;
      }
    });
  })
}

function cssToggleAction() {
  document.addEventListener('DOMContentLoaded', () => {
    cssToggleBtn.addEventListener('click', () => {
      cssToggleStore = localStorage.getItem('cssToggleStore');
      if (cssToggle !== "enabled" && !cssToggleOn) {
        enableCssToggle()
        trans();
        cssToggleOn = true;
        defaultToggleOn = false;
        htmlToggleOn = false;
        sassToggleOn = false;
        jsToggleOn = false;
      } else {
        disableCssToggle()
        trans();
        cssToggleOn = false;
      }
    })
  })
}

function sassToggleAction() {
  document.addEventListener('DOMContentLoaded', () => {
    sassToggleBtn.addEventListener('click', () => {
      sassToggleStore = localStorage.getItem('sassToggleStore');
      if (sassToggle !== "enabled" && !sassToggleOn) {
        enableSassToggle()
        trans();
        sassToggleOn = true;
        defaultToggleOn = false;
        htmlToggleOn = false;
        cssToggleOn = false;
        jsToggleOn = false;
      } else {
        disableSassToggle()
        trans();
        sassToggleOn = false;
      }
    })
  })
}

function jsToggleAction() {
  document.addEventListener('DOMContentLoaded', () => {
    jsToggleBtn.addEventListener("click", () => {
      jsToggleStore = localStorage.getItem('jsToggleStore');
      if (jsToggle !== "enabled" && !jsToggleOn) {
        enableJsToggle()
        trans();
        jsToggleOn = true;
        defaultToggleOn = false;
        htmlToggleOn = false;
        cssToggleOn = false;
        sassToggleOn = false;

      } else {
        disableJsToggle()
        trans();
        jsToggleOn = false;
      }
    })
  })
}

defaultToggleAction();
htmlToggleAction();
cssToggleAction();
sassToggleAction();
jsToggleAction();

let trans = () => {
  document.body.classList.add("transition");
  window.setTimeout(() => {
    document.body.classList.remove("transition");
  }, 1000);
};


/*

const defaultToggleBtn = document.getElementById("defaultToggleBtn");
const defaultToggleHeader = document.querySelector(".defaultToggleHeader");
let defaultToggle = document.querySelector(".defaultToggleBtn");
let defaultToggleOn = false;
if(
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
defaultToggleBtn.addEventListener("click", () => {
  if (!defaultToggleOn) {
    defaultToggle.classList.add("toggleAnim");
    defaultToggle.classList.remove("toggleAnimRev");
    defaultToggleHeader.style.color = "var(--defaultThemeClr)";
    trans();
    defaultToggleOn = true;
  } else {
    defaultToggle.classList.add("toggleAnimRev");
    defaultToggle.classList.remove("toggleAnim");
    defaultToggleHeader.style.color = "var(--defaultTheme";
    trans();
    defaultToggleOn = false;
  }
});



const htmlToggleHeader = document.querySelector(".htmlToggleHeader");
const htmlToggleBtn = document.getElementById("htmlToggleBtn");
let htmlToggle = document.querySelector(".htmlToggleBtn");
let htmlToggleOn = false;


htmlToggleBtn.addEventListener("click", () => {
  if (!htmlToggleOn) {
    htmlToggle.classList.add("toggleAnim");
    htmlToggle.classList.remove("toggleAnimRev");
    htmlToggleHeader.style.color = "var(--htmlThemeClr)";
    trans();
    htmlToggleOn = true;
  } else {
    htmlToggle.classList.add("toggleAnimRev");
    htmlToggle.classList.remove("toggleAnim");
    htmlToggleHeader.style.color = "var(--defaultThemeClr";
    trans();
    htmlToggleOn = false;
  }
});



const cssToggleBtn = document.getElementById("cssToggleBtn");
const cssToggleHeader = document.querySelector(".cssToggleHeader");
let cssToggle = document.querySelector(".cssToggleBtn");
let cssToggleOn = false;



cssToggleBtn.addEventListener("click", () => {
  if (!cssToggleOn) {
    cssToggle.classList.add("toggleAnim");
    cssToggle.classList.remove("toggleAnimRev");
    cssToggleHeader.style.color = "var(--cssThemeClr)";
    trans();
    cssToggleOn = true;
  } else {
    cssToggle.classList.add("toggleAnimRev");
    cssToggle.classList.remove("toggleAnim");
    cssToggleHeader.style.color = "var(--defaultThemeClr";
    trans();
    cssToggleOn = false;
  }
});

const sassToggleHeader = document.querySelector(".sassToggleHeader");
const sassToggleBtn = document.getElementById("sassToggleBtn");
let sassToggle = document.querySelector(".sassToggleBtn");
let sassToggleOn = false;

sassToggleBtn.addEventListener("click", () => {
  if (!sassToggleOn) {
    sassToggle.classList.add("toggleAnim");
    sassToggle.classList.remove("toggleAnimRev");
    sassToggleHeader.style.color = "var(--sassThemeClr)";
    trans();
    sassToggleOn = true;
  } else {
    sassToggle.classList.add("toggleAnimRev");
    sassToggle.classList.remove("toggleAnim");
    sassToggleHeader.style.color = "var(--defaultThemeClr";
    trans();
    sassToggleOn = false;
  }
});

const jsToggleBtn = document.getElementById("jsToggleBtn");
const jsToggleHeader = document.querySelector(".jsToggleHeader");
let jsToggle = document.querySelector(".jsToggleBtn");
let jsToggleOn = false;

jsToggleBtn.addEventListener("click", () => {
  if (!jsToggleOn) {
    jsToggle.classList.add("toggleAnim");
    jsToggle.classList.remove("toggleAnimRev");
    jsToggleHeader.style.color = "var(--jsThemeClr)";
    trans();
    jsToggleOn = true;
  } else {
    jsToggle.classList.add("toggleAnimRev");
    jsToggle.classList.remove("toggleAnim");
    jsToggleHeader.style.color = "var(--defaultThemeClr";
    trans();
    jsToggleOn = false;
  }
});
*/




