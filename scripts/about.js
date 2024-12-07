gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector(".architecture video");
video.playbackRate = 3;
ScrollTrigger.create({
    trigger: ".architecture",
    start: "top center",
    end: "bottom center",
    toggleClass: {
        targets: ".architecture video",
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
    trigger: ".about-zentry",
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
      trigger: ".about-hero",
      start: "45% center",
      end: "80% center",
      scrub: true, 
    //   markers: true,
    },
  });

ScrollTrigger.create({
    trigger: ".about-introducing",
    start: "30% center",
    end: "bottom center",
    toggleClass: {
        targets: "body",
        className: "light-blue-bg"
    },
    // markers: true
})
ScrollTrigger.create({
    trigger: ".our-mission",
    start: "top center",
    end: "bottom center",
    toggleClass: {
        targets: "body",
        className: "light-blue-bg"
    },
    // markers: true
})
