const fccResBtn = document.getElementById('fccResBtn');
const frontEndBtn = document.getElementById('frontEndBtn');
const fullStackBtn = document.getElementById('fullStackBtn');
const serverSideBtn = document.getElementById('serverSideBtn');

let fccResBtnOn = false;
let frontEndListOn = false;
let fullStackListOn = false;
let serverSideListOn = false;

function enableShowBtn(e) {
    console.log(e.target.parentElement.parentElement.nextElementSibling.firstElementChild)
    e.target.parentElement.parentElement.nextElementSibling.firstElementChild.style.display = 'grid';
    e.target.parentElement.parentElement.nextElementSibling.firstElementChild.classList.add('openWebDev');
    //e.target.style.color = 'var(--secondaryTxt)';
    //e.target.style.backgroundColor = 'var(--secondaryTxt)';
    //console.log(e.target.previousElementSibling.previousElementSibling);
}
function disableShowBtn(e) {
    e.target.parentElement.parentElement.nextElementSibling.firstElementChild.style.display = 'none';
    e.target.parentElement.parentElement.nextElementSibling.firstElementChild.classList.remove('openWebDev');
    //e.target.style.color = 'var(--secondaryClr)';
    //e.target.style.backgroundColor = 'var(--secondaryTxt)';
    //e.target.style.boxShadow = 'inset -3px -3px 5px rgba(83, 83, 83, 0.6), inset 3px 3px 5px rgba(202, 202, 202, 0.6)';
    //console.log(e.target.previousElementSibling.previousElementSibling);
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
                frontEndListOn = true;
            } else {
                disableShowBtn(e);
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
                fullStackListOn = true;
            } else {
                disableShowBtn(e);
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
                serverSideListOn = true;
            } else {
                disableShowBtn(e);
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
}
function disableShowMore(e) {
    e.target.parentElement.nextElementSibling.style.display = 'none'
}

const fccCourseBtn = document.getElementById('fccCoursesBtn');
const w3CourseBtn = document.getElementById('w3CoursesBtn')
const softcorpNotesBtn = document.getElementById('softcorpNotesBtn');

const tutorialsBtn = document.getElementById('tutorialsBtn')
const devCoursesBtn = document.getElementById('devCoursesBtn');
const techSkillsBtn = document.getElementById('techSkillsBtn');

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
                w3CourseOpen = true;
            } else {
                disableShowMore(e);
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
                fccCourseOpen = true;
            } else {
                disableShowMore(e);
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
                softcorpNotesOpen = true;
            } else {
                disableShowMore(e);
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
                tutorialsOpen = true;
            } else {
                disableShowMore(e);
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
                devCoursesOpen = true;
            } else {
                disableShowMore(e);
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
                techSkillsOpen = true;
            } else {
                disableShowMore(e);
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
    console.log(e.target.parentElement.nextElementSibling);
    e.target.parentElement.previousElementSibling.style.display = 'block';
    e.target.parentElement.previousElementSibling.classList.add('readMoreAnim')
    e.target.parentElement.previousElementSibling.classList.remove('readMoreAnimRev')
    //e.target.parentElement.previousElementSibling.classList.remove('hiddenContent')
    e.target.innerHTML = 'Read Less';
    e.target.nextElementSibling.style.transform = 'rotateZ(0deg)';
}
function disableReadMore(e) {
    e.target.parentElement.previousElementSibling.classList.remove('readMoreAnim')
    e.target.parentElement.previousElementSibling.classList.add('readMoreAnimRev')
    //e.target.parentElement.previousElementSibling.classList.add('hiddenContent')
    e.target.parentElement.previousElementSibling.style.display = 'none'
    e.target.innerHTML = 'Read More';
    e.target.nextElementSibling.style.transform = 'rotateZ(90deg)';
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