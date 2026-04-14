document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // 1. АККОРДИОН В ПОДВАЛЕ (.faq__accordion)
  // ============================================
  // Находим все кнопки-триггеры
  const triggers = document.querySelectorAll('.faq__button');

  // Для каждой кнопки вешаем обработчик клика
  triggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      // Ищем родительский пункт списка (li), в котором лежит эта кнопка
      const parentItem = this.closest('.faq__main');
      // Внутри этого родителя ищем блок с контентом
      const content = parentItem.querySelector('.faq__acc');

      // Переключаем у него класс is-open (показать/скрыть)
      content.classList.toggle('is-open');
      
      // Переключаем класс is-open у кнопки (для поворота стрелки)
      this.classList.toggle('is-open');
    });
  });


  // ============================================
  // 2. УПРАВЛЕНИЕ TABINDEX ДЛЯ КНОПОК АККОРДЕОНА
  // ============================================
  const accordionBtns = document.querySelectorAll('.faq__button');

  function setTabIndexBasedOnWidth() {
    const isMobile = window.innerWidth <= 1025;

    accordionBtns.forEach(btn => {
      if (isMobile) {
        btn.removeAttribute('tabindex');  // на мобилке можно фокуситься
      } else {
        btn.setAttribute('tabindex', '-1'); // на ПК нельзя. tabindex="-1" - убираем клик Таб
      }
    });
  }

  // Запускаем при загрузке и ресайзе
  window.addEventListener('load', setTabIndexBasedOnWidth);
  window.addEventListener('resize', setTabIndexBasedOnWidth);




  

  
});  