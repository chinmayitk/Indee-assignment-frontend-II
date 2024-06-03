let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const visibleSlides = 6; // Number of visible slides at a time

    if (index >= totalSlides / visibleSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = Math.ceil(totalSlides / visibleSlides) - 1;
    } else {
        currentIndex = index;
    }

    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initial display
showSlide(currentIndex);
