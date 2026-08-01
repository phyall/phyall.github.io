document.addEventListener("DOMContentLoaded", function () {

    const slideshow = document.querySelector(".hero-slideshow");

    if (!slideshow) return;

    const slides = slideshow.querySelectorAll(".slide");
    const dots = slideshow.querySelectorAll(".dot");
    const nextBtn = slideshow.querySelector(".slide-next");
    const prevBtn = slideshow.querySelector(".slide-prev");

    let current = 0;
    let timer;

    function showSlide(index) {

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        current = index;
    }

    function nextSlide() {
        showSlide((current + 1) % slides.length);
    }

    function previousSlide() {
        showSlide((current - 1 + slides.length) % slides.length);
    }

    function startTimer() {
        timer = setInterval(nextSlide, 5000);
    }

    function resetTimer() {
        clearInterval(timer);
        startTimer();
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            nextSlide();
            resetTimer();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            previousSlide();
            resetTimer();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            showSlide(index);
            resetTimer();
        });
    });

    slideshow.addEventListener("mouseenter", function () {
        clearInterval(timer);
    });

    slideshow.addEventListener("mouseleave", function () {
        startTimer();
    });

    showSlide(0);
    startTimer();

});
