function toggleTheme() {
  let html = document.documentElement
  html.classList.toggle("light")
}

let button = document.querySelector("#switch-btn")

button.addEventListener("click", () => {
  toggleTheme()
})
