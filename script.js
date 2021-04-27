'use strict'

const slide = document.querySelectorAll('.slide__img');
const dotContainer = document.querySelector('.dots');
const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');

let curSlide = 0;
const maxSlide = slide.length;

// makin all sides side by side
slide.forEach((slide, index) => slide.style.transform = `translateX(${index * 100}%)`);
console.log('Tis')

// Create dots 
const createDots = function () {
    slide.forEach((slide, index) => {
        dotContainer.insertAdjacentHTML('beforeend',
            `<button class="dots__dot" data-slide="${index}"></button>`);
    });
}

createDots();

//activate dots
const activateDots = function (slide) {
    document.querySelectorAll('.dots__dot').forEach((dots) => dots.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}

activateDots(0);

//goToSlide
const goToSlide = function (curSlide) {
    slide.forEach((slide, index) => slide.style.transform = `translateX(${(index - curSlide) * 100}%)`);
}

//next slide
const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    goToSlide(curSlide);
    activateDots(curSlide);
}

//prev slide
const prevSlide = function () {
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
    activateDots(curSlide);
}



dotContainer.addEventListener('click', function (el) {
    if (el.target.classList.contains('dots__dot')) {
        const slide = el.target.dataset.slide;
        goToSlide(slide);
        activateDots(slide);
    }
})

