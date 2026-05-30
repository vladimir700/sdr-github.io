document.addEventListener('DOMContentLoaded', () => {
    // Получаем все элементы, которые будут открывать модальные окна
    const modalTriggers = document.querySelectorAll('.message-trigger');

    // Получаем все модальные окна
    const modals = document.querySelectorAll('.modal');

    // Получаем кнопки закрытия во всех модальных окнах
    const closeButtons = document.querySelectorAll('.close-button');

    // Функция для открытия модального окна
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex'; // Важно использовать flex для центрирования
        }
    }

    // Функция для закрытия модального окна
    function closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Навешиваем слушатели событий на элементы, открывающие модальные окна
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal-id');
            openModal(modalId);
        });
    });

    // Навешиваем слушатели событий на кнопки закрытия
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal'); // Находим ближайшее модальное окно
            closeModal(modal);
        });
    });

    // Закрытие модального окна при клике вне его содержимого
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) { // Если клик пришелся на фон модального окна
            closeModal(event.target);
        }
    });

    // --- Анимации для основной страницы (можно оставить или убрать) ---
    const images = document.querySelectorAll('.birthday-card img');
    images.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        setTimeout(() => {
            img.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }, index * 400 + 200);
    });
});
