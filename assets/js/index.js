document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-btn');
    const close = document.querySelector('.mobile-menu-close');
    const overlay = document.querySelector('.mobile-menu-overlay');

    if (!burger || !close || !overlay) return;

    burger.addEventListener('click', () => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Закрытие при клике на затемнение
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const customSelect = document.querySelector('.custom-select');
    const selected = customSelect.querySelector('.select-selected');
    const items = customSelect.querySelector('.select-items');
    const options = items.querySelectorAll('li');

    selected.addEventListener('click', function(e) {
        e.stopPropagation();
        items.classList.toggle('show');
        selected.classList.toggle('active');
    });

    // Выбор пункта
    options.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const value = this.getAttribute('data-value');
            const text = this.textContent;

            // Обновляем отображаемое значение
            selected.textContent = text;

            // Помечаем выбранный пункт
            options.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');

            // Закрываем список
            items.classList.remove('show');
            selected.classList.remove('active');

            // Здесь можно отправить значение в форму или сохранить в переменную
            console.log('Выбрано:', value);
        });
    });

    // Закрыть при клике вне селекта
    document.addEventListener('click', function() {
        items.classList.remove('show');
        selected.classList.remove('active');
    });


});

document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.root-project-card__image-slider');

    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.root-slide');
        const dots = slider.querySelectorAll('.root-dot');
        const prevBtn = slider.querySelector('.root-slider-btn--prev');
        const nextBtn = slider.querySelector('.root-slider-btn--next');

        let currentIndex = 0;

        const updateSlider = () => {
            // Снимаем active со всех
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            // Добавляем active на текущий
            slides[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        };

        // Клик по точкам
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });

        // Кнопки вперёд/назад (если есть)
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateSlider();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlider();
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonials__slider');
    const slides = slider.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.testimonial-nav-btn--prev');
    const nextBtn = document.querySelector('.testimonial-nav-btn--next');

    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.faq-category');
    const questionsContainer = document.querySelector('.faq__questions');

    // Переключение категорий
    categories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryKey = category.getAttribute('data-category');

            // Обновляем активный таб
            categories.forEach(c => c.classList.remove('active'));
            category.classList.add('active');

            // Показываем нужные вопросы, скрываем остальные
            document.querySelectorAll('.faq-question').forEach(q => {
                if (q.getAttribute('data-category') === categoryKey) {
                    q.classList.add('show');
                } else {
                    q.classList.remove('show');
                }
            });

            // Закрываем все открытые ответы при смене категории
            document.querySelectorAll('.faq-question__answer.show').forEach(el => {
                el.classList.remove('show');
            });
        });
    });

    // Внутри обработчика клика по заголовку:
    questionsContainer.addEventListener('click', function(e) {
        const header = e.target.closest('.faq-question__header');
        if (!header) return;

        const question = header.closest('.faq-question');
        const answer = question.querySelector('.faq-question__answer');

        // Закрываем все остальные
        document.querySelectorAll('.faq-question.open').forEach(q => {
            if (q !== question) {
                q.classList.remove('open');
                q.querySelector('.faq-question__answer').classList.remove('show');
            }
        });

        // Переключаем текущий
        question.classList.toggle('open');
        answer.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.querySelector('.footer__back-to-top');

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});