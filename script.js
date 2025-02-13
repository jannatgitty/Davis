document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    const indicators = document.querySelectorAll(".indicator");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });

        currentIndex = index;
    }

    function moveSlide(step) {
        let newIndex = currentIndex + step;
        if (newIndex < 0) newIndex = slides.length - 1;
        if (newIndex >= slides.length) newIndex = 0;
        showSlide(newIndex);
    }

    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => showSlide(index));
    });

    showSlide(0);
});

