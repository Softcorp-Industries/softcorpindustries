/*

    There is bug that clears the read more btn text

let selectedBtn = false;

document.querySelector('#thePath').addEventListener('click', (e) => {
    //console.log(e.target);

    if (!selectedBtn && e.target.classList.contains('showBtn')) {
        e.target.parentElement.parentElement.nextElementSibling.firstElementChild.style.display = 'grid';
        e.target.parentElement.parentElement.nextElementSibling.firstElementChild.classList.add('openWebDev');
        selectedBtn = true;
    } else {
        e.target.parentElement.parentElement.nextElementSibling.firstElementChild.style.display = 'none';
        e.target.parentElement.parentElement.nextElementSibling.firstElementChild.classList.remove('openWebDev');
        selectedBtn = false;
    }
})
*/

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
    e.target.parentElement.nextElementSibling.style.display = 'block';
    e.target.style.outline = "2px solid var(--txtChange)"
}
function disableShowMore(e) {
    e.target.parentElement.nextElementSibling.style.display = 'none'
    e.target.style.outline = "none"
}

const fccCourseBtn = document.getElementById('fccCoursesBtn');
const w3CourseBtn = document.getElementById('w3CoursesBtn')
const softcorpNotesBtn = document.getElementById('softcorpNotesBtn');

const tutorialsBtn = document.getElementById('tutorialsBtn')
const techSkillsBtn = document.getElementById('techSkillsBtn');
const devCoursesBtn = document.getElementById('devCoursesBtn');

let fccCourseOpen = false;
let w3CourseOpen = false;
let softcorpNotesOpen = false;

let tutorialsOpen = false;
let devCoursesOpen = false;
let techSkillsOpen = false;


function showW3Course() {
    document.addEventListener('DOMContentLoaded', () => {
        w3CourseBtn.addEventListener('click', (e) => {
            if (!w3CourseOpen) {
                enableShowMore(e);
                e.target.innerHTML = "Hide Subjects"
                w3CourseOpen = true;
            } else {
                disableShowMore(e);
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
                enableShowMore(e);
                e.target.innerHTML = "Hide Subjects"
                fccCourseOpen = true;
            } else {
                disableShowMore(e);
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
                enableShowMore(e);
                e.target.innerHTML = "Hide Notes"
                softcorpNotesOpen = true;
            } else {
                disableShowMore(e);
                e.target.innerHTML = "Read Notes"
                softcorpNotesOpen = false;
            }
        })
    })
}

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

showFccCourse();
showW3Course();
showSoftcorpNotes();

showtutorials();
showTechSkills();
showDevCourses();

function enableCourseShow(e) {
    e.target.nextElementSibling.style.display = 'block'
}
function disableCourseShow(e) {
    e.target.nextElementSibling.style.display = 'none'
}


const readMoreBtn = document.getElementById('readMoreBtn');
const readMoreBtn2 = document.getElementById('readMoreBtn2');
const readMoreBtn3 = document.getElementById('readMoreBtn3');
const readMoreImg = document.getElementById('readMoreImg');

let readMoreOpen = false;
let readMore2Open = false;
let readMore3Open = false;

function enableReadMore(e) {
    //console.log(e.target.parentElement.previousElementSibling);
    e.target.parentElement.previousElementSibling.style.display = 'block';
    e.target.parentElement.previousElementSibling.classList.add('readMoreAnim')
    e.target.parentElement.previousElementSibling.classList.remove('readMoreAnimRev')
    e.target.innerHTML = 'Read Less';
}
function disableReadMore(e) {
    e.target.parentElement.previousElementSibling.classList.remove('readMoreAnim')
    e.target.parentElement.previousElementSibling.classList.add('readMoreAnimRev')
    e.target.parentElement.previousElementSibling.style.display = 'none'
    e.target.innerHTML = 'Read More';
    readMoreBtn.style.display = 'block';
}

function readMore() {
    document.addEventListener('DOMContentLoaded', () => {
        readMoreBtn.addEventListener('click', (e) => {
            if (!readMoreOpen) {
                enableReadMore(e);
                readMoreOpen = true;
            } else {
                disableReadMore(e);
                readMoreOpen = false;
            }
        })
    })
}
function readMore2() {
    document.addEventListener('DOMContentLoaded', () => {
        readMoreBtn2.addEventListener('click', (e) => {
            if (!readMore2Open) {
                enableReadMore(e);
                readMore2Open = true;
            } else {
                disableReadMore(e);
                readMore2Open = false;
            }
        })
    })
}
function readMore3() {
    document.addEventListener('DOMContentLoaded', () => {
        readMoreBtn3.addEventListener('click', (e) => {
            if (!readMore3Open) {
                enableReadMore(e);
                readMore3Open = true;
            } else {
                disableReadMore(e);
                readMore3Open = false;
            }
        })
    })
}
readMore();
readMore2();
readMore3();

