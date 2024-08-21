var typed = new Typed(".multiple-text", {
    strings: ["Android Developer", "Design Grafis", "Content Creator"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
// import { Carousel, initMDB } from "mdb-ui-kit";
// initMDB({ Carousel });
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
// script.js
const slider = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');

function startSlider() {
    let offset = 0;
    const slideWidth = slides[0].offsetWidth;
    const totalWidth = slideWidth * slides.length;

    setInterval(() => {
        offset -= slideWidth;
        if (Math.abs(offset) >= totalWidth) {
            offset = 0;
        }
        slider.style.transform = `translateX(${offset}px)`;
    }, 3000);
}

startSlider();
setInterval(autoScroll, 3000);
