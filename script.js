
document.addEventListener('DOMContentLoaded', function() {
  // --- Модальные окна (общие) ---
  const modalButtons = document.querySelectorAll('.modal-button');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close-button');

  // Функция открытия модального окна (общая)
  function openModal(modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
  }

  // Функция закрытия модального окна (общая)
  function closeModal(modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
  }

  // Обработчики открытия модальных окон (общие)
  modalButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          event.preventDefault();

          const modalSelector = button.dataset.modalTarget;
          const modal = document.querySelector(modalSelector);

          if (modal) {
              openModal(modal);
          }
      });
  });

  // Обработчики закрытия модальных окон (общие)
  closeButtons.forEach(button => {
      button.addEventListener('click', function() {
          const modal = button.closest('.modal');
          closeModal(modal);
      });
  });

  // Закрытие модального окна при клике вне его области (общая)
  window.addEventListener('click', function(event) {
      modals.forEach(modal => {
          if (event.target === modal && modal.classList.contains('active')) {
              closeModal(modal);
          }
      });
  });

  // --- Прокрутка к разделам ---
  const serviceButtons = document.querySelectorAll('.services button');

  serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        console.error(`Раздел с ID "${targetId}" не найден.`);
      }
    });
  });

  // --- Кнопка "Вернуться наверх" ---
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  // --- Вакансии и форма заявки ---
  const openModalButtons = document.querySelectorAll('.open-modal-button');
  const vacancyModals = document.querySelectorAll('.vacancy-modal');
  const vacancyCloseButtons = document.querySelectorAll('.vacancy-close-button');
  const forms = document.querySelectorAll('.modal-content form');

  openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
          const vacancy = button.closest('.vacancies').dataset.vacancy;
          const modal = document.getElementById(`${vacancy}-modal`);
          openModal(modal);
      });
  });

  vacancyCloseButtons.forEach(button => {
      button.addEventListener('click', () => {
          const modal = button.closest('.modal');
          closeModal(modal);
      });
  });

  window.addEventListener('click', (event) => {
      vacancyModals.forEach(modal => {
          if (event.target === modal) {
              closeModal(modal);
          }
      });
  });

  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const modal = form.closest('.modal');
      const successMessage = modal.querySelector('#success-message');

      successMessage.style.display = 'block';

      setTimeout(() => {
        closeModal(modal);
        successMessage.style.display = 'none';
        form.reset();
      }, 3000);
    });
  });

  // --- Обработка формы записи ---
  const bookingForm = document.querySelector('#booking-modal form');

  if (bookingForm) {
      bookingForm.addEventListener('submit', function(event) {
          event.preventDefault();

          const name = document.querySelector('#name').value;
          const phone = document.querySelector('#phone').value;
          const date = document.querySelector('#date').value;
          const time = document.querySelector('#time').value;
          const service = document.querySelector('#service').value;

          console.log('Имя:', name);
          console.log('Телефон:', phone);
          console.log('Дата:', date);
          console.log('Время:', time);
          console.log('Услуга:', service);

          // Закрываем модальное окно
          const modal = document.querySelector('#booking-modal');
          closeModal(modal);

          // Выводим сообщение об успешной записи (замените на ваш код)
          alert('Запись успешно оформлена!'); // Простой пример

          // Альтернативный вариант: добавление элемента с сообщением в модалку
          // const successMessage = document.createElement('p');
          // successMessage.textContent = 'Запись успешно оформлена!';
          // modal.querySelector('.modal-content').appendChild(successMessage);
      });
  } else {
      console.error('Форма записи не найдена!');
  }
});
specialistCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});