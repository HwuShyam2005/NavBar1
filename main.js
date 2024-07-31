const toggleBtn = document.querySelector(".toggle_btn")
const menu = document.querySelector(".menu")
toggleBtn.addEventListener("click" , () => {
  menu.classList.toggle("open")
})