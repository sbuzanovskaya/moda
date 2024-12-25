document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');

    let currentIndex = 0;

    const updateSlider1 = () => {
        const offset = -currentIndex * 100;
        sliderContainer.style.transform = `translateX(${offset}%)`;
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider1();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider1();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer1 = document.querySelector('.slider-container1');
    const slides1 = document.querySelectorAll('.slide1');
    const prevBtn1 = document.querySelector('.slider-btn.prev1');
    const nextBtn1 = document.querySelector('.slider-btn.next1');

    let currentIndex = 0;

    const updateSlider1 = () => {
        const offset = -currentIndex * 100;
        sliderContainer1.style.transform = `translateX(${offset}%)`;
    };

    prevBtn1.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides1.length) % slides1.length;
        updateSlider1();
    });

    nextBtn1.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides1.length;
        updateSlider1();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer2 = document.querySelector('.slider-container2');
    const slides2 = document.querySelectorAll('.slide2');
    const prevBtn2 = document.querySelector('.slider-btn.prev2');
    const nextBtn2 = document.querySelector('.slider-btn.next2');

    let currentIndex = 0;

    const updateSlider1 = () => {
        const offset = -currentIndex * 100;
        sliderContainer2.style.transform = `translateX(${offset}%)`;
    };

    prevBtn2.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides2.length) % slides2.length;
        updateSlider1();
    });

    nextBtn2.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides2.length;
        updateSlider1();
    });
});