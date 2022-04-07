const fccResBtn = document.getElementById('fccResBtn');
const frontEndBtn = document.getElementById('frontEndBtn');
const fullStackBtn = document.getElementById('fullStackBtn');
const serverSideBtn = document.getElementById('serverSideBtn');

let fccResBtnOn = false;
let frontEndListOn = false;
let fullStackListOn = false;
let serverSideListOn = false;

function enableShowBtn(e) {
    e.target.parentElement.nextElementSibling.firstElementChild.classList.add('openWebDev');
    //e.target.style.color = 'var(--secondaryTxt)';
    //e.target.style.backgroundColor = 'var(--secondaryTxt)';
    //console.log(e.target.previousElementSibling.previousElementSibling);
}
function disableShowBtn(e) {
    e.target.parentElement.nextElementSibling.firstElementChild.classList.remove('openWebDev');
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

const devCoursesBtn = document.getElementById('devCoursesBtn')
const fccCourseBtn = document.getElementById('fccCoursesBtn')
const softcorpNotesBtn = document.getElementById('softcorpNotesBtn')
const techSkillsBtn = document.getElementById('techSkillsBtn')

let devCoursesOpen = false;
let fccCourseOpen = false;
let softcorpNotesOpen = false;
let techSkillsOpen = false;

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

showDevCourses();
showFccCourse();
showSoftcorpNotes();
showTechSkills();


const readMoreBtn = document.getElementById('readMoreBtn');
const readMoreImg = document.getElementById('readMoreImg');

let readMoreOpen = false;

function enableReadMore(e) {
    console.log(e.target.parentElement.nextElementSibling);
    e.target.parentElement.previousElementSibling.style.display = 'block';
    e.target.parentElement.previousElementSibling.classList.add('readMoreAnim')
    e.target.parentElement.previousElementSibling.classList.remove('readMoreAnimRev')
    e.target.innerHTML = 'Read Less';
    readMoreImg.style.transform = 'rotateZ(0deg)';
}
function disableReadMore(e) {
    e.target.parentElement.previousElementSibling.classList.remove('readMoreAnim')
    e.target.parentElement.previousElementSibling.classList.add('readMoreAnimRev')
    //e.target.parentElement.previousElementSibling.style.display = 'none'
    e.target.innerHTML = 'Read More';
    readMoreImg.style.transform = 'rotateZ(90deg)';
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
readMore()