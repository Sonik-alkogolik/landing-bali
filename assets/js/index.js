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