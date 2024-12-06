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
    start: "top center",
    end: "bottom center",
    toggleClass: {
        targets: "body",
        className: "blue-bg"
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
      markers: true,
    },
  });