gsap.registerPlugin(ScrollTrigger);

const imageInText = document.querySelectorAll(".imageintext")
const imageInTextImg = document.querySelectorAll(".imageintext img")


ScrollTrigger.create({
    trigger: ".latest-updates",
    start: "10% bottom",
    end: "90% 30%",
    toggleClass: {
        targets: "body",
        className: "light-blue-bg"
    },
    markers: true
})

imageInText.forEach(x => {
    x.addEventListener("click", openImage)
})

function openImage(){
    imageInTextImg.forEach(x => {
        x.classList.add("activeImg")
    }) 
}


