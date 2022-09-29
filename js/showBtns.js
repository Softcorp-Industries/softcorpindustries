const pathBtns = document.querySelectorAll(".pathBtn button");
const webDevBtns = document.querySelectorAll(".webDevBtn button");

let pathBtnOpen = false;
let webDevBtnOpen = false;

function PathBtn() {
  pathBtns.forEach((pathBtn) => pathBtn.addEventListener("click", (e) => {
    if (!pathBtnOpen) {
      e.target.parentElement.parentElement.nextElementSibling.classList.add('showPath');
      e.target.innerHTML = 'Hide';
      e.target.style.outline = "2px solid var(--txtChange)"
      pathBtnOpen = true;
    } else {
      e.target.parentElement.parentElement.nextElementSibling.classList.remove('showPath');
      e.target.innerHTML = 'Show';
      e.target.style.outline = "none"
      pathBtnOpen = false
    }
  }))
}
function WebDevBtn() {
    webDevBtns.forEach((devBtn) => devBtn.addEventListener("click", (e) => {
        if (!webDevBtnOpen) {
            e.target.parentElement.parentElement.nextElementSibling.firstElementChild.style.display = 'grid';
            e.target.parentElement.parentElement.nextElementSibling.firstElementChild.classList.add('openWebDev');
            e.target.style.outline = "2px solid var(--txtChange)"
            e.target.innerHTML = "Hide Report Card"
            webDevBtnOpen = true;
        } else {
            e.target.parentElement.parentElement.nextElementSibling.firstElementChild.style.display = 'none';
            e.target.parentElement.parentElement.nextElementSibling.firstElementChild.classList.remove('openWebDev');
            e.target.style.outline = "none"
            e.target.innerHTML = "Show Report Card"
            webDevBtnOpen = false;
        }
    }))
}

PathBtn();
WebDevBtn();

