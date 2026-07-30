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
  

  // Аккордион-Фильтр
  const accordion = document.querySelectorAll('.shop__btn-accordion');

  // Для каждой кнопки вешаем обработчик клика
  accordion.forEach(accordion => {
    accordion.addEventListener('click', function() {
      // Ищем родительский пункт списка (li), в котором лежит эта кнопка
      const parentItem = this.closest('.shop__group');
      // Внутри этого родителя ищем блок с контентом
      const content = parentItem.querySelector('.shop__accordion-content');

      // Переключаем у него класс is-open (показать/скрыть)
      content.classList.toggle('is-open');

      // Переключаем класс is-open у кнопки (для поворота стрелки)
      this.classList.toggle('is-open');  // ← исправлено!
    });
  });


  // shop.js
  const selects = document.querySelectorAll('.toolbar__sort select');
  selects.forEach(select => {
    new Choices(select, {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
    });
  });
  

  // -- Теги (tags) Кастомный чекбокс --
  // -- Тег - CustomPCS //
  const categoryCustomPCS = document.querySelectorAll(".customPCS-js");
  const TagsCustomPCS = document.querySelectorAll(".customPCS-tag");
  const BtnCustomPCS = document.querySelectorAll(".customPCS-btn");

  categoryCustomPCS.forEach(function(customPCS) {
    customPCS.addEventListener("change", function() {
      TagsCustomPCS.forEach(function(customPCSTag) {
        customPCSTag.classList.toggle("customPCS-active")          
      })
    })
  })

  BtnCustomPCS.forEach(function(BtnsCustomPCSs) {
    BtnsCustomPCSs.addEventListener("click", function() {
      TagsCustomPCS.forEach(function(DeleteClassCustomPCS) {
        DeleteClassCustomPCS.classList.remove("customPCS-active")          
      })
      categoryCustomPCS.forEach(function(customPCSInput) {
        if ( customPCSInput.checked ) {
          customPCSInput.checked = false
        }
      })
    })
  })
  // -- //-- Тег - CustomPCS //

  // -- Тег - MSI ALL-IN-ONE PCS //
  const categoryMsiAllPCS = document.querySelectorAll(".msi-allPCS-js");
  const TagsMsiAllPCS = document.querySelectorAll(".msi-allPCS-tag");
  const BtnMsiAllPCS = document.querySelectorAll(".msi-allPCS-btn");

  categoryMsiAllPCS.forEach(function(msiAllPCS) {
    msiAllPCS.addEventListener("change", function() {
      TagsMsiAllPCS.forEach(function(msiAllPCSTag) {
        msiAllPCSTag.classList.toggle("msi-allPCS-active")          
      })
    })
  })

  BtnMsiAllPCS.forEach(function(BtnsMsiAllPCSs) {
    BtnsMsiAllPCSs.addEventListener("click", function() {
      TagsMsiAllPCS.forEach(function(DeleteClassMsiAllPCS) {
        DeleteClassMsiAllPCS.classList.remove("msi-allPCS-active")          
      })
      categoryMsiAllPCS.forEach(function(msiAllPCSInput) {
        if ( msiAllPCSInput.checked ) {
          msiAllPCSInput.checked = false
        }
      })
    })
  })
  // -- //-- Тег - MSI ALL-IN-ONE PCS //

  // -- Тег - HP/COMPAQ PCS //
  const categoryCompaqPCS = document.querySelectorAll(".compaqPCS-js");
  const TagsCompaqPCS = document.querySelectorAll(".compaqPCS-tag");
  const BtnCompaqPCS = document.querySelectorAll(".compaqPCS-btn");

  categoryCompaqPCS.forEach(function(compaqPCS) {
    compaqPCS.addEventListener("change", function() {
      TagsCompaqPCS.forEach(function(compaqPCSTag) {
        compaqPCSTag.classList.toggle("compaqPCS-active")          
      })
    })
  })

  BtnCompaqPCS.forEach(function(BtnsCompaqPCSs) {
    BtnsCompaqPCSs.addEventListener("click", function() {
      TagsCompaqPCS.forEach(function(DeleteClassCompaqPCS) {
        DeleteClassCompaqPCS.classList.remove("compaqPCS-active")          
      })
      categoryCompaqPCS.forEach(function(compaqPCSInput) {
        if ( compaqPCSInput.checked ) {
          compaqPCSInput.checked = false
        }
      })
    })
  })
  // -- //-- Тег - HP/COMPAQ PCS //
  

}); 