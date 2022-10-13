export function formModal() {
  //  alert("working");
  const formModal = document.querySelector("#theProgram");
  formModal.addEventListener("click", (e) => {
    e.preventDefault();

    const modalOpenBtn = e.target.closest(".form-modal-btn");
    //console.log(modalOpenBtn);
    if (!modalOpenBtn) return

    const openModal = modalOpenBtn.parentElement.nextElementSibling.firstElementChild;
    //console.log(openModal);
    const closeModal = openModal.querySelector(".close-modal")

    const modalOpen = () => {
      openModal.classList.add("modalOpen");
      openModal.style.animation = "form-modal-in 500ms forwards";
    }
    modalOpen();

    const modalClose = () => {
      openModal.classList.remove("modalOpen");
      openModal.removeEventListener("animationend", modalClose);
    }

    closeModal.addEventListener("click",
      () => {
        openModal.style.animation = "form-modal-out 500ms forwards";
        openModal.addEventListener("animationend", modalClose)
      })
  })
}