/*

const fccResBtn = document.getElementById('fccResBtn');
const frontEndBtn = document.getElementById('frontEndBtn');
const fullStackBtn = document.getElementById('fullStackBtn');
const serverSideBtn = document.getElementById('serverSideBtn');

let fccResBtnOn = false;
let frontEndListOn = false;
let fullStackListOn = false;
let serverSideListOn = false;

function enableShowBtn(e) {
    e.target.parentElement.parentElement.nextElementSibling.firstElementChild.style.display = 'grid';
    e.target.parentElement.parentElement.nextElementSibling.firstElementChild.classList.add('openWebDev');
    e.target.style.outline = "2px solid var(--txtChange)"
}
function disableShowBtn(e) {
    e.target.parentElement.parentElement.nextElementSibling.firstElementChild.style.display = 'none';
    e.target.parentElement.parentElement.nextElementSibling.firstElementChild.classList.remove('openWebDev');
    e.target.style.outline = "none"
}

function showFccRes() {
    document.addEventListener('DOMContentLoaded', () => {
        fccResBtn.addEventListener('click', (e) => {
            if (!fccResBtnOn) {
                enableShowBtn(e);
                fccResBtnOn = true;
            } else {
                disableShowBtn(e);
                fccResBtnOn = false;
            }
        })
    })
}
function ShowFrontEndList() {
    document.addEventListener('DOMContentLoaded', () => {
        frontEndBtn.addEventListener('click', (e) => {
            if (!frontEndListOn) {
                enableShowBtn(e);
                e.target.innerHTML = "Hide Report Card"
                frontEndListOn = true;
            } else {
                disableShowBtn(e);
                e.target.innerHTML = "Show Report Card"
                frontEndListOn = false;
            }
        })
    })
}
function showFullStackList() {
    document.addEventListener('DOMContentLoaded', () => {
        fullStackBtn.addEventListener('click', (e) => {
            if (!fullStackListOn) {
                enableShowBtn(e);
                e.target.innerHTML = "Hide Report Card"
                fullStackListOn = true;
            } else {
                disableShowBtn(e);
                e.target.innerHTML = "Show Report Card"
                fullStackListOn = false;
            }
        })
    })
}
function showServerSideList() {
    document.addEventListener('DOMContentLoaded', () => {
        serverSideBtn.addEventListener('click', (e) => {
            if (!serverSideListOn) {
                enableShowBtn(e);
                e.target.innerHTML = "Hide Report Card"
                serverSideListOn = true;
            } else {
                disableShowBtn(e);
                e.target.innerHTML = "Show Report Card"
                serverSideListOn = false;
            }
        })
    })
}

showFccRes();
ShowFrontEndList();
showFullStackList();
showServerSideList();

function enableShowMore(e) {
    console.log(e.target.nextElementSibling)
    e.target.parentElement.nextElementSibling.style.display = 'block';
    e.target.style.outline = "2px solid var(--txtChange)"
}
function disableShowMore(e) {
    e.target.parentElement.nextElementSibling.style.display = 'none'
    e.target.style.outline = "none"
}

function enableShowCourse(e) {
    console.log(e.target.nextElementSibling)
    e.target.nextElementSibling.style.display = 'block';
    e.target.style.outline = "2px solid var(--txtChange)"
}
function disableShowCourse(e) {
    e.target.nextElementSibling.style.display = 'none'
    e.target.style.outline = "none"
}

const tutorialsBtn = document.getElementById('tutorialsBtn')
const techSkillsBtn = document.getElementById('techSkillsBtn');
const devCoursesBtn = document.getElementById('devCoursesBtn');

let tutorialsOpen = false;
let devCoursesOpen = false;
let techSkillsOpen = false;


function showtutorials() {
    document.addEventListener('DOMContentLoaded', () => {
        tutorialsBtn.addEventListener('click', (e) => {
            if (!tutorialsOpen) {
                enableShowMore(e);
                e.target.innerHTML = "Hide Tutor's"
                tutorialsOpen = true;
            } else {
                disableShowMore(e);
                e.target.innerHTML = "Show Tutor's"
                tutorialsOpen = false;
            }
        })
    })
}
function showDevCourses() {
    document.addEventListener('DOMContentLoaded', () => {
        devCoursesBtn.addEventListener('click', (e) => {
            if (!devCoursesOpen) {
                enableShowMore(e);
                e.target.innerHTML = "Hide Courses"
                devCoursesOpen = true;
            } else {
                disableShowMore(e);
                e.target.innerHTML = "Show Courses"
                devCoursesOpen = false;
            }
        })
    })
}
function showTechSkills() {
    document.addEventListener('DOMContentLoaded', () => {
        techSkillsBtn.addEventListener('click', (e) => {
            if (!techSkillsOpen) {
                enableShowMore(e);
                e.target.innerHTML =  "Hide Skills"
                techSkillsOpen = true;
            } else {
                disableShowMore(e);
                e.target.innerHTML = "Show Skills"
                techSkillsOpen = false;
            }
        })
    })
}

showtutorials();
showTechSkills();
showDevCourses();
*/
const fccCourseBtn = document.getElementById('fccCoursesBtn');
const w3CourseBtn = document.getElementById('w3CoursesBtn')
const softcorpNotesBtn = document.getElementById('softcorpNotesBtn');

let fccCourseOpen = false;
let w3CourseOpen = false;
let softcorpNotesOpen = false;

function showW3Course() {
    document.addEventListener('DOMContentLoaded', () => {
        w3CourseBtn.addEventListener('click', (e) => {
            if (!w3CourseOpen) {
                enableShowCourse(e);
                e.target.innerHTML = "Hide Subjects"
                w3CourseOpen = true;
            } else {
                disableShowCourse(e);
                e.target.innerHTML = "Show Subjects"
                w3CourseOpen = false;
            }
        })
    })
}
function showFccCourse() {
    document.addEventListener('DOMContentLoaded', () => {
        fccCourseBtn.addEventListener('click', (e) => {
            if (!fccCourseOpen) {
                enableShowCourse(e);
                e.target.innerHTML = "Hide Subjects"
                fccCourseOpen = true;
            } else {
                disableShowCourse(e);
                e.target.innerHTML = "Show Subjects"
                fccCourseOpen = false;
            }
        })
    })
}
function showSoftcorpNotes() {
    document.addEventListener('DOMContentLoaded', () => {
        softcorpNotesBtn.addEventListener('click', (e) => {
            if (!softcorpNotesOpen) {
                enableShowCourse(e);
                e.target.innerHTML = "Hide Notes"
                softcorpNotesOpen = true;
            } else {
                disableShowCourse(e);
                e.target.innerHTML = "Read My Notes"
                softcorpNotesOpen = false;
            }
        })
    })
}
showFccCourse();
showW3Course();
showSoftcorpNotes();

function enableCourseShow(e) {
    e.target.nextElementSibling.style.display = 'block'
}
function disableCourseShow(e) {
    e.target.nextElementSibling.style.display = 'none'
}