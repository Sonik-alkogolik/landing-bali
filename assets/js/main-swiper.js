document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const sliders = document.querySelectorAll('.root-project-card__image-slider');

        sliders.forEach(slider => {
            new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: false,
                pagination: {
                    el: slider.querySelector('.swiper-pagination'),
                    clickable: true,
                    type: 'bullets',
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active'
                },
                speed: 400,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                }
            });
        });

        console.log('✅ Swiper инициализирован для всех карточек');
    }, 2000);
});