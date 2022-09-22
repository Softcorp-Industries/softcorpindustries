const fwdBtn = document.querySelector(".fwdBtn");
const rwdBtn = document.querySelector(".rwdBtn");
const anim = document.querySelector(".imgAnimation");
const pauseBtn = document.querySelector(".pauseBtn");
const stopBtn = document.querySelector(".stopBtn");
const fwdActive = document.querySelector(".fwdActive");
const rwdActive = document.querySelector(".rwdActive");

let fwd = false;
let rwd = false;
let paused = false;
let stopped = false;
let fwdBtnActive = false;
let rwdBtnActive = false;

fwdBtn.addEventListener("click", () => {
  if (!fwd) {
    anim.classList.add("playFwd");
    anim.classList.remove("playRwd");
    fwdActive.classList.add("fwd");
    rwdActive.classList.remove("rwd");
    fwd = true;
    rwd = false;
    fwdBtnActive = true;
  } else {
    fwd = false;
    fwdBtnActive = false;
  }
});

rwdBtn.addEventListener("click", () => {
  if (!rwd) {
    anim.classList.add("playRwd");
    anim.classList.remove("playFwd");
    rwdActive.classList.add("rwd");
    fwdActive.classList.remove("fwd");
    rwd = true;
    fwd = false;
  } else {
    rwd = false;
    rwdBtnActive = false;
  }
});

pauseBtn.addEventListener("click", () => {
  if (!paused) {
    anim.classList.add("pause");
    pauseBtn.classList.add("pause");
    paused = true;
  } else {
    anim.classList.remove("pause");
    pauseBtn.classList.remove("pause");
    paused = false;
  }
});

stopBtn.addEventListener("click", () => {
  if (!stopped || rwd || fwd || paused) {
    anim.classList.remove("pause");
    anim.classList.remove("playFwd");
    anim.classList.remove("playRwd");
    pauseBtn.classList.remove("pause");
    fwdActive.classList.remove("fwd");
    rwdActive.classList.remove("rwd");
    stopped = true;
  } else {
    stopped = false;
  }
});

