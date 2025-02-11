/* filepath: /C:/Users/pacod/OneDrive/Desktop/Proyecto/SanValentin/js/script.js */
document.addEventListener("DOMContentLoaded", function() {
    const slidesContainer = document.querySelector(".voucher-slides");
    const slides = document.querySelectorAll(".voucher-slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        const offset = -currentSlide * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener("click", function() {
        currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
        updateCarousel();
    });

    nextButton.addEventListener("click", function() {
        currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
        updateCarousel();
    });

    updateCarousel();
    console.log("Carrusel con cartas de vales cargado correctamente");
});