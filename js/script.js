document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // 1. ПЕРВЫЙ ДРОПДАУН: Choices.js для селекта времени
  // ============================================
  const citySelect = () => {
    const element = document.querySelector('.header__time-select');
    if (element) {
      const choices = new Choices(element, {
        searchEnabled: false,        // убирает поиск
        noResultsText: 'Ничего не найдено'
      });
    }
  };
  citySelect();

  // ============================================
  // 2. ВТОРОЙ ДРОПДАУН: Contact Us (кастомный)
  // ============================================
  window.myFunction = function() {
    document.getElementById("myDropdown").classList.toggle("dropdown_show");
  };

  // Закрытие дропдауна при клике вне его
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown__btn')) {
      const dropdowns = document.getElementsByClassName("dropdown__content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('dropdown_show')) {
          openDropdown.classList.remove('dropdown_show');
        }
      }
    }
  };

  // ============================================
  // 3. БУРГЕР-МЕНЮ
  // ============================================
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  const body = document.body;

  if (burger && menu) {
    function toggleMenu() {
      burger.classList.toggle('open');
      menu.classList.toggle('is-active');
      
      if (menu.classList.contains('is-active')) {
        body.classList.add('menu-open');
        burger.setAttribute('aria-expanded', 'true');
      } else {
        body.classList.remove('menu-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    }

    burger.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });

    // Закрытие по клику на ссылку в меню
    menu.addEventListener('click', function(e) {
      if (e.target.classList.contains('header__nav-link')) {
        toggleMenu();
      }
    });

    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menu.classList.contains('is-active')) {
        toggleMenu();
      }
    });

    // При изменении размера окна закрываем меню на десктопе
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 1025 && menu.classList.contains('is-active')) {
        burger.classList.remove('open');
        menu.classList.remove('is-active');
        body.classList.remove('menu-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ============================================
  // 4. ЛУПА (ПОИСК) — ИСПРАВЛЕНО + КРЕСТ
  // ============================================
  const searchBlock = document.querySelector('.header__search');
  const searchIcon = document.querySelector('.header__search-icon');
  const searchInput = document.querySelector('.header__search-input');
  const searchClose = document.querySelector('.header__search-close');

  if (searchBlock && searchIcon && searchInput && searchClose) {
    
    // Открытие по клику на лупу
    searchIcon.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      searchBlock.classList.add('active');
      searchInput.focus();
    });

    // Закрытие по кресту
    searchClose.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      searchBlock.classList.remove('active');
      searchInput.value = '';
    });

    // Закрыть по ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && searchBlock.classList.contains('active')) {
        searchBlock.classList.remove('active');
        searchInput.value = '';
      }
    });

    // Закрыть при клике вне
    document.addEventListener('click', function(e) {
      if (!searchBlock.contains(e.target) && searchBlock.classList.contains('active')) {
        searchBlock.classList.remove('active');
        searchInput.value = '';
      }
    });
  }


  // ============================================
  // 5. СМЕНА ПЛЕЙСХОЛДЕРА В ЗАВИСИМОСТИ ОТ ШИРИНЫ ЭКРАНА
  // ============================================
  const placeholder = document.getElementById('searchInput');

  function setPlaceholderByWidth() {
    if (!placeholder) return;
    
    if (window.innerWidth <= 1025) {
      placeholder.placeholder = 'Search here.';
    } else {
      placeholder.placeholder = 'Search entiere store here...';
    }
  }

  // Запускаем при загрузке
  window.addEventListener('load', setPlaceholderByWidth);

  // Запускаем при изменении размера окна
  window.addEventListener('resize', setPlaceholderByWidth);


  // ============================================
  // 6. ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ
  // ============================================
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function(e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');
      if (id && id !== '#') {
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }


  // ============================================
  // 7. ПОИСК ПО ТОВАРАМ
  // ============================================
  const products = [
    { name: 'MSI Pro 16 Flex-036AU', price: 499.99, category: 'Laptops', image: 'img/product/1.png' },
    { name: 'MSI Pro 16 Flex-036AU', price: 499.99, category: 'Laptops', image: 'img/product/1.png' },
    { name: 'EX DISPLAY: MSI Pro 16', price: 351.24, category: 'Laptops', image: 'img/product/2.png' },
    { name: 'Desktop PC Gamer', price: 1299.99, category: 'Desktop PCs', image: 'img/product/3.png' },
    { name: 'Networking Router X2000', price: 89.99, category: 'Networking Devices', image: 'img/product/4.png' },
    { name: 'Printer HP LaserJet', price: 249.99, category: 'Printers & Scanners', image: 'img/product/5.png' },
    { name: 'PC Parts Bundle', price: 599.99, category: 'PC Parts', image: 'img/product/6.png' },
  ];

  const searchResults = document.getElementById('searchResults');

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      
      if (query.length < 2) {
        searchResults.classList.remove('active');
        return;
      }

      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">Ничего не найдено</div>';
      } else {
        searchResults.innerHTML = filtered.map(product => `
          <div class="search-result-item" onclick="window.location.href='product.html'">
            <img src="${product.image}" alt="${product.name}">
            <div class="search-result-info">
              <h4>${product.name}</h4>
              <p>${product.category}</p>
            </div>
            <span class="search-result-price">$${product.price}</span>
          </div>
        `).join('');
      }

      searchResults.classList.add('active');
    });

    // Закрыть результаты при клике вне
    document.addEventListener('click', function(e) {
      if (!searchBlock.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('active');
      }
    });
  }


  // ============================================
  // 8. АККОРДИОН В ПОДВАЛЕ (.footer__accordion)
  // ============================================
  // Находим все кнопки-триггеры
  const triggers = document.querySelectorAll('.accordion-trigger');

  // Для каждой кнопки вешаем обработчик клика
  triggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      // Ищем родительский пункт списка (li), в котором лежит эта кнопка
      const parentItem = this.closest('.main-list');
      // Внутри этого родителя ищем блок с контентом
      const content = parentItem.querySelector('.accordion-content');

      // Переключаем у него класс is-open (показать/скрыть)
      content.classList.toggle('is-open');
      
      // Переключаем класс is-open у кнопки (для поворота стрелки)
      this.classList.toggle('is-open');
    });
  });


  // ============================================
  // 9. УПРАВЛЕНИЕ TABINDEX ДЛЯ КНОПОК АККОРДЕОНА
  // ============================================
  const accordionBtns = document.querySelectorAll('.footer__accordion-btn');

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


  // ============================================
  // 10. СЛАЙДЕР (hero)
  // ============================================
  const heroSwiper = new Swiper('.hero__swiper', {
    navigation: {
      prevEl: '.hero__prev',
      nextEl: '.hero__next',
    },
  });


  // ============================================
  // 11. СЛАЙДЕР (products)
  // ============================================  
  const productsSwiper = new Swiper('.products__swiper', {
    slidesPerView: 'auto', // ← отключаем авто-расчёт ширины
    slidesPerGroup: 1,            // листаем по 1
    navigation: {
      prevEl: '.products__prev',
      nextEl: '.products__next',
    },
    // Адаптив под мобилки
    breakpoints: {
      545: { spaceBetween: 10 },
      768: { spaceBetween: 0 },
      1024: { spaceBetween: 0 },
      1424: { spaceBetween: 0 }
    },
    on: {
      init: function () {
        setProductsSlideWidth(); // ← вызываем после инициализации
      },
      resize: function () {
        setProductsSlideWidth(); // ← и после ресайза
      }
    }
  });

  // Функция, которая принудительно задаёт ширину слайдов
  function setProductsSlideWidth() {
    const slides = document.querySelectorAll('.products__swiper .catalog__item');
    const width = window.innerWidth;

    slides.forEach(slide => {
      if (width <= 545) {
        slide.style.width = '174px';
      } else if (width <= 768) {
        slide.style.width = '229px';
      } else if (width <= 1024) {
        slide.style.width = '229px';
      } else if (width <= 1424) {
        slide.style.width = '234px';
      } else {
        slide.style.width = '230px';
      }
      // Запрещаем сжиматься
      slide.style.flexShrink = '0';
    });
  }

  // Следим за ресайзом (на случай, если Swiper не сработает)
  window.addEventListener('resize', setProductsSlideWidth);


  // ============================================
  // 12. СЛАЙДЕР (customer)
  // ============================================  
  const customerSwiper = new Swiper('.customer__swiper', {
    slidesPerView: 'auto', // ← отключаем авто-расчёт ширины
    slidesPerGroup: 1, // листаем по 1
    navigation: {
      prevEl: '.customer__prev',
      nextEl: '.customer__next',
    },
    // Адаптив под мобилки
    breakpoints: {
      545: { spaceBetween: 10 },
      768: { spaceBetween: 0 },
      1024: { spaceBetween: 0 },
      1424: { spaceBetween: 2 }
    },
    on: {
      init: function () {
        setCustomerSlideWidth(); // ← вызываем после инициализации
      },
      resize: function () {
        setCustomerSlideWidth(); // ← и после ресайза
      }
    }
  });

  // Функция, которая принудительно задаёт ширину слайдов
  function setCustomerSlideWidth() {
    const slides = document.querySelectorAll('.customer__swiper .catalog__item');
    const width = window.innerWidth;

    slides.forEach(slide => {
      if (width <= 545) {
        slide.style.width = '222px';
      } else if (width <= 768) {
        slide.style.width = '229px';
      } else if (width <= 1024) {
        slide.style.width = '229px';
      } else if (width <= 1424) {
        slide.style.width = '234px';
      } else {
        slide.style.width = '230px';
      }
      // Запрещаем сжиматься
      slide.style.flexShrink = '0';
    });
  }

  // Следим за ресайзом (на случай, если Swiper не сработает)
  window.addEventListener('resize', setCustomerSlideWidth);


  // ============================================
  // 13. СЛАЙДЕР (laptops)
  // ============================================  
  const laptopsSwiper = new Swiper('.laptops__swiper', {
    slidesPerView: 'auto', // ← отключаем авто-расчёт ширины
    slidesPerGroup: 1, // листаем по 1
    navigation: {
      prevEl: '.laptops__prev',
      nextEl: '.laptops__next',
    },
    // Адаптив под мобилки
    breakpoints: {
      545: { spaceBetween: 10 },
      768: { spaceBetween: 0 },
      1024: { spaceBetween: 0 },
      1424: { spaceBetween: 2 }
    },
    on: {
      init: function () {
        setLaptopsSlideWidth(); // ← вызываем после инициализации
      },
      resize: function () {
        setLaptopsSlideWidth(); // ← и после ресайза
      }
    }
  });

  // Функция, которая принудительно задаёт ширину слайдов
  function setLaptopsSlideWidth() {
    const slides = document.querySelectorAll('.laptops__swiper .catalog__item');
    const width = window.innerWidth;

    slides.forEach(slide => {
      if (width <= 545) {
        slide.style.width = '222px';
      } else if (width <= 768) {
        slide.style.width = '229px';
      } else if (width <= 1024) {
        slide.style.width = '229px';
      } else if (width <= 1424) {
        slide.style.width = '234px';
      } else {
        slide.style.width = '230px';
      }
      // Запрещаем сжиматься
      slide.style.flexShrink = '0';
    });
  }

  // Следим за ресайзом (на случай, если Swiper не сработает)
  window.addEventListener('resize', setLaptopsSlideWidth);


  // ============================================
  // ПЕРЕКЛЮЧЕНИЕ АКТИВНОГО КЛАССА ПРИ ФОКУСЕ(acc__link)
  // ============================================
  
  // Удаляем всё, оставляем только это
  const navLinks = document.querySelectorAll('.acc__link');
  navLinks.forEach(link => link.addEventListener('focus', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  }));
  
  navLinks[0]?.classList.add('active');


  // ============================================
  // 13. СЛАЙДЕР (laptops)
  // ============================================  
  const desktopsSwiper = new Swiper('.desktops__swiper', {
    slidesPerView: 'auto', // ← отключаем авто-расчёт ширины
    slidesPerGroup: 1, // листаем по 1
    navigation: {
      prevEl: '.desktops__prev',
      nextEl: '.desktops__next',
    },
    // Адаптив под мобилки
    breakpoints: {
      545: { spaceBetween: 10 },
      768: { spaceBetween: 0 },
      1024: { spaceBetween: 0 },
      1424: { spaceBetween: 2 }
    },
    on: {
      init: function () {
        setDesktopsSlideWidth(); // ← вызываем после инициализации
      },
      resize: function () {
        setDesktopsSlideWidth(); // ← и после ресайза
      }
    }
  });

  // Функция, которая принудительно задаёт ширину слайдов
  function setDesktopsSlideWidth() {
    const slides = document.querySelectorAll('.desktops__swiper .catalog__item');
    const width = window.innerWidth;

    slides.forEach(slide => {
      if (width <= 545) {
        slide.style.width = '222px';
      } else if (width <= 768) {
        slide.style.width = '229px';
      } else if (width <= 1024) {
        slide.style.width = '229px';
      } else if (width <= 1424) {
        slide.style.width = '234px';
      } else {
        slide.style.width = '230px';
      }
      // Запрещаем сжиматься
      slide.style.flexShrink = '0';
    });
  }

  // Следим за ресайзом (на случай, если Swiper не сработает)
  window.addEventListener('resize', setDesktopsSlideWidth);


  // ============================================
  // 15. СЛАЙДЕР (monitors)
  // ============================================  
  const monitorsSwiper = new Swiper('.monitors__swiper', {
    slidesPerView: 'auto', // ← отключаем авто-расчёт ширины
    slidesPerGroup: 1, // листаем по 1
    navigation: {
      prevEl: '.monitors__prev',
      nextEl: '.monitors__next',
    },
    // Адаптив под мобилки
    breakpoints: {
      545: { spaceBetween: 10 },
      768: { spaceBetween: 0 },
      1024: { spaceBetween: 0 },
      1424: { spaceBetween: 2 }
    },
    on: {
      init: function () {
        setMonitorsSlideWidth(); // ← вызываем после инициализации
      },
      resize: function () {
        setMonitorsSlideWidth(); // ← и после ресайза
      }
    }
  });

  // Функция, которая принудительно задаёт ширину слайдов
  function setMonitorsSlideWidth() {
    const slides = document.querySelectorAll('.monitors__swiper .catalog__item');
    const width = window.innerWidth;

    slides.forEach(slide => {
      if (width <= 545) {
        slide.style.width = '222px';
      } else if (width <= 768) {
        slide.style.width = '229px';
      } else if (width <= 1024) {
        slide.style.width = '229px';
      } else if (width <= 1424) {
        slide.style.width = '234px';
      } else {
        slide.style.width = '230px';
      }
      // Запрещаем сжиматься
      slide.style.flexShrink = '0';
    });
  }

  // Следим за ресайзом (на случай, если Swiper не сработает)
  window.addEventListener('resize', setMonitorsSlideWidth);


  // ============================================
  // 16. СЛАЙДЕР (review)
  // ============================================  
  const reviewSwiper = new Swiper(".review__swiper", {
    pagination: {
      el: ".review__pagination",
      // dynamicBullets: true, Уменьшает шарики
    }
  });


  // ============================================
  // 17. ТАБЫ ДЛЯ LAPTOPS И DESKTOPS (разные active)
  // ============================================  
  
  // -- Табы для .laptops --
  function initLaptopsTabs() {
    const section = document.querySelector('.laptops');
    if (!section) return;
    
    const tabs = section.querySelectorAll('.js-custom-tab[data-path]');
    const panels = section.querySelectorAll('.js-custom-tab[data-target]');
    
    if (tabs.length === 0 || panels.length === 0) return;
    
    // Скрыть все панели кроме первой
    panels.forEach((panel, i) => {
      if (i !== 0) panel.classList.add('is-hidden');
    });
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function(e) {
        e.preventDefault();
        const targetPath = this.dataset.path;
        
        panels.forEach(panel => {
          if (panel.dataset.target === targetPath) {
            panel.classList.remove('is-hidden');
          } else {
            panel.classList.add('is-hidden');
          }
        });
        
        // Работаем только с классом active-laptops
        tabs.forEach(t => {
          if (t === this) {
            t.classList.add('active-laptops');
          } else {
            t.classList.remove('active-laptops');
          }
        });
      });
    });
  }

  // -- Табы для .desktops --
  function initDesktopsTabs() {
    const section = document.querySelector('.desktops');
    if (!section) return;
    
    const tabs = section.querySelectorAll('.js-custom-tab[data-path]');
    const panels = section.querySelectorAll('.js-custom-tab[data-target]');
    
    if (tabs.length === 0 || panels.length === 0) return;
    
    // Скрыть все панели кроме первой
    panels.forEach((panel, i) => {
      if (i !== 0) panel.classList.add('is-hidden');
    });
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function(e) {
        e.preventDefault();
        const targetPath = this.dataset.path;
        
        panels.forEach(panel => {
          if (panel.dataset.target === targetPath) {
            panel.classList.remove('is-hidden');
          } else {
            panel.classList.add('is-hidden');
          }
        });
        
        // Работаем только с классом active-desktops
        tabs.forEach(t => {
          if (t === this) {
            t.classList.add('active-desktops');
          } else {
            t.classList.remove('active-desktops');
          }
        });
      });
    });
  }

  // Запускаем
  initLaptopsTabs();
  initDesktopsTabs();



  

  
});  