const burgerBtn = document.querySelector("header button:nth-of-type(2)")
const closeBtn = document.querySelector("header button:nth-of-type(1)")
const headerNav = document.querySelector("header nav")
const firstNavBtn = document.querySelector("#firstBtn")
const secondNavBtn = document.querySelector("#secondBtn")

burgerBtn.addEventListener("click", openMenu)
closeBtn.addEventListener("click", closeMenu)

function openMenu() {
    headerNav.classList.add("toonMenu")
    burgerBtn.classList.add("removeBtn")
    // firstNavBtn.classList.add("showBtn")
    // secondNavBtn.classList.add("showBtn")
    closeBtn.classList.remove("removeBtn")
}

function closeMenu() {
    headerNav.classList.remove("toonMenu")
    burgerBtn.classList.remove("removeBtn")
    // closeBtn.classList.add("removeBtn")
    // firstNavBtn.classList.remove("showBtn")
    secondNavBtn.classList.remove("showBtn")
}