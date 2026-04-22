document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // 1. БАЗА ДАННЫХ ТОВАРОВ index.html(.products)
  // ============================================
  const products = [
    {
      id: "product-1",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: "$499.00",
      oldPrice: "$499.00",
      rating: "★★★★☆ 4.8",
      ratingValue: "4.8",
      reviews: "4",
      available: "in stock",
      img: "1-1920.png",
      desc: "Мощный 15.6-дюймовый сенсорный моноблок MSI Pro 16 Flex. Идеален для работы и дома. Оснащен процессором Intel Celeron QC N3160, 4GB оперативной памяти и графикой Intel HD Graphics. Компактный дизайн и мультитач-экран для удобного управления. Отличное решение для повседневных задач."
    },
    {
      id: "product-2",
      title: "Смартфон Galaxy S23",
      price: "$349.00",
      oldPrice: "$399.00",
      rating: "★★★★★ 5.0",
      ratingValue: "5.0",
      reviews: "12",
      available: "in stock",
      img: "2-1920.png",
      desc: "Флагманский смартфон Samsung Galaxy S23 с мощной камерой 50 МП, процессором Snapdragon 8 Gen 2 и ярким 120-герцовым Dynamic AMOLED 2X дисплеем. Обеспечивает потрясающую производительность для игр, фотосъемки и работы. Компактный и стильный дизайн."
    },
    {
      id: "product-3",
      title: "Наушники AirSound Pro",
      price: "$89.00",
      oldPrice: "$129.00",
      rating: "★★★★☆ 4.6",
      ratingValue: "4.6",
      reviews: "8",
      available: "in stock",
      img: "3-1920.png",
      desc: "Беспроводные наушники AirSound Pro с активным шумоподавлением (ANC). Погрузитесь в чистый звук без помех. До 30 часов работы на одном заряде, эргономичный дизайн для длительного ношения. Идеальны для путешествий и работы."
    },
    {
      id: "product-4",
      title: "Механическая клавиатура",
      price: "$59.00",
      oldPrice: "",
      rating: "★★★★☆ 4.7",
      ratingValue: "4.7",
      reviews: "15",
      available: "in stock",
      img: "4-1920.png",
      desc: "Игровая механическая клавиатура с механическими переключателями (Red/Blue). Характеризуется тактильной отдачей, долгим сроком службы и полной N-Key ролловером. Настраиваемая RGB-подсветка добавит стиля вашему рабочему месту."
    },
    {
      id: "product-5",
      title: "Монитор 27\" 4K",
      price: "$199.00",
      oldPrice: "$279.00",
      rating: "★★★★☆ 4.9",
      ratingValue: "4.9",
      reviews: "21",
      available: "in stock",
      img: "5-1920.png",
      desc: "27-дюймовый 4K UHD монитор с отличной цветопередачей (IPS матрица) и тонкими рамками. Поддерживает HDR400 и широкие углы обзора. Идеальный выбор для дизайнеров, видеомонтажеров и ценителей высокого качества изображения."
    },
    {
      id: "product-6",
      title: "Беспроводная мышь",
      price: "$29.00",
      oldPrice: "",
      rating: "★★★★☆ 4.5",
      ratingValue: "4.5",
      reviews: "34",
      available: "in stock",
      img: "6-1920.png",
      desc: "Эргономичная беспроводная мышь с тихими кликами и оптическим сенсором 1600 DPI. Работает до 12 месяцев от одной батарейки. Универсальный помощник для работы и дома."
    },
    {
      id: "product-7",
      title: "Планшет Tab Ultra",
      price: "$299.00",
      oldPrice: "",
      rating: "★★★★☆ 4.7",
      ratingValue: "4.7",
      reviews: "9",
      available: "in stock",
      img: "7-1920.png",
      desc: "Мощный планшет Tab Ultra с 11-дюймовым 2.5K дисплеем и стилусом в комплекте. Идеален для рисования, заметок и просмотра видео. Оснащен быстрым процессором и батареей на весь день."
    },
    {
      id: "product-8",
      title: "Фитнес-браслет Band 7",
      price: "$49.00",
      oldPrice: "",
      rating: "★★★★☆ 4.4",
      ratingValue: "4.4",
      reviews: "27",
      available: "in stock",
      img: "8-1920.png",
      desc: "Умный фитнес-браслет Band 7 с 1.6-дюймовым AMOLED-экраном. Отслеживает шаги, пульс, сон и более 100 видов тренировок. Водонепроницаемый, с функцией уведомлений и зарядом до 14 дней."
    },
    {
      id: "product-9",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: "$499.00",
      oldPrice: "$499.00",
      rating: "★★★★☆ 4.8",
      ratingValue: "4.8",
      reviews: "4",
      available: "in stock",
      img: "9-1920.png",
      desc: "Второй экземпляр MSI Pro 16 Flex. Такой же мощный 15.6-дюймовый сенсорный моноблок. Отличный вариант для организации рабочего места с минималистичным дизайном."
    },
    {
      id: "product-10",
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: "$499.00",
      oldPrice: "$499.00",
      rating: "★★★★☆ 4.8",
      ratingValue: "4.8",
      reviews: "4",
      available: "in stock",
      img: "10-1920.png",
      desc: "Третий экземпляр MSI Pro 16 Flex. Надежный моноблок для офисных задач и учебы. Сенсорный экран делает взаимодействие с программами более интуитивным."
    }
  ];

  // ============================================
  // 2. БАЗА ДАННЫХ ТОВАРОВ index.html(.customer)
  // Картинки лежат в папке: ./img/customer/1.jpg, 2.jpg, 3.jpg ...
  // ============================================
  const customers = [
    {
      id: "customer-1",
      title: "Ноутбук HP Business",
      price: "$899.00",
      oldPrice: "$1099.00",
      rating: "★★★★☆ 4.7",
      ratingValue: "4.7",
      reviews: "18",
      available: "in stock",
      img: "1.jpg",
      desc: "Надёжный ноутбук для бизнеса HP с отличной производительностью и защитой данных."
    },
    {
      id: "customer-2",
      title: "Монитор Dell UltraSharp",
      price: "$499.00",
      oldPrice: "",
      rating: "★★★★★ 5.0",
      ratingValue: "5.0",
      reviews: "42",
      available: "in stock",
      img: "2.jpg",
      desc: "27-дюймовый монитор Dell UltraSharp с 4K разрешением и отличной цветопередачей."
    },
    {
      id: "customer-3",
      title: "Наушники Sony WH-1000XM5",
      price: "$349.00",
      oldPrice: "$399.00",
      rating: "★★★★★ 4.9",
      ratingValue: "4.9",
      reviews: "56",
      available: "in stock",
      img: "3.jpg",
      desc: "Лучшие беспроводные наушники с шумоподавлением. До 30 часов работы, превосходное качество звука."
    },
    {
      id: "customer-4",
      title: "Механическая клавиатура",
      price: "$59.00",
      oldPrice: "",
      rating: "★★★★☆ 4.7",
      ratingValue: "4.7",
      reviews: "15",
      available: "in stock",
      img: "4.jpg",
      desc: "Игровая механическая клавиатура с механическими переключателями (Red/Blue). Характеризуется тактильной отдачей, долгим сроком службы и полной N-Key ролловером."
    },
    {
      id: "customer-5",
      title: "Монитор 27\" 4K",
      price: "$199.00",
      oldPrice: "$279.00",
      rating: "★★★★☆ 4.9",
      ratingValue: "4.9",
      reviews: "21",
      available: "in stock",
      img: "5.jpg",
      desc: "27-дюймовый 4K UHD монитор с отличной цветопередачей (IPS матрица) и тонкими рамками."
    }
  ];

  // ============================================
  // 3. БАЗА ДАННЫХ ТОВАРОВ index.html(.laptops)
  // Картинки лежат в папке: ./img/laptops/1.png, 2.png, 3.png ...
  // ============================================
  const laptops = [
    {
      id: "laptops-1",
      title: "Ноутбук MSI GS Series",
      price: "$1299.00",
      oldPrice: "$1499.00",
      rating: "★★★★★ 4.9",
      ratingValue: "4.9",
      reviews: "34",
      available: "in stock",
      img: "1.png",
      desc: "Игровой ноутбук MSI GS Series с процессором Intel Core i7, RTX 4060, 16GB RAM, 1TB SSD."
    },
    {
      id: "laptops-2",
      title: "Ноутбук MSI GT Series",
      price: "$1999.00",
      oldPrice: "$2299.00",
      rating: "★★★★★ 5.0",
      ratingValue: "5.0",
      reviews: "56",
      available: "in stock",
      img: "2.png",
      desc: "Топовый игровой ноутбук MSI GT Series с RTX 4080, Intel Core i9, 32GB RAM."
    },
    {
      id: "laptops-3",
      title: "Ноутбук MSI GL Series",
      price: "$899.00",
      oldPrice: "$1099.00",
      rating: "★★★★☆ 4.7",
      ratingValue: "4.7",
      reviews: "23",
      available: "in stock",
      img: "3.png",
      desc: "Бюджетный игровой ноутбук MSI GL Series с RTX 3050, Intel Core i5, 8GB RAM."
    },
    {
      id: "laptops-4",
      title: "Ноутбук MSI GE Series",
      price: "$1599.00",
      oldPrice: "$1799.00",
      rating: "★★★★★ 4.8",
      ratingValue: "4.8",
      reviews: "45",
      available: "in stock",
      img: "4.png",
      desc: "Мощный игровой ноутбук MSI GE Series с RTX 4070, Intel Core i7, 16GB RAM."
    },
    {
      id: "laptops-5",
      title: "Ноутбук MSI Prestige Series",
      price: "$1199.00",
      oldPrice: "",
      rating: "★★★★☆ 4.8",
      ratingValue: "4.8",
      reviews: "28",
      available: "in stock",
      img: "5.png",
      desc: "Ультрабук MSI Prestige Series для работы и бизнеса, Intel Core i7, 16GB RAM, 512GB SSD."
    }    
  ];

  // ============================================
  // 4. БАЗА ДАННЫХ ТОВАРОВ index.html(.desktops)
  // Картинки лежат в папке: ./img/desktops/1.png, 2.png, 3.png ...
  // ============================================
  const desktops = [
    {
      id: "desktops-1",
      title: "Ноутбук MSI GS Series",
      price: "$1299.00",
      oldPrice: "$1499.00",
      rating: "★★★★★ 4.9",
      ratingValue: "4.9",
      reviews: "34",
      available: "in stock",
      img: "1.png",
      desc: "Игровой ноутбук MSI GS Series с процессором Intel Core i7, RTX 4060, 16GB RAM, 1TB SSD."
    },
    {
      id: "desktops-2",
      title: "Ноутбук MSI GT Series",
      price: "$1999.00",
      oldPrice: "$2299.00",
      rating: "★★★★★ 5.0",
      ratingValue: "5.0",
      reviews: "56",
      available: "in stock",
      img: "2.png",
      desc: "Топовый игровой ноутбук MSI GT Series с RTX 4080, Intel Core i9, 32GB RAM."
    },
    {
      id: "desktops-3",
      title: "Ноутбук MSI GL Series",
      price: "$899.00",
      oldPrice: "$1099.00",
      rating: "★★★★☆ 4.7",
      ratingValue: "4.7",
      reviews: "23",
      available: "in stock",
      img: "3.png",
      desc: "Бюджетный игровой ноутбук MSI GL Series с RTX 3050, Intel Core i5, 8GB RAM."
    },
    {
      id: "desktops-4",
      title: "Ноутбук MSI GE Series",
      price: "$1599.00",
      oldPrice: "$1799.00",
      rating: "★★★★★ 4.8",
      ratingValue: "4.8",
      reviews: "45",
      available: "in stock",
      img: "4.png",
      desc: "Мощный игровой ноутбук MSI GE Series с RTX 4070, Intel Core i7, 16GB RAM."
    },
    {
      id: "desktops-5",
      title: "Ноутбук MSI Prestige Series",
      price: "$1199.00",
      oldPrice: "",
      rating: "★★★★☆ 4.8",
      ratingValue: "4.8",
      reviews: "28",
      available: "in stock",
      img: "5.png",
      desc: "Ультрабук MSI Prestige Series для работы и бизнеса, Intel Core i7, 16GB RAM, 512GB SSD."
    }    
  ];

  // ============================================
  // 5. БАЗА ДАННЫХ ТОВАРОВ index.html(.monitors)
  // Картинки лежат в папке: ./img/monitors/1.png, 2.png, 3.png ...
  // ============================================
  const monitors = [
    {
      id: "monitors-1",
      title: "Ноутбук MSI GS Series",
      price: "$1299.00",
      oldPrice: "$1499.00",
      rating: "★★★★★ 4.9",
      ratingValue: "4.9",
      reviews: "34",
      available: "in stock",
      img: "1.png",
      desc: "Игровой ноутбук MSI GS Series с процессором Intel Core i7, RTX 4060, 16GB RAM, 1TB SSD."
    },
    {
      id: "monitors-2",
      title: "Ноутбук MSI GT Series",
      price: "$1999.00",
      oldPrice: "$2299.00",
      rating: "★★★★★ 5.0",
      ratingValue: "5.0",
      reviews: "56",
      available: "in stock",
      img: "2.png",
      desc: "Топовый игровой ноутбук MSI GT Series с RTX 4080, Intel Core i9, 32GB RAM."
    },
    {
      id: "monitors-3",
      title: "Ноутбук MSI GL Series",
      price: "$899.00",
      oldPrice: "$1099.00",
      rating: "★★★★☆ 4.7",
      ratingValue: "4.7",
      reviews: "23",
      available: "in stock",
      img: "3.png",
      desc: "Бюджетный игровой ноутбук MSI GL Series с RTX 3050, Intel Core i5, 8GB RAM."
    },
    {
      id: "monitors-4",
      title: "Ноутбук MSI GE Series",
      price: "$1599.00",
      oldPrice: "$1799.00",
      rating: "★★★★★ 4.8",
      ratingValue: "4.8",
      reviews: "45",
      available: "in stock",
      img: "4.png",
      desc: "Мощный игровой ноутбук MSI GE Series с RTX 4070, Intel Core i7, 16GB RAM."
    },
    {
      id: "monitors-5",
      title: "Ноутбук MSI Prestige Series",
      price: "$1199.00",
      oldPrice: "",
      rating: "★★★★☆ 4.8",
      ratingValue: "4.8",
      reviews: "28",
      available: "in stock",
      img: "5.png",
      desc: "Ультрабук MSI Prestige Series для работы и бизнеса, Intel Core i7, 16GB RAM, 512GB SSD."
    }    
  ];

  // ============================================
  // ОБЪЕДИНЯЕМ ВСЕ ТОВАРЫ В ОДИН МАССИВ
  // ============================================
  const allGoods = [...products, ...customers, ...laptops, ...desktops, ...monitors];

  // ============================================
  // КОРЗИНА (localStorage)
  // ============================================
  
  // Получаем ID товара из URL
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  
  // Ищем товар в ОБЩЕМ массиве
  const product = allGoods.find(item => item.id == id);
  
  let localQuantity = 0;

  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.querySelector('.header__cart-count');
    if (cartCountElement) cartCountElement.textContent = totalCount;
  }

  function getCurrentQuantity() {
    if (!product) return 0;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === product.id);
    return item ? item.quantity : 0;
  }

  function updateLocalQuantityDisplay() {
    const qtySpan = document.getElementById('article-quantity');
    if (qtySpan) qtySpan.textContent = localQuantity;
  }

  function syncLocalQuantityWithCart() {
    localQuantity = getCurrentQuantity();
    updateLocalQuantityDisplay();
  }

  function applyToCart() {
    if (!product) return;
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (localQuantity === 0) {
      if (existingIndex !== -1) cart.splice(existingIndex, 1);
    } else {
      if (existingIndex !== -1) {
        cart[existingIndex].quantity = localQuantity;
      } else {
        cart.push({ id: product.id, title: product.title, price: product.price, quantity: localQuantity });
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }

  function localAdd() { 
    localQuantity++; 
    updateLocalQuantityDisplay(); 
  }
  
  function localRemove() { 
    if (localQuantity > 0) { 
      localQuantity--; 
      updateLocalQuantityDisplay(); 
    } 
  }

  // ============================================
  // ОТОБРАЖЕНИЕ ДАННЫХ ТОВАРА НА СТРАНИЦЕ
  // ============================================  
  if (product) {
    // КАРТИНКА (определяем папку по id)
    let imgFolder;
    if (product.id.startsWith('product')) imgFolder = 'catalog/products';
    else if (product.id.startsWith('customer')) imgFolder = 'customer';
    else if (product.id.startsWith('laptops')) imgFolder = 'laptops';
    else if (product.id.startsWith('desktops')) imgFolder = 'desktops';
    else if (product.id.startsWith('monitors')) imgFolder = 'monitors';
    else imgFolder = 'catalog/products';
    
    const imgElement = document.getElementById('article-img');
    if (imgElement) {
      imgElement.src = `./img/${imgFolder}/${product.img}`;
    }
    
    // НАЗВАНИЕ
    const titleElement = document.getElementById('article-title');
    if (titleElement) titleElement.textContent = product.title;
    
    // ОПИСАНИЕ
    const descElement = document.getElementById('article-desc');
    if (descElement) descElement.textContent = product.desc;
    
    // НАЛИЧИЕ
    const availableElement = document.getElementById('article-available');
    if (availableElement) availableElement.textContent = product.available;
    
    // ЦЕНА
    const oldPriceSpan = document.getElementById('article-old-price');
    const newPriceSpan = document.getElementById('article-new-price');
    if (oldPriceSpan && newPriceSpan) {
      if (product.oldPrice && product.oldPrice !== "") {
        oldPriceSpan.textContent = product.oldPrice;
        oldPriceSpan.style.display = 'inline';
      } else {
        oldPriceSpan.style.display = 'none';
      }
      newPriceSpan.textContent = product.price;
    }
    
    // КОЛИЧЕСТВО ОТЗЫВОВ
    const reviewsElement = document.getElementById('article-reviews');
    if (reviewsElement) reviewsElement.textContent = `Reviews (${product.reviews})`;
    
    // ЗВЁЗДЫ (картинками)
    const starsContainer = document.getElementById('article-stars');
    if (starsContainer) {
      starsContainer.innerHTML = '';
      const yellowCount = (product.rating.match(/★/g) || []).length;
      for (let i = 0; i < 5; i++) {
        const starImg = document.createElement('img');
        starImg.className = i < yellowCount ? 'catalog__rating-yellow-svg' : 'catalog__rating-gray-svg';
        starImg.src = i < yellowCount ? './img/catalog/svg/star.svg' : './img/catalog/svg/star-grey.svg';
        starImg.alt = '';
        starsContainer.appendChild(starImg);
      }
    }
    
    syncLocalQuantityWithCart();
  } else {
    // Если товар не найден
    const titleElement = document.getElementById('article-title');
    if (titleElement) titleElement.textContent = "Товар не найден";
  }

  // ============================================
  // НАВЕШИВАЕМ КНОПКИ
  // ============================================
  
  const addBtn = document.getElementById('add-to-cart');
  if (addBtn) addBtn.addEventListener('click', localAdd);
  
  const removeBtn = document.getElementById('remove-from-cart');
  if (removeBtn) removeBtn.addEventListener('click', localRemove);
  
  const cartBtn = document.getElementById('article__btn');
  if (cartBtn) cartBtn.addEventListener('click', applyToCart);
  
  updateCartCount();
  
});