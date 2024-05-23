const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        }
    }
});