let slideIndex = 0;
const slides = document.querySelectorAll('.slider__item');
const totalSlides = slides.length;

function showSlides() {
    slideIndex++;
    if (slideIndex >= totalSlides - 1) {
        slideIndex = 0;
    }
    document.querySelector('.slider__container').style.transform = `translateX(-${slideIndex * 50}%)`;
}

// Change slide every 3 seconds
setInterval(showSlides, 3000);
