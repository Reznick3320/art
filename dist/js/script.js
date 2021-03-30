'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider__item'),
          prev = document.querySelector('.slider__nav-prev'),
          next = document.querySelector('.slider__nav-next'),
          showModal = document.querySelector('.header__modal'),
          hideModal = document.querySelector('.modal__close'),
          modal = document.querySelector('.modal'),
          feedback  = document.querySelector('.feedback');

    let slideIndex = 1;

    showModal.addEventListener('click', () => {
        modal.classList.remove('hide', 'fade');
        modal.classList.add('show');    
        feedback.classList.add('show'); 
        feedback.classList.remove('hide', 'fade');
    });

    hideModal.addEventListener('click', () => {
        modal.classList.remove('show');
        modal.classList.add('hide', 'fade'); 
        feedback.classList.remove('show');  
        feedback.classList.add('hide', 'fade');
    });
    
    showSlide(slideIndex);

    function showSlide (n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.classList.add('hide'));
        slides.forEach(item => item.classList.remove('show', 'fade'));

        slides[slideIndex - 1].classList.add('show', 'fade');
        slides[slideIndex - 1].classList.remove('hide');
    }

    function plusSlide(n) {
        showSlide(slideIndex += 1);
    }

    prev.addEventListener('click', () => {
        plusSlide(-1);
    });

    next.addEventListener('click', () => {
        plusSlide(1);
    });
});