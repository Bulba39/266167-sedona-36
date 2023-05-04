const closemodalBtn = document.querySelector(".modal-close-button");

closemodalBtn.addEventListener("click", () => {
  document.querySelector(".modal-container").classList.toggle(".modal-container-close");
})

const openmodalbtn = document.querySelector(".button-search");

openmodalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".modal-container").classList.toggle(".modal-container-close");
})
