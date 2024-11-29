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



// const sections = document.querySelectorAll('.home-fifth-section');

// let activeIndex = 0; // Houd bij welke section actief is
// let lastScrollY = 0; // Houd de vorige scrollpositie bij
// let scrollThreshold = 300; // Minimum scrollafstand voordat de sectie van sticky verandert

// // Stel initiële zichtbaarheid in
// sections.forEach((section, index) => {
//   section.style.display = index === activeIndex ? 'block' : 'none';
// });

// // Scroll event listener
// window.addEventListener('scroll', () => {
//   const currentScrollY = window.scrollY;
//   const currentSection = sections[activeIndex];
//   const nextSection = sections[activeIndex + 1];
//   const prevSection = sections[activeIndex - 1];

//   const rect = currentSection.getBoundingClientRect();

//   // Controleer of de sectie bovenaan het scherm is
//   if (rect.top <= 0) { // De sectie is bovenaan het scherm

//     // Naar beneden scrollen
//     if (currentScrollY > lastScrollY) {
//       if (rect.bottom <= window.innerHeight && nextSection && currentScrollY - lastScrollY >= 200 && currentScrollY >= scrollThreshold) {
//         // Schakel naar de volgende sectie
//         currentSection.classList.remove('sticky');
//         currentSection.style.display = 'none';
//         nextSection.style.display = 'block';
//         nextSection.classList.add('sticky');
//         activeIndex++;
//         lastScrollY = currentScrollY; // Reset scrollpositie
//       }
//     }

//     // Naar boven scrollen
//     if (currentScrollY < lastScrollY) {
//       if (rect.top >= 0 && prevSection && lastScrollY - currentScrollY >= 200 && currentScrollY <= scrollThreshold) {
//         // Schakel naar de vorige sectie
//         currentSection.classList.remove('sticky');
//         currentSection.style.display = 'none';
//         prevSection.style.display = 'block';
//         prevSection.classList.add('sticky');
//         activeIndex--;
//         lastScrollY = currentScrollY; // Reset scrollpositie
//       }
//     }
//   }
// });