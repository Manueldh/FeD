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
    firstNavBtn.classList.add("showBtn")
    secondNavBtn.classList.add("showBtn")
    closeBtn.classList.remove("removeBtn")
}

function closeMenu() {
    headerNav.classList.remove("toonMenu")
    burgerBtn.classList.remove("removeBtn")
    closeBtn.classList.add("removeBtn")
    firstNavBtn.classList.remove("showBtn")
    secondNavBtn.classList.remove("showBtn")
}


gsap.registerPlugin(ScrollTrigger);


const video = document.querySelector(".about-fourth-section video");
// video.playbackRate = 3;
ScrollTrigger.create({
    trigger: ".about-fourth-section",
    start: "top center",
    end: "bottom center",
    toggleClass: {
        targets: ".about-fourth-section video",
        className: "show-video"
    },
    onEnter: () => {
        video.play()
    },
    onLeave: () => {
        video.pause(); 
    },
    onEnterBack: () => {
        video.play()
    },
    onLeaveBack: () => {
        video.currentTime = 0;
        video.pause();
    },
    // markers: true
})

ScrollTrigger.create({
    trigger: ".about-fifth-section",
    start: "20% center",
    end: "bottom center",
    toggleClass: {
        targets: "body",
        className: "blue-bg"
    },
    // markers: true
})

ScrollTrigger.create({
    trigger: ".black-bg-section",
    start: "10% bottom",
    end: "90% bottom",
    toggleClass: {
        targets: "body",
        className: "black-bg"
    },
    // markers: true
})

gsap.to(".img-clippath", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    scale: 0.9,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".about-first-section",
      start: "45% center",
      end: "80% center",
      scrub: true, // Voor een vloeiende animatie
    //   markers: true,
    },
  });


  // for loop gemaatk door chatGPT: https://chatgpt.com/share/674e140f-8794-8007-a9f2-bb403ebd86f7
  const listItems = document.querySelectorAll(".partners ul li");

  for (let i = 0; i < listItems.length; i++) {
    ScrollTrigger.create({
      trigger: `.partners ul li:nth-of-type(${i + 1})`,
      start: "top center",
      end: "bottom center",
      toggleClass: {
        targets: listItems[i],
        className: "yellow-text"
      },
      markers: true
    });
  }