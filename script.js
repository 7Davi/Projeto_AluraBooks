const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    centeredSlidesBounds: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        600: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 850px
        850: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 60,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        },
        // when window width is >= 1728px
        1728: {
            slidesPerView: 3,
            spaceBetween: 60,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            width: 700,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});