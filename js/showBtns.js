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
    fccResBtn.style.color = 'var(--secondaryTxt)';
    fccResBtn.style.backgroundColor = 'var(--secondaryClr)';
    //console.log(e.target.previousElementSibling.previousElementSibling);
}
function disableShowBtn(e) {
    e.target.parentElement.nextElementSibling.firstElementChild.classList.remove('openWebDev');
    fccResBtn.style.color = 'var(--secondaryClr)';
    fccResBtn.style.backgroundColor = 'var(--secondaryTxt)';
    fccResBtn.style.boxShadow = 'inset -3px -3px 5px rgba(83, 83, 83, 0.6), inset 3px 3px 5px rgba(202, 202, 202, 0.6)';
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
    e.target.nextElementSibling.style.display = 'block';
}
function disableShowMore(e) {
    e.target.nextElementSibling.style.display = 'none'
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
