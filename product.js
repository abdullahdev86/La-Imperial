let currentSlide = 0;

function moveSlide() {
    const carouselInner = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Move to the next slide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Calculate the offset for the next slide
    const offset = -currentSlide * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Automatically move to the next slide every 3 seconds
setInterval(moveSlide, 3000);