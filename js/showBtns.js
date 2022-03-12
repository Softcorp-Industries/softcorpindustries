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
showFccRes();

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
ShowFrontEndList()

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
showFullStackList();

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
showServerSideList();