document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // Техно-шоп
  // ============================================
  (function() {
    // Слайдер для СЕТКИ
    const shopSwiper = new Swiper('.shop__grid-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: { nextEl: '.shop__grid-swiper .shop__button-next', prevEl: '.shop__grid-swiper .shop__button-prev' },
      pagination: { el: '.shop__grid-swiper .swiper-pagination', clickable: true },
    });

    // Слайдер для СПИСКА
    const listSwiper = new Swiper('.shop__list-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: { nextEl: '.shop__list-swiper .shop__button-next', prevEl: '.shop__list-swiper .shop__button-prev' },
      pagination: { el: '.shop__list-swiper .swiper-pagination', clickable: true },
    });

    // Переключение между видами
    const gridSection = document.getElementById('gridView');
    const listSection = document.getElementById('listView');
    const btns = document.querySelectorAll('.shop__btn');

    function setActiveView(view) {
      if (view === 'grid') {
        gridSection.classList.add('active-view');
        listSection.classList.remove('active-view');
        shopSwiper.update();
      } else {
        gridSection.classList.remove('active-view');
        listSection.classList.add('active-view');
        listSwiper.update();
      }
      btns.forEach(btn => {
        if (btn.dataset.view === view) btn.classList.add('active');
        else btn.classList.remove('active');
      });
    }

    btns.forEach(btn => {
      btn.addEventListener('click', () => setActiveView(btn.dataset.view));
    });

    setActiveView('grid');
  })();
  
  
}); 