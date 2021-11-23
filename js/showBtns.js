const frontEndList = document.getElementById('frontEndList');
const frontEndBtn = document.getElementById('frontEndBtn');

let frontEndListOn = false;

function fronEndListActive() {
    document.addEventListener('DOMContentLoaded', () => {
        frontEndBtn.addEventListener('click', () => {
            if (!frontEndListOn) {
                // console.log('Front End Button Clicked')
                frontEndList.classList.add('openWebDev');
                frontEndBtn.style.color = 'whitesmoke';
                frontEndBtn.style.backgroundColor = 'var(--bgSecondary';
                //frontEndBtn.style.border = '2px solid whitesmoke';
                //frontEndBtn.style.boxShadow = 'none';
                frontEndListOn = true;
            } else {
                frontEndList.classList.remove('openWebDev');
                frontEndBtn.style.color = '';
                frontEndBtn.style.backgroundColor = '';
                //frontEndBtn.style.border = 'none';
                //frontEndBtn.style.boxShadow = 'inset -3px -3px 5px rgba(83, 83, 83, 0.6), inset 3px 3px 5px rgba(202, 202, 202, 0.6)';
                frontEndListOn = false;
            }
        })
    })
}
fronEndListActive()



const fullStackList = document.getElementById('fullStackList');
const fullStackBtn = document.getElementById('fullStackBtn');

let fullStackListOn = false;

function fullStackListActive() {
    document.addEventListener('DOMContentLoaded', () => {
        fullStackBtn.addEventListener('click', () => {
            if (!fullStackListOn) {
                // console.log('Full Stack Button Clicked')
                fullStackList.classList.add('openWebDev')
                fullStackBtn.style.color = 'whitesmoke';
                fullStackBtn.style.backgroundColor = 'var(--bgSecondary';
                //fullStackBtn.style.border = '2px solid var(--jsThemeClr)';
                //fullStackBtn.style.boxShadow = 'none';
                fullStackListOn = true;
            } else {
                fullStackList.classList.remove('openWebDev')
                fullStackBtn.style.color = '';
                fullStackBtn.style.backgroundColor = '';
                //fullStackBtn.style.border = '1px solid purple';
                //fullStackBtn.style.boxShadow = 'inset -3px -3px 5px rgba(83, 83, 83, 0.6), inset 3px 3px 5px rgba(202, 202, 202, 0.6)';
                fullStackListOn = false;
            }
        })
    })
}
fullStackListActive()



const serverSideList = document.getElementById('serverSideList');
const serverSideBtn = document.getElementById('serverSideBtn');

let serverSideListOn = false;

function serverSideListActive() {
    document.addEventListener('DOMContentLoaded', () => {
        serverSideBtn.addEventListener('click', () => {
            if (!serverSideListOn) {
                // console.log('Server Side Button Clicked')
                serverSideList.classList.add('openWebDev')
                serverSideBtn.style.color = 'whitesmoke';
                serverSideBtn.style.backgroundColor = 'var(--bgSecondary'
                //serverSideBtn.style.border = '2px solid whitesmoke'
                //serverSideBtn.style.boxShadow = 'none'
                serverSideListOn = true;
            } else {
                serverSideList.classList.remove('openWebDev')
                serverSideBtn.style.color = '';
                serverSideBtn.style.backgroundColor = ''
                //serverSideBtn.style.border = '1px solid purple'
                //serverSideBtn.style.boxShadow = 'inset -3px -3px 5px rgba(83, 83, 83, 0.6), inset 3px 3px 5px rgba(202, 202, 202, 0.6)'
                serverSideListOn = false;
            }
        })
    })
}
serverSideListActive()