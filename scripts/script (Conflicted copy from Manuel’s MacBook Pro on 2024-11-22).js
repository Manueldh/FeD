const burgerBtn = document.querySelector("header button:nth-of-type(2)")
const closeBtn = document.querySelector("header button:nth-of-type(1)")
const headerNav = document.querySelector("header nav")

burgerBtn.addEventListener("click", openMenu)
closeBtn.addEventListener("click", closeMenu)

function openMenu() {
    headerNav.classList.add("toonMenu")
    burgerBtn.classList.add("removeBtn")
}

function closeMenu() {
    headerNav.classList.remove("toonMenu")
     burgerBtn.classList.remove("removeBtn")
}