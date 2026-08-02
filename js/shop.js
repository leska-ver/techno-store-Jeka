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

  // -- Тег - Каталог - Price-1 //
  const categoryPriceOne = document.querySelectorAll(".priceOne-js");
  const TagsPriceOne = document.querySelectorAll(".priceOne-tag");
  const BtnPriceOne = document.querySelectorAll(".priceOne-btn");

  categoryPriceOne.forEach(function(priceOne) {
    priceOne.addEventListener("change", function() {
      TagsPriceOne.forEach(function(priceOneTag) {
        priceOneTag.classList.toggle("priceOne-active")          
      })
    })
  })

  BtnPriceOne.forEach(function(BtnsPriceOnes) {
    BtnsPriceOnes.addEventListener("click", function() {
      TagsPriceOne.forEach(function(DeleteClassPriceOne) {
        DeleteClassPriceOne.classList.remove("priceOne-active")          
      })
      categoryPriceOne.forEach(function(priceOneInput) {
        if ( priceOneInput.checked ) {
          priceOneInput.checked = false
        }
      })
    })
  })
  // -- //-- Тег - Каталог - Price-1 //

  // -- Тег - Каталог - Price-2 //
  const categoryPriceTwo = document.querySelectorAll(".priceTwo-js");
  const TagsPriceTwo = document.querySelectorAll(".priceTwo-tag");
  const BtnPriceTwo = document.querySelectorAll(".priceTwo-btn");

  categoryPriceTwo.forEach(function(priceTwo) {
    priceTwo.addEventListener("change", function() {
      TagsPriceTwo.forEach(function(priceTwoTag) {
        priceTwoTag.classList.toggle("priceTwo-active")          
      })
    })
  })

  BtnPriceTwo.forEach(function(BtnsPriceTwos) {
    BtnsPriceTwos.addEventListener("click", function() {
      TagsPriceTwo.forEach(function(DeleteClassPriceTwo) {
        DeleteClassPriceTwo.classList.remove("priceTwo-active")          
      })
      categoryPriceTwo.forEach(function(priceTwoInput) {
        if ( priceTwoInput.checked ) {
          priceTwoInput.checked = false
        }
      })
    })
  })
  // -- //-- Тег - Каталог - Price-2 //

  // -- Тег - Каталог - Price-3 //
  const categoryPriceThree = document.querySelectorAll(".priceThree-js");
  const TagsPriceThree = document.querySelectorAll(".priceThree-tag");
  const BtnPriceThree = document.querySelectorAll(".priceThree-btn");

  categoryPriceThree.forEach(function(priceThree) {
    priceThree.addEventListener("change", function() {
      TagsPriceThree.forEach(function(priceThreeTag) {
        priceThreeTag.classList.toggle("priceThree-active")          
      })
    })
  })

  BtnPriceThree.forEach(function(BtnsPriceThrees) {
    BtnsPriceThrees.addEventListener("click", function() {
      TagsPriceThree.forEach(function(DeleteClassPriceThree) {
        DeleteClassPriceThree.classList.remove("priceThree-active")          
      })
      categoryPriceThree.forEach(function(priceThreeInput) {
        if ( priceThreeInput.checked ) {
          priceThreeInput.checked = false
        }
      })
    })
  })
  // -- //-- Тег - Каталог - Price-3 //

  // -- Тег - Каталог - Price-4 //
  const categoryPriceFour = document.querySelectorAll(".priceFour-js");
  const TagsPriceFour = document.querySelectorAll(".priceFour-tag");
  const BtnPriceFour = document.querySelectorAll(".priceFour-btn");

  categoryPriceFour.forEach(function(priceFour) {
    priceFour.addEventListener("change", function() {
      TagsPriceFour.forEach(function(priceFourTag) {
        priceFourTag.classList.toggle("priceFour-active")          
      })
    })
  })

  BtnPriceFour.forEach(function(BtnsPriceFours) {
    BtnsPriceFours.addEventListener("click", function() {
      TagsPriceFour.forEach(function(DeleteClassPriceFour) {
        DeleteClassPriceFour.classList.remove("priceFour-active")          
      })
      categoryPriceFour.forEach(function(priceFourInput) {
        if ( priceFourInput.checked ) {
          priceFourInput.checked = false
        }
      })
    })
  })
  // -- //-- Тег - Каталог - Price-4 //

  // -- Тег - Каталог - Price-5 //
  const categoryPriceFive = document.querySelectorAll(".priceFive-js");
  const TagsPriceFive = document.querySelectorAll(".priceFive-tag");
  const BtnPriceFive = document.querySelectorAll(".priceFive-btn");

  categoryPriceFive.forEach(function(priceFive) {
    priceFive.addEventListener("change", function() {
      TagsPriceFive.forEach(function(priceFiveTag) {
        priceFiveTag.classList.toggle("priceFive-active")          
      })
    })
  })

  BtnPriceFive.forEach(function(BtnsPriceFives) {
    BtnsPriceFives.addEventListener("click", function() {
      TagsPriceFive.forEach(function(DeleteClassPriceFive) {
        DeleteClassPriceFive.classList.remove("priceFive-active")          
      })
      categoryPriceFive.forEach(function(priceFiveInput) {
        if ( priceFiveInput.checked ) {
          priceFiveInput.checked = false
        }
      })
    })
  })
  // -- //-- Тег - Каталог - Price-5 //

  // -- Тег - Каталог - Price-6 //
  const categoryPriceSix = document.querySelectorAll(".priceSix-js");
  const TagsPriceSix = document.querySelectorAll(".priceSix-tag");
  const BtnPriceSix = document.querySelectorAll(".priceSix-btn");

  categoryPriceSix.forEach(function(priceSix) {
    priceSix.addEventListener("change", function() {
      TagsPriceSix.forEach(function(priceSixTag) {
        priceSixTag.classList.toggle("priceSix-active")          
      })
    })
  })

  BtnPriceSix.forEach(function(BtnsPriceSixs) {
    BtnsPriceSixs.addEventListener("click", function() {
      TagsPriceSix.forEach(function(DeleteClassPriceSix) {
        DeleteClassPriceSix.classList.remove("priceSix-active")          
      })
      categoryPriceSix.forEach(function(priceSixInput) {
        if ( priceSixInput.checked ) {
          priceSixInput.checked = false
        }
      })
    })
  })
  // -- //-- Тег - Каталог - Price-6 //

  // -- Тег - Каталог - Price-7 //
  const categoryPriceSeven = document.querySelectorAll(".priceSeven-js");
  const TagsPriceSeven = document.querySelectorAll(".priceSeven-tag");
  const BtnPriceSeven = document.querySelectorAll(".priceSeven-btn");

  categoryPriceSeven.forEach(function(priceSeven) {
    priceSeven.addEventListener("change", function() {
      TagsPriceSeven.forEach(function(priceSevenTag) {
        priceSevenTag.classList.toggle("priceSeven-active")          
      })
    })
  })

  BtnPriceSeven.forEach(function(BtnsPriceSevens) {
    BtnsPriceSevens.addEventListener("click", function() {
      TagsPriceSeven.forEach(function(DeleteClassPriceSeven) {
        DeleteClassPriceSeven.classList.remove("priceSeven-active")          
      })
      categoryPriceSeven.forEach(function(priceSevenInput) {
        if ( priceSevenInput.checked ) {
          priceSevenInput.checked = false
        }
      })
    })
  })
  // -- //-- Тег - Каталог - Price-7 //

  // -- Тег - Каталог - Price-8 //
  const categoryPriceEight = document.querySelectorAll(".priceEight-js");
  const TagsPriceEight = document.querySelectorAll(".priceEight-tag");
  const BtnPriceEight = document.querySelectorAll(".priceEight-btn");

  categoryPriceEight.forEach(function(priceEight) {
    priceEight.addEventListener("change", function() {
      TagsPriceEight.forEach(function(priceEightTag) {
        priceEightTag.classList.toggle("priceEight-active")          
      })
    })
  })

  BtnPriceEight.forEach(function(BtnsPriceEights) {
    BtnsPriceEights.addEventListener("click", function() {
      TagsPriceEight.forEach(function(DeleteClassPriceEight) {
        DeleteClassPriceEight.classList.remove("priceEight-active")          
      })
      categoryPriceEight.forEach(function(priceEightInput) {
        if ( priceEightInput.checked ) {
          priceEightInput.checked = false
        }
      })
    })
  })
  // -- //-- Тег - Каталог - Price-8 //

  // -- Тег - Каталог - windows //
  const categoryWindows = document.querySelectorAll(".windows-js");
  const TagsWindows = document.querySelectorAll(".windows-tag");
  const BtnWindows = document.querySelectorAll(".windows-btn");

  categoryWindows.forEach(function(windows) {
    windows.addEventListener("change", function() {
      TagsWindows.forEach(function(windowsTag) {
        windowsTag.classList.toggle("windows-active")          
      })
    })
  })

  BtnWindows.forEach(function(BtnsWindowss) {
    BtnsWindowss.addEventListener("click", function() {
      TagsWindows.forEach(function(DeleteClassWindows) {
        DeleteClassWindows.classList.remove("windows-active")          
      })
      categoryWindows.forEach(function(windowsInput) {
        if ( windowsInput.checked ) {
          windowsInput.checked = false
        }
      })
    })
  })
  // -- //-- Тег - Каталог - Windows //

  // -- Тег - Каталог - macOS //
  const categoryMacOS = document.querySelectorAll(".macOS-js");
  const TagsMacOS = document.querySelectorAll(".macOS-tag");
  const BtnMacOS = document.querySelectorAll(".macOS-btn");

  categoryMacOS.forEach(function(macOS) {
    macOS.addEventListener("change", function() {
      TagsMacOS.forEach(function(macOSTag) {
        macOSTag.classList.toggle("macOS-active")          
      })
    })
  })

  BtnMacOS.forEach(function(BtnsMacOSs) {
    BtnsMacOSs.addEventListener("click", function() {
      TagsMacOS.forEach(function(DeleteClassMacOS) {
        DeleteClassMacOS.classList.remove("macOS-active")          
      })
      categoryMacOS.forEach(function(macOSInput) {
        if ( macOSInput.checked ) {
          macOSInput.checked = false
        }
      })
    })
  })
  // -- //-- Тег - Каталог - macOS //

  // -- Тег - Каталог - Linux //
  const categoryLinux = document.querySelectorAll(".linux-js");
  const TagsLinux = document.querySelectorAll(".linux-tag");
  const BtnLinux = document.querySelectorAll(".linux-btn");

  categoryLinux.forEach(function(linux) {
    linux.addEventListener("change", function() {
      TagsLinux.forEach(function(linuxTag) {
        linuxTag.classList.toggle("linux-active")          
      })
    })
  })

  BtnLinux.forEach(function(BtnsLinuxs) {
    BtnsLinuxs.addEventListener("click", function() {
      TagsLinux.forEach(function(DeleteClassLinux) {
        DeleteClassLinux.classList.remove("linux-active")          
      })
      categoryLinux.forEach(function(linuxInput) {
        if ( linuxInput.checked ) {
          linuxInput.checked = false
        }
      })
    })
  })
  // -- //-- Тег - Каталог - Linux //


  // -- Кнопка Clear All --
  function updateClearAll() {
    const clearBtn = document.querySelector('.clear-active');
    if (!clearBtn) return;

    const activeTags = document.querySelectorAll('.tags-catalog:not(.clear-active)');
    let count = 0;

    activeTags.forEach(function(tag) {
      if (tag.classList.contains('customPCS-active') ||
          tag.classList.contains('msi-allPCS-active') ||
          tag.classList.contains('compaqPCS-active') ||
          tag.classList.contains('priceOne-active') ||
          tag.classList.contains('priceTwo-active') ||
          tag.classList.contains('priceThree-active') ||
          tag.classList.contains('priceFour-active') ||
          tag.classList.contains('priceFive-active') ||
          tag.classList.contains('priceSix-active') ||
          tag.classList.contains('priceSeven-active') ||
          tag.classList.contains('priceEight-active') ||
          tag.classList.contains('windows-active') ||
          tag.classList.contains('macOS-active') ||
          tag.classList.contains('linux-active')) {
        count++;
      }
    });

    clearBtn.style.display = (count >= 2) ? 'inline-flex' : 'none';
  }

  // -- События для обновления --
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('tags-left__input') ||
        e.target.closest('.tags-right__tag-btn')) {
      setTimeout(updateClearAll, 50);
    }
  });

  // -- Клик на Clear All --
  const clearBtn = document.querySelector('.clear-active');
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      const activeTags = document.querySelectorAll('.tags-catalog:not(.clear-active)');
      activeTags.forEach(function(tag) {
        tag.classList.remove(
          'customPCS-active', 'msi-allPCS-active', 'compaqPCS-active',
          'priceOne-active', 'priceTwo-active', 'priceThree-active',
          'priceFour-active', 'priceFive-active', 'priceSix-active',
          'priceSeven-active', 'priceEight-active',
          'windows-active', 'macOS-active', 'linux-active'
        );
      });
      
      document.querySelectorAll('.tags-left__input').forEach(function(cb) {
        cb.checked = false;
      });
      
      clearBtn.style.display = 'none';
    });
  }

  // -- Запускаем при загрузке --
  updateClearAll();
  

}); 