// This Code Replaces all the Original Read More Code

const rmBtns = document.querySelectorAll(".rmBtn")
let rmBtnOpen = false;
function RmBtn() {
  rmBtns.forEach((rmbtm) => rmbtm.addEventListener("click", (e) => {
    if(!rmBtnOpen) {
      e.target.parentElement.previousElementSibling.style.display = 'block';
      e.target.parentElement.previousElementSibling.classList.add('readMoreAnim')
      e.target.parentElement.previousElementSibling.classList.remove('readMoreAnimRev')
      e.target.innerHTML = 'Read Less';
      rmBtnOpen = true;
    } else {
      e.target.parentElement.previousElementSibling.classList.remove('readMoreAnim')
      e.target.parentElement.previousElementSibling.classList.add('readMoreAnimRev')
      e.target.parentElement.previousElementSibling.style.display = 'none'
      e.target.innerHTML = 'Read More';
      readMoreBtn.style.display = 'block';
      rmBtnOpen = false;
    }
  }))
}
RmBtn();

/*

//   Home Work Read More Original Code

const readMoreBtn = document.getElementById('readMoreBtn');

let readMoreOpen = false;

function enableReadMore(e) {
  console.log(e.target.parentElement.previousElementSibling);
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
readMore();

// Portfolio Read More Original Code

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

*/